'use strict';
module.exports = (sequelize, DataTypes) => {
  var ContactXList = sequelize.define('ContactXList', {
    contactListId: DataTypes.INTEGER,
    contactId: DataTypes.INTEGER
  }, {
    tableName: 'flm_contact_x_lists'
  });
  return ContactXList;
};