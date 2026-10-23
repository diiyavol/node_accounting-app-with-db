'use strict';

const { DataTypes } = require('sequelize');
const { sequelize } = require('../db.js');

const Expense = sequelize.define(
  'Expense',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'User', key: 'id' },
    },
    spentAt: {
      type: DataTypes.DATE,
    },
    title: {
      type: DataTypes.STRING,
    },
    amount: {
      type: DataTypes.FLOAT,
    },
    category: {
      type: DataTypes.STRING,
    },
    note: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'Expense',
    updatedAt: false,
    createdAt: false,
  },
);

module.exports = {
  Expense,
};
