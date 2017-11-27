'use strict';
module.exports = (sequelize, DataTypes) => {
  var ExtensionTerm = sequelize.define('ExtensionTerm', {
    name: DataTypes.STRING,
    unit: DataTypes.ENUM('year', 'month', 'day'),
    value: DataTypes.INTEGER
  }, {
    tableName: 'flm_extension_terms',
    timestamps: false
  });

  return ExtensionTerm;
};