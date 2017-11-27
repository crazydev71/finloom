'use strict';
module.exports = (sequelize, DataTypes) => {
  var ContactEmail = sequelize.define('ContactEmail', {
    email: DataTypes.STRING,
    isVerified: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    isPrimary: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {
    tableName: 'flm_contact_emails'
  });

  ContactEmail.associate = function(models) {
    models['ContactEmail'].belongsTo(models['Contact']);
  };

  return ContactEmail;
};