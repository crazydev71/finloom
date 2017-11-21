'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('flm_contacts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: Sequelize.STRING,
      lastName: Sequelize.STRING,
      primaryEmail: Sequelize.STRING,
      phoneNumber: Sequelize.STRING,
      isAdminAccount: {
        type: Sequelize.INTEGER(1),
        defaultValue: 0
      },
      roleId: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        references: {
          model: 'flm_roles',
        }
      },
      accountId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'flm_accounts',
        }
      },
      password: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.INTEGER(1),
        defaultValue: 0
      },
      isRegistered: {
        type: Sequelize.INTEGER(1),
        defaultValue: 0
      },
      hasProfile: {
        type: Sequelize.INTEGER(1),
        defaultValue: 0
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
    return queryInterface.dropTable('flm_contacts');
  }
};