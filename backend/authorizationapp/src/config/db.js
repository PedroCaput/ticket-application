const pgp = require('pg-promise')();
require('dotenv').config();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbName = process.env.DB_NAME;

const db = pgp(`postgres://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`);

// Testa a conexão
db.connect()
  .then(obj => {
    obj.done(); // libera a conexão
    console.log("Conectado ao PostgreSQL com sucesso!");
  })
  .catch(error => {
    console.error("Erro ao conectar ao PostgreSQL:", error.message || error);
  });

module.exports = db;