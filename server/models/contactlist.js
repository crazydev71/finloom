'use strict';
module.exports = (sequelize, DataTypes) => {
  var ContactList = sequelize.define('ContactList', {
    name: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ContactList;
};