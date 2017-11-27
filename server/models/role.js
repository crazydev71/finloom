'use strict';
module.exports = (sequelize, DataTypes) => {
  var Role = sequelize.define('Role', {
    name: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    tableName: 'flm_roles',
    timestamps: false
  });
  
  return Role;
};