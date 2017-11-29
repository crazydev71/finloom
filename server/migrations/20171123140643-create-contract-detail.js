'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('flm_contract_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      alias: {
        type: Sequelize.STRING,
        allowNull: false
      },
      shortCode: {
        type: Sequelize.STRING,
        allowNull: false
      },
      currency: {
        type: Sequelize.STRING,
        references: {
          model: 'flm_currencies',
          key: 'code'
        }
      },
      originalAmount: Sequelize.DECIMAL(28,3),
      closingAmount: Sequelize.DECIMAL(28,3),
      currentAmount: Sequelize.DECIMAL(28,3),
      effectiveDate: Sequelize.DATE,
      estClosingDate: Sequelize.DATE,
      maturityDate: Sequelize.DATE,
      status: {
        type: Sequelize.STRING,
        references: {
          model: 'flm_statuses',
          key: 'status'
        }
      },
      description: Sequelize.TEXT,
      extensionConditions: Sequelize.TEXT,
      index: Sequelize.ENUM('Libor', 'Fixed', 'Prime'),
      type: Sequelize.ENUM('Loan', 'LC - Letter of Credit', 'Swingline', 'BA - Bankers Acceptance'),
      extensionAvailable: {
        type: Sequelize.INTEGER(1),
        defaultValue: 0
      },
      extensionPeriod: {
        type: Sequelize.INTEGER,
        defaultValue: 1
      },
      extensionTerm: {
        type: Sequelize.STRING,
        references: {
          model: 'flm_extension_terms',
          key: 'name'
        }
      },
      swingline: {
        type: Sequelize.INTEGER(1),
        defaultValue: 0
      },
      swinglineAmount: Sequelize.DECIMAL(28,3),
      spread: Sequelize.DECIMAL(31,11),
      baseRate: Sequelize.DECIMAL(31,11),
      penaltySpread: Sequelize.DECIMAL(31,11),
      extraSpread: Sequelize.DECIMAL(31,11),
      amortizationRate: Sequelize.DECIMAL(31,11),
      amortizationPeriod: {
        type: Sequelize.INTEGER,
        defaultValue: 1
      },
      lastRolloverDate: Sequelize.DATE,
      nextRolloverDate: Sequelize.DATE,
      createdBy: {
        type: Sequelize.INTEGER
      },
      updatedBy: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('flm_contract_details');
  }
};