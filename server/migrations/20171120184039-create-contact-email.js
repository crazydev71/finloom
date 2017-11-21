'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ContactEmails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      contactId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'flm_contacts',
          allowNull: false
        }
      },
      isVerified: {
        type: Sequelize.INTEGER(1)
      },
      isPrimary: {
        type: Sequelize.INTEGER(1)
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
    return queryInterface.dropTable('ContactEmails');
  }
};