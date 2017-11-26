'use strict';
var Account = require('../models').Account;
var WebDomain = require('../models').WebDomain;
var EmailDomain = require('../models').EmailDomain;
module.exports = {
  up: (queryInterface, Sequelize) => {
    return Account.create({
      aka: 'FinLoom',
      legalName: 'FinLoom Inc',
      shortCode: 'FLM',
      legalAddress: 'Park Ave, NY, 10020, US',
      accountStatus: 'active',
      isClient: 0,
      parentId: 0,
      accountType: 'master',
      webDomains: [{
        name: 'finloom.com',
      }],
      EmailDomains: [{
        name: 'finloom.com'
      }]
    }, {
      include: [WebDomain, EmailDomain]
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('flm_accounts', null, {});
  }
};
