const { Sequelize, DataTypes } = require('sequelize');

const db = require('../database/conection');

const Students = require('../models/Students');
const Courses = require('../models/Courses');

const Enrollment = db.define('Enrollment', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  studentsId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  coursesId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Enrollment.belongsTo(Students);
Enrollment.belongsTo(Courses);

module.exports = Enrollment;
