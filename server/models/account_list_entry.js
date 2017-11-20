'use strict';
module.exports = (sequelize, DataTypes) => {
  var AccountListEntry = sequelize.define('AccountListEntry', {
    accountListId: DataTypes.INTEGER,
    accountId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    tableName: 'flm_account_list_entries'
  });
  return AccountListEntry;
};