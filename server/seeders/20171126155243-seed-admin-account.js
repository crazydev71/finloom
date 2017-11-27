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
        name: 'finloom.com',
      }],
      emailDomains: [{
        name: 'finloom.com'
      }],
      contacts: [{
        firstName: 'Finloom',
        lastName: 'Admin',
        primaryEmail: 'admin@finloom.com',
        phoneNumber: '123456789',
        isPublice: 0,
        isAdminAccount: 1,
        isRegistered: 0,
        hasProfile: 1,
        contactEmails: [{
          name: 'admin@finloom.com',
          isVerified: 1,
          isPrimary: 1
        }]
      }]
    }, {
      include: [
        { model: WebDomain, as: 'webDomains' }, 
        { model: EmailDomain, as: 'emailDomains' },
        { model: Contact, as: 'contacts', include: [{model: ContactEmail, as: 'contactEmails'}] }
      ]
    });
  },

  down: (queryInterface, Sequelize) => {
    return Account.findOne({aka: 'Finloom', accountType: 'master'}).then(account => {
      if (account)
        account.destroy();
    });
  }
};
