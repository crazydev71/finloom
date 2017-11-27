'use strict';
module.exports = (sequelize, DataTypes) => {
  var Role = sequelize.define('Role', {
    name: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  return Role;
};