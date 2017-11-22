'use strict';
module.exports = (sequelize, DataTypes) => {
  var Purpose = sequelize.define('Purpose', {
    purpose: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    tableName: 'flm_purposes'
  });
  return Purpose;
};