'use strict';
var Account = require('../models').Account;
var WebDomain = require('../models').WebDomain;
var EmailDomain = require('../models').EmailDomain;
var Contact = require('../models').Contact;
var ContactEmail = require('../models').ContactEmail;
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
        name: 'finloom' + (new Date()).getTime() + '.com',
      }],
      emailDomains: [{
        name: 'finloom' + (new Date()).getTime() + '.com'
      }]
    }, {
      include: [
        { model: WebDomain, as: 'webDomains' }, 
        { model: EmailDomain, as: 'emailDomains' }
      ]
    }).then(async (account) => {
      var contact = await Contact.create({
        firstName: 'Finloom',
        lastName: 'Admin',
        primaryEmail: 'admin@finloom.com',
        phoneNumber: '123456789',
        isPublice: 0,
        isAdminAccount: 1,
        isRegistered: 1,
        hasProfile: 1,
        password: '$2a$08$IYsDZS9WZxJBblL1D9dM/urjlVRDeT9JiCCz2Q1jkkOZkvjP0Gqwa',
        accountId: account.id
      })
      
      ContactEmail.create({
        email: 'admin' + (new Date()).getTime() + '@finloom.com',
        isVerified: 1,
        isPrimary: 1,
        contactId: contact.id
      })
    }).catch(err => {
      console.log(err);
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('flm_contacts', null, {});

  }
};
