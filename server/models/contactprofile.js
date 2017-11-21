'use strict';
module.exports = (sequelize, DataTypes) => {
  var ContactProfile = sequelize.define('ContactProfile', {
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ContactProfile;
};