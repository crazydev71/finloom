'use strict';
module.exports = (sequelize, DataTypes) => {
  var ContactList = sequelize.define('ContactList', {
    name: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    tableName: 'flm_contact_lists'
  });

  ContactList.associate = function(models) {
    models['ContactList'].belongsTo(models['Account']);
  };

  return ContactList;
};