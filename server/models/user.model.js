'use strict'
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('User', {
    firstName: DataTypes.TEXT,
    lastName: DataTypes.TEXT,
    Email: DataTypes.TEXT,
    Password: DataTypes.TEXT,
    Role: DataTypes.TEXT,
    Active: DataTypes.BOOLEAN,
    AkaName: DataTypes.TEXT,
    ShortCode: DataTypes.TEXT,
    Private: DataTypes.BOOLEAN,
    Master: DataTypes.BOOLEAN,
    Account: DataTypes.INTEGER
  });
}