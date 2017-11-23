'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('flm_bank_types', [
      {name: 'Borrower'},
      {name: 'Lender'},
      {name: 'Guarantor'},
      {name: 'Sponsor'},
      {name: 'Agent Bank'},
      {name: 'Arranger Bank'},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
