const Students = require('../models/Students');
const { Sequelize } = require('sequelize');

const getAllStudents = async (req, res) => {
  try {
    const students = await Students.findAll();
    res.json(students);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

const addStudents = async (req, res) => {
  try {
    const { username ,name, email, password, age, phoneNumber } = req.body;
    const students = await Students.create({
      username,
      name,
      email,
      password,
      age,
      phoneNumber,
    });
    res.json(students);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

module.exports = { getAllStudents, addStudents };
