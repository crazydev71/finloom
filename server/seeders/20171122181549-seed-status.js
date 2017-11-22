'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('flm_statuses', [
      {name: 'Pending'},
      {name: 'Approved'},
      {name: 'Released', deal: 0, facility: 0, contract: 0, account: 0, book: 0, trade: 0},
      {name: 'Active', trade: 0, event: 0},
      {name: 'Settled', deal: 0, facility: 0, account: 0, book: 0},
      {name: 'Expired', deal: 0, contract: 0, account: 0, book: 0, trade: 0, event: 0},
      {name: 'Inactive', deal: 0, facility: 0, contract: 0, trade: 0, event: 0},
      {name: 'Terminated', contract: 0, account: 0, book: 0, trade: 0, event: 0},
      {name: 'Paid Off', deal: 0, facility: 0, account: 0, book: 0, trade: 0, event: 0},
      {name: 'Cancelled', account: 0, book: 0},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('flm_statuses', null, {});
  }
};
