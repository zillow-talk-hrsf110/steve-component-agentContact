const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password1!',
  database: 'agents',
});

connection.connect();

const getListedAgent = (houseId, callback) => {
  connection.query(`SELECT * FROM listedAgent WHERE houseId = ${houseId}`, (err, data) => {
    if (err) {
      console.log('RECEIVING LIST AGENT FAILED', err);
    } else {
      callback(err, data);
    }
  });
};

const getPremierAgents = (callback) => {
  connection.query('SELECT * FROM premierAgents', (err, data) => {
    if (err) {
      console.log('RETREVING PREMIER AGENTS FAILED', err);
    } else {
      callback(err, data);
    }
  });
};

module.exports = { getListedAgent, getPremierAgents };
