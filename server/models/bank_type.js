'use strict';
module.exports = (sequelize, DataTypes) => {
  var BankType = sequelize.define('BankType', {
    name: DataTypes.STRING,
    parentId: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {
    tableName: 'flm_bank_types'
  });

  BankType.associate = function(models) {
    models['BankType'].belongsToMany(models['Account'], {through: models['AccountBankType']});
  };
  
  return BankType;
};