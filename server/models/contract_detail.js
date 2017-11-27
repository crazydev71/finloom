'use strict';
module.exports = (sequelize, DataTypes) => {
  var ContractDetail = sequelize.define('ContractDetail', {
    name: DataTypes.STRING,
    alias: DataTypes.STRING,
    shortCode: DataTypes.STRING,
    // currency: DataTypes.STRING, (refer Currency Model)
    originalAmount: DataTypes.DECIMAL,
    closingAmount: DataTypes.DECIMAL,
    currentAmount: DataTypes.DECIMAL,
    effectiveDate: DataTypes.DATE,
    estClosingDate: DataTypes.DATE,
    maturityDate: DataTypes.DATE,
    // status: DataTypes.STRING, (refer Status Model)
    description: DataTypes.TEXT,
    extensionConditions: DataTypes.TEXT,
    index: DataTypes.ENUM('Libor', 'Fixed', 'Prime'),
    type: DataTypes.ENUM('Loan', 'LC - Letter of Credit', 'Swingline', 'BA - Bankers Acceptance'),
    extensionAvailable: DataTypes.INTEGER,
    extensionPeriod: DataTypes.INTEGER,
    // extensionTerm: DataTypes.STRING, (refer ExtensionTerm Model)
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
  }, {
    tableName: 'flm_contract_details'
  });

  ContractDetail.associate = function(models) {
    models['ContractDetail'].belongsTo(models['Currency'], {foreignKey: 'currency', targetKey: 'code'});
    models['ContractDetail'].belongsTo(models['Status'], {foreignKey: 'status', targetKey: 'status'});
    models['ContractDetail'].belongsTo(models['ExtensionTerm'], {foreignKey: 'extensionTerm', targetKey: 'name'});
    models['ContractDetail'].belongsTo(models['Contact'], {foreignKey: 'createdBy', as: 'creator'});
    models['ContractDetail'].belongsTo(models['Contact'], {foreignKey: 'updatedBy', as: 'updater'});
  };

  return ContractDetail;
};