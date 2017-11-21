'use strict';
module.exports = (sequelize, DataTypes) => {
  var ContactXList = sequelize.define('ContactXList', {
    contactId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ContactXList;
};