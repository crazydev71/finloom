'use strict';
module.exports = (sequelize, DataTypes) => {
  var Currency = sequelize.define('Currency', {
    name: DataTypes.STRING,
    code: DataTypes.STRING,
  }, {
    tableName: 'flm_currencies',
    timestamps: false
  });
  return Currency;
};