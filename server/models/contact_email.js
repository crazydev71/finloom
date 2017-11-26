'use strict';
module.exports = (sequelize, DataTypes) => {
  var ContactEmail = sequelize.define('ContactEmail', {
    email: DataTypes.STRING,
    isVerified: DataTypes.INTEGER,
    isPrimary: DataTypes.INTEGER
  }, {
    tableName: 'flm_contact_emails'
  });

  ContactEmail.associate = function(models) {
    models['ContactEmail'].belongsTo(models['Contact']);
  };

  return ContactEmail;
};