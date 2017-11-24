'use strict';
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Contact = require('../models').Contact;

passport.use('local-login', new LocalStrategy(
  {
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
  },
  async (req, email, password, done) => {
    email = eamil.toLowerCase();
    try {
      const contact = await Contact.findOne({ primaryEmail: email });
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
    email = eamil.toLowerCase();
    try {
      const contact = await Contact.findOne({primaryEmail: email})
      if (contact) {
        return done(null, false, {message: 'Email already exist.'})
      }

      const hashPassword = Contact.generateHash(password);
      const newContact = await Contact.create({primaryEmail: email, password: hashPassword, isRegistered: 1});
      return done(null, newContact);

    } catch (err) {
      return done(err);
    }
    return done(null, contact)
  }
));

export default passport;