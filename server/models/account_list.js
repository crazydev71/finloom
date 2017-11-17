'use strict';
module.exports = (sequelize, DataTypes) => {
  var account_list = sequelize.define('AccountList', {
    name: DataTypes.STRING,
    createdBy: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models['AccountList'].belongsToMany(models['Account'], {through: models['AccountListEntry']});
      }
    },
    tableName: 'flm_account_lists'
  });
  return account_list;
};