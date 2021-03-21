const Airtable = require('airtable');

const KEY = process.env.KEY;

const base = new Airtable({ apiKey: KEY }).base('app5MyMq1VN6a1Zvu')

module.exports = base;