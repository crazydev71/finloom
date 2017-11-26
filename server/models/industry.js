'use strict';
module.exports = (sequelize, DataTypes) => {
  var Industry = sequelize.define('Industry', {
    name: DataTypes.STRING,
    status: {
      type: DataTypes.INTEGER(1),
      defaultValue: 1
    }
  }, {
    tableName: 'flm_industries'
  });

  Industry.associate = function(models) {
    models['Industry'].belongsToMany(models['Account'], {through: models['AccountIndustry']});
  }

  return Industry;
};