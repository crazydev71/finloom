'use strict';
module.exports = (sequelize, DataTypes) => {
  var ContactEmail = sequelize.define('ContactEmail', {
    email: DataTypes.STRING,
    isVerified: DataTypes.INTEGER,
    isPrimary: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models['ContactEmail'].belongsTo(models['Contact']);
      }
    },
    tableName: 'flm_contact_emails'
  });
  return ContactEmail;
};