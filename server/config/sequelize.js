var Sequelize = require('sequelize');

var env = "dev";
var config = require('./database.json')[env];
var password = config.password ? config.password : null;

var sequelize = new Sequelize(
  config.database,
  config.user,
  password,
  {
    host: config.host,
    dialect: 'mysql',
    logging: console.log,
    define: {
      timestamps: false
    },
    pool: {
      max: 100,
      min: 0,
      acquire: 30000,
      idle: 10000,
    }
  }
);

module.exports = sequelize;