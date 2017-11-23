'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('flm_industries', [
      {name: 'Energy and Power'},
      {name: 'Materials'},
      {name: 'Industrials'},
      {name: 'Financials'},
      {name: 'Healthcare'},
      {name: 'Consumer Products and Services'},
      {name: 'Energy'},
      {name: 'Power'},
      {name: 'Telecommunications'},
      {name: 'Media and Entertainment'},
      {name: 'Real Estate'},
      {name: 'Retail'},
      {name: 'High Technology'},
      {name: 'Consumer Staples'},
      {name: 'Government and Agencies'},
      {name: 'Other'},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('flm_industries', null, {});
  }
};
