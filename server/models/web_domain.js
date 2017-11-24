'use strict';
module.exports = (sequelize, DataTypes) => {
  var WebDomain = sequelize.define('WebDomain', {
    name: DataTypes.STRING,
    accountId: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models['WebDomain'].belongsTo(models['Account']);
      }
    },
    tableName: 'flm_web_domains'
  });
  return WebDomain;
};