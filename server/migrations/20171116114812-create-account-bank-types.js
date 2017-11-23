'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('flm_account_bank_types', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      accountId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'flm_accounts',
          key: 'id'
        },
        allowNull: false
      },
      bankTypeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'flm_bank_types',
          key: 'id'
        },
        allowNull: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('flm_account_bank_types');
  }
};