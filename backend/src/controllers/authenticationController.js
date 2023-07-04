const Students = require('../models/Students');
const { Sequelize } = require('sequelize');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const studentLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const student = await Students.findOne({ where: { username } });

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, student.password);
    console.log(password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token = jwt.sign({ id: student.id }, process.env.JWT_PASS || '', {
      expiresIn: '8h',
    });

    res.json({ username: studentLogin, token: token, message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};
module.exports =  {studentLogin};
