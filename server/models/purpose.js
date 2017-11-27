'use strict';
module.exports = (sequelize, DataTypes) => {
  var Purpose = sequelize.define('Purpose', {
    purpose: DataTypes.STRING
  }, {
    tableName: 'flm_purposes',
    timestamps: false
  });
  return Purpose;
};