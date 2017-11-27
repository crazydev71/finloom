'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('flm_contact_x_lists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      contactId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'flm_contacts'
        }
      },
      contactListId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'flm_contact_lists'
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
    return queryInterface.dropTable('flm_contact_x_lists');
  }
};