const { Sequelize, DataTypes } = require('sequelize')

const db = require('../database/conection')

const Courses = db.define('Courses', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  maxParticipants: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  remainingVacancies: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
})
  
module.exports = Courses