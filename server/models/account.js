'use strict';
module.exports = (sequelize, DataTypes) => {
  var Account = sequelize.define('Account', {
    aka: DataTypes.STRING,  // aka of account
    legalName: DataTypes.STRING,  // legal name
    shortCode: DataTypes.STRING,  // short code
    domain: DataTypes.STRING, // account domain
    legalAddress: DataTypes.STRING, // address
    accountStatus: { // status, should be verified by admin
      type: DataTypes.ENUM('active', 'pending', 'inactive'),
      defaultValue: 'active' 
    }, 
    isClient: { // is available for participating in deal
      type: DataTypes.INTEGER(1),
      defaultValue: 0
    },
    parentId: { // parent account
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    accountType: DataTypes.ENUM('master', 'lob', 'sub'), // account type
  }, {
    classMethods: {
      associate: function(models) {
        models['Account'].belongsToMany(models['BankType'], {through: models['AccountBankType']});
        models['Account'].belongsToMany(models['AccountList'], {through: models['AccountListEntry']});
        models['Account'].belongsToMany(models['Industry'], {through: models['AccountIndustry']});
        models['Account'].hasMany(models['Contact']);
      }
    },
    tableName: 'flm_accounts'
  });
  return Account;
};