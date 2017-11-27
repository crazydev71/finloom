'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('flm_contacts', [
      { primaryEmail: 'admin@finloom.com', password: '$2a$08$d/YAW4BBHR0V662/eaAkLeDh9syggrTPaNUFLXWsSwIwPuyD1wes6', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('flm_contacts', null, {});
  }
};
