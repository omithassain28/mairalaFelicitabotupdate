const { Database } = require('quickmongo');

const db = new Database('mongodb+srv://pee33:wnn99e@cluster0.fgivnid.mongodb.net/?retryWrites=true&w=majority');
db.connect().then(() => console.log('[ MONGO DB ] Connected to Mongo Database!'));

module.exports = db;