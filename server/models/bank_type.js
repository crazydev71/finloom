'use strict';
module.exports = (sequelize, DataTypes) => {
  var BankType = sequelize.define('BankType', {
    name: DataTypes.STRING,
    parentId: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models['BankType'].belongsToMany(models['Account'], {through: models['AccountBankType']});
      }
    },
    tableName: 'flm_bank_types'
  });
  return BankType;
};