'use strict';
module.exports = (sequelize, DataTypes) => {
  var Contact = sequelize.define('Contact', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    primaryEmail: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    isAdminAccount: DataTypes.INTEGER,
    isPublic: DataTypes.INTEGER,
    
    password: DataTypes.STRING,
    status: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    isRegistered: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    hasProfile: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {
    classMethods: {
      associate: function(models) {
        models['Contact'].belongsTo(models['Role']);
        models['Contact'].belongsTo(models['Account']);
        models['Contact'].belongsToMany(models['ContactList'],{through: models['ContactXList']});
        models['Contact'].hadMany(models['ContactEmail']);
      }
    },
    tableName: 'flm_contacts'
  });
  return Contact;
};