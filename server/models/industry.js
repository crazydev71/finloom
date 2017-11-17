'use strict';
module.exports = (sequelize, DataTypes) => {
  var Industry = sequelize.define('Industry', {
    name: DataTypes.STRING,
    status: {
      type: DataTypes.INTEGER(1),
      defaultValue: 1
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models['Industry'].hasMany(models['Account'])
      }
    },

    tableName: 'flm_industries'
  });
  return Industry;
};