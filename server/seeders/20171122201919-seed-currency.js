'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('flm_currencies', [
      {name: 'US Dollar', code: 'USD'},
      {name: 'Euro', code: 'EUR'},
      {name: 'Japanese Yen', code: 'JPY'},
      {name: 'Indian Rupee', code: 'INR'},
      {name: 'British Pound', code: 'GBP'},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('flm_currencies', null, {});
  }
};
