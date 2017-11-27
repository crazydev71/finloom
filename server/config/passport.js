'use strict';
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Contact = require('../models').Contact;

passport.serializeUser(function(contact, done) {
  done(null, contact.id);
});

passport.deserializeUser(function(id, done) {
  Contact.findById(id).then(contact => {
    done(null, contact);
  }).catch(err => {
    done(err);
  });
});

passport.use('local-login', new LocalStrategy(
  {
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
  },
  async (req, email, password, done) => {
    email = email.toLowerCase();
    try {
      const contact = await Contact.findOne({where: {primaryEmail: email}});
      if (!contact) {
        return done(null, false, {message: 'Invalid email or password.'});
      }
      if (!contact.validPassword(password)) {
        return done(null, false, {message: 'Invalide email or password.'})
      } 
      return done(null, contact);
    } catch (err) {
      return done(err);
    }
  }
));

passport.use('local-signup', new LocalStrategy(
  {
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
  },
  async (req, email, password, done) => {
    email = email.toLowerCase();
    console.log(req.body);
    try {
      const contact = await Contact.findOne({where: {primaryEmail: email}});
      if (contact) {
        return done(null, false, {message: 'Email already exist.'})
      }
      
      const newContact = Contact.build({primaryEmail: email, isRegistered: 1});
      newContact.password = newContact.generateHash(password);
      
      await newContact.save();
      return done(null, newContact);

    } catch (err) {
      return done(err);
    }
  }
));

module.exports = passport;