'use strict';
module.exports = (sequelize, DataTypes) => {
  var ContactList = sequelize.define('ContactList', {
    name: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models['ContactList'].belongsTo(models['Account']);
      }
    },
    tableName: 'flm_contact_lists'
  });
  return ContactList;
};