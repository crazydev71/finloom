'use strict';
module.exports = (sequelize, DataTypes) => {
  var ExtensionTerm = sequelize.define('ExtensionTerm', {
    name: DataTypes.STRING,
    unit: DataTypes.ENUM('year', 'month', 'day'),
    value: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    tableName: 'flm_extension_terms'
  });
  return ExtensionTerm;
};