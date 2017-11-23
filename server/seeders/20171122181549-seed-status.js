'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('flm_statuses', [
      {status: 'Pending', deal: 1, facility: 1, contract: 1, account: 1, book: 1, trade: 1, event: 1},
      {status: 'Approved', deal: 1, facility: 1, contract: 1, account: 1, book: 1, trade: 1, event: 1},
      {status: 'Released', deal: 0, facility: 0, contract: 0, account: 0, book: 0, trade: 0, event:1},
      {status: 'Active', deal: 1, facility: 1, contract: 1, account: 1, book: 1, trade: 0, event: 0},
      {status: 'Settled', deal: 0, facility: 0, contract: 1, account: 0, book: 0, trade: 1, event: 1},
      {status: 'Expired', deal: 0, facility: 1, contract: 0, account: 0, book: 0, trade: 0, event: 0},
      {status: 'Inactive', deal: 0, facility: 0, contract: 0, account: 1, book: 1, trade: 0, event: 0},
      {status: 'Terminated', deal: 1, facility: 1, contract: 0, account: 0, book: 0, trade: 0, event: 0},
      {status: 'Paid Off', deal: 0, facility: 0, contract: 1, account: 0, book: 0, trade: 0, event: 0},
      {status: 'Cancelled', deal: 1, facility: 1, contract: 1, account: 0, book: 0, trade: 1, event: 1},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('flm_statuses', null, {});
  }
};
