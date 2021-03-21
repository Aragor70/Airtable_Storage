const express = require('express');
const router = express.Router();

const getTools = require('../../utils/getTools')
const getLedgers = require('../../utils/getLedgers')

// return tools to re-order


router.get('/', async(req, res) => {

    let tools = await getTools('Tools')

    const ledgers = await getLedgers('Ledger')

    let lost = []


    for (let i = 0; i < ledgers.length; i++) {

        if (ledgers[i].status !== 'Available') {

            tools = tools.map((element) => element.id === ledgers[i].type ? {...element, count: element.count - 1} : element)

            
            lost = [...lost, ledgers[i].type]
        }
    }

    let orderList = []

    for (let i = 0; i < tools.length; i++) {

        if (tools[i].count < 3) {
            orderList = [...orderList, { ...tools[i], toOrder: 3 - tools[i].count }]
        }

    }


    
    return res.json({ success: true, orderList });

});

module.exports = router;