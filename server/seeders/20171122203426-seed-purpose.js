'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('flm_purposes', [
      {purpose: 'General Corporate Purposes'},
      {purpose: 'Acquisition Financing'},
      {purpose: 'Project Finance'},
      {purpose: 'Property Acquisition'},
      {purpose: 'Working Capital'},
      {purpose: 'Leveraged Buyout'},
      {purpose: 'Sponsored Buyout'},
      {purpose: 'Capital Expenditures'},
      {purpose: 'Ship Financing'},
      {purpose: 'Spinoff'},
      {purpose: 'Refinance Bank Debt'},
      {purpose: 'Other'},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('flm_purposes', null, {});
  }
};
