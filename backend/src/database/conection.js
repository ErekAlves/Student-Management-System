const { Sequelize } = require('sequelize');

require('dotenv').config();

const database = process.env.MYSQL_DB;
const user = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;

const sequelize = new Sequelize(database, user, password, {
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_DB_PORT || 3306,
  dialect: 'mysql',
  define: {
    freezeTableName: true,
  },
});

async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Connection successful');
  } catch (error) {
    console.error('Connection error');
  }
}

connectToDatabase();

module.exports = sequelize;
