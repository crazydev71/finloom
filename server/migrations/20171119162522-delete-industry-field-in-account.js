'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('flm_accounts', 'industryId');
  },

  down: (queryInterface, Sequelize) => {

  }
};
