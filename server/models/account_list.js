'use strict';
module.exports = (sequelize, DataTypes) => {
  var AccountList = sequelize.define('AccountList', {
    name: DataTypes.STRING,
    createdBy: DataTypes.INTEGER
  }, {
    tableName: 'flm_account_lists'
  });

  AccountList.associate = function(models) {
    models['AccountList'].belongsToMany(models['Account'], {through: models['AccountListEntry']});
  };

  return AccountList;
};