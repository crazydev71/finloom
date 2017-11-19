'use strict';
module.exports = (sequelize, DataTypes) => {
  var AccountBankType = sequelize.define('AccountBankType', {
    accountId: DataTypes.INTEGER,
    bankTypeId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    table_name: 'flm_account_bank_types'
  });
  return AccountBankType;
};