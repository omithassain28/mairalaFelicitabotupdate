const { Database } = require('quickmongo');
const db = new Database('mongodb+srv://Rakibxox:omit968965@cluster0.lbvtu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
db.connect().then(() => console.log('[ MONGO DB ] Connected to Mongo Database!'));

Database.set('strictQuery', false);

module.exports = db;
