'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('flm_purposes', [
      {name: 'General Corporate Purposes'},
      {name: 'Acquisition Financing'},
      {name: 'Project Finance'},
      {name: 'Property Acquisition'},
      {name: 'Working Capital'},
      {name: 'Leveraged Buyout'},
      {name: 'Sponsored Buyout'},
      {name: 'Capital Expenditures'},
      {name: 'Ship Financing'},
      {name: 'Spinoff'},
      {name: 'Refinance Bank Debt'},
      {name: 'Other'},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('flm_purposes', null, {});
  }
};
