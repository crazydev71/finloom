'use strict';
module.exports = (sequelize, DataTypes) => {
  var AccountIndustry = sequelize.define('AccountIndustry', {
    accountId: DataTypes.INTEGER,
    industryId: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    tableName: 'flm_account_industries'
  });
  return AccountIndustry;
};