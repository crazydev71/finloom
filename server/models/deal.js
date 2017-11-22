'use strict';
module.exports = (sequelize, DataTypes) => {
  var Deal = sequelize.define('Deal', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Deal;
};