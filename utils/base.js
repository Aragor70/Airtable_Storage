const Airtable = require('airtable');

const KEY = process.env.KEY;

const base = new Airtable({ apiKey: KEY }).base(process.env.Base_ID)

module.exports = base;