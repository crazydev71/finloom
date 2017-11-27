'use strict';
module.exports = (sequelize, DataTypes) => {
  var Account = sequelize.define('Account', {
    aka: DataTypes.STRING,  // aka of account
    legalName: DataTypes.STRING,  // legal name
    shortCode: DataTypes.STRING,  // short code
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
    tableName: 'flm_accounts'
  });

  Account.associate = function (models) {
    models['Account'].belongsToMany(models['BankType'], {through: models['AccountBankType']});
    models['Account'].belongsToMany(models['AccountList'], {through: models['AccountListEntry']});
    models['Account'].belongsToMany(models['Industry'], {through: models['AccountIndustry']});
    models['Account'].hasMany(models['Contact'], {as: 'contacts', onDelete: 'CASCADE'});
    models['Account'].hasMany(models['ContactList'], {as: 'contactLists', onDelete: 'CASCADE'});

    models['Account'].hasMany(models['WebDomain'], {as: 'webDomains', onDelete: 'CASCADE'});
    models['Account'].belongsTo(models['WebDomain'], {foreignKey: 'primaryWebDomain'});
    
    models['Account'].hasMany(models['EmailDomain'], {as: 'emailDomains', onDelete: 'CASCADE'});
    models['Account'].belongsTo(models['EmailDomain'], {foreignKey: 'primaryWebDomain'});
  };

  return Account;
};