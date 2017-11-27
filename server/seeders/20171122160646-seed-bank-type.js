'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('flm_bank_types', [
      {name: 'Lender', createdAt: new Date(), updatedAt: new Date()},
      {name: 'Guarantor', createdAt: new Date(), updatedAt: new Date()},
      {name: 'Borrower', createdAt: new Date(), updatedAt: new Date()},
      {name: 'Agent Bank', parentId: 1, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Arranger Bank', parentId: 1, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Sponsor', createdAt: new Date(), updatedAt: new Date()},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('flm_bank_types', null, {});
  }
};
