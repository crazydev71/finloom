'use strict';
var Account = require('../models').Account;
var WebDomain = require('../models').WebDomain;
var EmailDomain = require('../models').EmailDomain;
var Contact = require('../models').Contact;
var ContactEmail = require('../models').ContactEmail;
module.exports = {
  up: (queryInterface, Sequelize) => {
    return Account.create({
      id: 1,
      aka: 'FinLoom',
      legalName: 'FinLoom Inc',
      shortCode: 'FLM',
      legalAddress: 'Park Ave, NY, 10020, US',
      accountStatus: 'active',
      primaryEmailDomain: 1,
      primaryWebDomain:1,
      isClient: 0,
      parentId: 0,
      accountType: 'master',
    }, {
    }).then(async (account) => {
      await WebDomain.create({
        name: 'finloom.com',
        accountId: account.id,
        status: 1
      });
      await EmailDomain.create({
        name: 'finloom.com',
        accountId: account.id,
        status: 1
      });
      var contact = await Contact.create({
        id: 1,
        firstName: 'Finloom',
        lastName: 'Admin',
        primaryEmail: 'admin@finloom.com',
        phoneNumber: '123456789',
        isPublice: 0,
        isAdminAccount: 1,
        isRegistered: 1,
        hasProfile: 1,
        password: '$2a$08$oahxcnHGMlnPKoc0OZRIXeSoHurGF8P1GW6ZJPkXIffneBcjVEbwW',
        accountId: account.id
      })
      
      ContactEmail.create({
        email: 'admin@finloom.com',
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
