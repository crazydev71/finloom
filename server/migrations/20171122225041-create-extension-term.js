'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('flm_extension_terms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        unique: true,
      },
      unit: {
        type: Sequelize.ENUM('year', 'month', 'day'),
        defaultValue: 'year'
      },
      value: {
        type: Sequelize.INTEGER,
        defaultValue: 1
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('flm_extension_terms');
  }
};