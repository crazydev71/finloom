'use strict';
module.exports = (sequelize, DataTypes) => {
  var ContractDetail = sequelize.define('ContractDetail', {
    name: DataTypes.STRING,
    alias: DataTypes.STRING,
    shortCode: DataTypes.STRING,
    originalAmount: DataTypes.DECIMAL,
    closingAmount: DataTypes.DECIMAL,
    currentAmount: DataTypes.DECIMAL,
    effectiveDate: DataTypes.DATE,
    estClosingDate: DataTypes.DATE,
    maturityDate: DataTypes.DATE,
    status: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    extensionConditions: DataTypes.TEXT,
    index: DataTypes.INTEGER,
    type: DataTypes.INTEGER,
    extensionAvailable: DataTypes.INTEGER,
    extensionPeriod: DataTypes.INTEGER,
    extensionTerm: DataTypes.INTEGER,
    swingline: DataTypes.INTEGER,
    swinglineAmount: DataTypes.DECIMAL,
    spread: DataTypes.DECIMAL,
    baseRate: DataTypes.DECIMAL,
    penaltySpread: DataTypes.DECIMAL,
    extraSpread: DataTypes.DECIMAL,
    amortizationRate: DataTypes.DECIMAL,
    amortizationPeriod: DataTypes.INTEGER,
    lastRolloverDate: DataTypes.DATE,
    nextRolloverDate: DataTypes.DATE,
    createdBy: DataTypes.INTEGER,
    updatedBy: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models['ContractDetail'].belongsTo(models['Currency'], {foreignKey: 'currency', targetKey: 'name'});
        
      }
    },
    tableName: 'flm_contract_details'
  });
  return ContractDetail;
};