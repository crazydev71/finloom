'use strict';
module.exports = (sequelize, DataTypes) => {
  var AccountIndustry = sequelize.define('AccountIndustry', {
    accountId: DataTypes.INTEGER,
    industryId: DataTypes.INTEGER,
  }, {
    tableName: 'flm_account_industries'
  });
  return AccountIndustry;
};