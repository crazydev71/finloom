'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('flm_industries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: Sequelize.STRING,
      status: {
        type: Sequelize.INTEGER,
        defaultValue: 1
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('flm_industries');
  }
};
