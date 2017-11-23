'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('flm_bank_types', [
      {
        id: 1,
        name: 'Lender',
        parentId: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 2,
        name: 'Borrower',
        parentId: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 3,
        name: 'Guarantor',
        parentId: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 4,
        name: 'Agent Bank',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 5,
        name: 'Syndicate Bank',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 6,
        name: 'Sponsor',
        parentId: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('flm_bank_types');
  }
};