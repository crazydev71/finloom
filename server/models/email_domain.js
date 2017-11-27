'use strict';
module.exports = (sequelize, DataTypes) => {
  var EmailDomain = sequelize.define('EmailDomain', {
    name: DataTypes.STRING,
    accountId: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  }, {
    tableName: 'flm_email_domains'
  });

  EmailDomain.associate = function(models) {
    models['EmailDomain'].belongsTo(models['Account']);
  };

  return EmailDomain;
};