'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ContactXLists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      contactId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'flm_contacts',
          allowNull: false
        }
      },
      contactListId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'flm_contact_lists',
          allowNull: false
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ContactXLists');
  }
};