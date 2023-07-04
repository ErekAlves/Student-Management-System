const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

const db = require('../database/conection');

const Students = db.define('Students', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Students.beforeCreate(async (student) => {
  const passwordHash = await bcrypt.hash(student.password, 10);
  student.password = passwordHash;
});


module.exports = Students;
