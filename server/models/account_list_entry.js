'use strict';
module.exports = (sequelize, DataTypes) => {
  var AccountListEntry = sequelize.define('AccountListEntry', {
    accountListId: DataTypes.INTEGER,
    accountId: DataTypes.INTEGER
  }, {
    tableName: 'flm_account_list_entries'
  });
  return AccountListEntry;
};