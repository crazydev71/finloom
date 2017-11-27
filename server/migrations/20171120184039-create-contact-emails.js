'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('flm_contact_emails', {
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
          model: 'flm_contacts'
        }
      },
      isVerified: {
        type: Sequelize.INTEGER(1),
        defaultValue: 0,
      },
      isPrimary: {
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
    return queryInterface.dropTable('flm_contact_emails');
  }
};