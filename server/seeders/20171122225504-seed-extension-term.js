'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('flm_extension_terms', [
      {name: '364 Days', unit: 'day', value: '364'},
      {name: '1 Year', unit: 'year', value: '1'},
      {name: '6 Months', unit: 'month', value: '6'},
      {name: '3 Months', unit: 'month', value: '3'},
      {name: '1 Month', unit: 'month', value: '1'},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('flm_extension_terms', null, {});
  }
};
