'use strict';
module.exports = (sequelize, DataTypes) => {
  var Contact = sequelize.define('Contact', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    primaryEmail:  DataTypes.STRING,
    password: DataTypes.STRING,
    statusCode: {
      type: DataTypes.INTEGER,
      defaultValue: 1
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
        // associations can be defined here
      }
    },
    tableName: 'flm_contacts'
  });
  return Contact;
};