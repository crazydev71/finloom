'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('flm_statuses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING,
        unique: true
      },
      deal: {
        type: Sequelize.INTEGER(1),
        defaultValue: 1
      },
      facility: {
        type: Sequelize.INTEGER(1),
        defaultValue: 1
      },
      contract: {
        type: Sequelize.INTEGER(1),
        defaultValue: 1
      },
      account: {
        type: Sequelize.INTEGER(1),
        defaultValue: 1
      },
      book: {
        type: Sequelize.INTEGER(1),
        defaultValue: 1
      },
      trade: {
        type: Sequelize.INTEGER(1),
        defaultValue: 1
      },
      event: {
        type: Sequelize.INTEGER(1),
        defaultValue: 1
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('flm_statuses');
  }
};