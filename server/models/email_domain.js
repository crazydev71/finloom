'use strict';
module.exports = (sequelize, DataTypes) => {
  var EmailDomain = sequelize.define('EmailDomain', {
    name: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models['EmailDomain'].belongsTo(models['Account']);
      }
    },
    tableName: 'flm_email_domains'
  });
  return EmailDomain;
};