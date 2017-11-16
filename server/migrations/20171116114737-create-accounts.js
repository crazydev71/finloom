'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('flm_accounts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      aka: Sequelize.STRING,  // aka of account
      
      legalName: Sequelize.STRING,  // legal name
      
      shortCode: Sequelize.STRING,  // short code
      
      domain: Sequelize.STRING, // account domain
      
      legalAddress: Sequelize.STRING, // address
      
      accountStatus: { // status, should be verified by admin
        type: Sequelize.ENUM('active', 'pending', 'inactive'),
        defaultValue: 'active' 
      }, 
      
      isClient: { // is available for participating in deal
        type: Sequelize.INTEGER(1),
        defaultValue: 0
      },
      
      parentId: { // parent account
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      
      accountType: Sequelize.ENUM('master', 'lob', 'sub'), // account type

      industryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'flm_industries',
          key: 'id'
        }
      },

    })
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('flm_accounts');
  }
};
