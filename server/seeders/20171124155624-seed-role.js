'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('flm_roles', [
      { name: 'Salesperson', status: 1},
      { name: 'Researcher', status: 1},
      { name: 'Trader', status: 1},
      { name: 'Closer', status: 1},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('flm_roles', null, {});
  }
};
