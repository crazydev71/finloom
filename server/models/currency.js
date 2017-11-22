'use strict';
module.exports = (sequelize, DataTypes) => {
  var Currency = sequelize.define('Currency', {
    name: DataTypes.STRING,
    code: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Currency;
};