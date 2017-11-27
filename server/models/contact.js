'use strict';
var bcrypt   = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
  var Contact = sequelize.define('Contact', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    primaryEmail: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    isAdminAccount: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    isPublic: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    defaultInvitee: {
      type: DataTypes.INTEGER(1),
      defaultValue: 0
    },
    password: DataTypes.STRING,
    status: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    isRegistered: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    hasProfile: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {
    tableName: 'flm_contacts'
  });

  Contact.associate = function(models) {
    models['Contact'].belongsTo(models['Role'], {foreignKey: 'accountId'});
    models['Contact'].belongsTo(models['Account'], {foreignKey: 'accountId'});
    models['Contact'].belongsToMany(models['ContactList'], {through: models['ContactXList']});
    models['Contact'].hasMany(models['ContactEmail'], {as: 'contactEmails', onDelete: 'CASCADE'});
  };

  Contact.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.getDataValue('password'));
  };

  Contact.prototype.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };

  return Contact;
};
