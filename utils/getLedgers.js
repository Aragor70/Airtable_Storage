const base = require('./base');


const getLedgers = async (trigger) => {

    const table = base(trigger)

    const records = await table.select().firstPage()

    let ledgers = []

    for (let i = 0; i < records.length; i++) {
        
        ledgers = [...ledgers, { tag: records[i].get('Asset Tag').text, type: records[i].get('Tool Type')[0], status: records[i].get('Status') }]

    }
    return ledgers;
    
}

module.exports = getLedgers;