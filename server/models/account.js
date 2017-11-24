'use strict';
module.exports = (sequelize, DataTypes) => {
  var Account = sequelize.define('Account', {
    aka: DataTypes.STRING,  // aka of account
    legalName: DataTypes.STRING,  // legal name
    shortCode: DataTypes.STRING,  // short code
    legalAddress: DataTypes.STRING, // address
    primaryWebDomain: DataTypes.INTEGER,
    primaryEmailDomain: DataTypes.INTEGER,
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
        models['Account'].hasMany(models['ContactList']);
        models['Account'].hadMany(models['WebDomain']);
        models['Account'].belongsTo(models['WebDomain'], {as: 'primaryWebDomain'});
        models['Account'].hadMany(models['EmailDomain']);
        models['Account'].belongsTo(models['EmailDomain'], {as: 'primaryEmailDomain'});
      }
    },
    tableName: 'flm_accounts'
  });
  return Account;
};