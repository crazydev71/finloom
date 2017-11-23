'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('flm_bank_types', [
      {name: 'Lender'},
      {name: 'Guarantor'},
      {name: 'Borrower'},
      {name: 'Agent Bank', parentId: 1},
      {name: 'Arranger Bank', parentId: 1},
      {name: 'Sponsor'},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('flm_bank_types', null, {});
  }
};
