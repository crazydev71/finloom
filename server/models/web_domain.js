'use strict';
module.exports = (sequelize, DataTypes) => {
  var WebDomain = sequelize.define('WebDomain', {
    name: DataTypes.STRING,
    accountId: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  }, {
    tableName: 'flm_web_domains'
  });

  WebDomain.associate = function (models) {
    models['WebDomain'].belongsTo(models['Account']);
  };

  return WebDomain;
};