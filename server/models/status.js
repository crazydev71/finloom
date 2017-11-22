'use strict';
module.exports = (sequelize, DataTypes) => {
  var Status = sequelize.define('Status', {
    status: DataTypes.STRING,
    deal: DataTypes.INTEGER,
    facility: DataTypes.INTEGER,
    contract: DataTypes.INTEGER,
    account: DataTypes.INTEGER,
    book: DataTypes.INTEGER,
    trade: DataTypes.INTEGER,
    event: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Status;
};