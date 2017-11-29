'use strict';
module.exports = (sequelize, DataTypes) => {
  var AccountBankType = sequelize.define('AccountBankType', {
    accountId: DataTypes.INTEGER,
    bankTypeId: DataTypes.INTEGER
  }, {
    tableName: 'flm_account_bank_types'
  });
  return AccountBankType;
};