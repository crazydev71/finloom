'use strict';
module.exports = (sequelize, DataTypes) => {
  var ContactXList = sequelize.define('ContactXList', {
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    tableName: 'flm_contact_x_lists'
  });
  return ContactXList;
};