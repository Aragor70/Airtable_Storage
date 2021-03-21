const base = require('./base');

const getTools = async (trigger) => {

    const table = base(trigger)

    const records = await table.select().firstPage()

    let tools = []

    for (let i = 0; i < records.length; i++) {
        
        tools = [...tools, { id: records[i].id, name: records[i].get('Tool Name'), count: records[i].get('Restock Count') }]

    }
    return tools;
    
}
module.exports = getTools;