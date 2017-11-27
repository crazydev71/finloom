'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('flm_account_list_entries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      accountListId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'flm_account_lists'
        }
      },
      accountId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'flm_accounts'
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
    return queryInterface.dropTable('flm_account_list_entries');
  }
};