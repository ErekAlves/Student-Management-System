const Students = require('../models/Students');
const { Sequelize } = require('sequelize');
const jwt = require('jsonwebtoken');

const getProfile = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: 'Invalid Token' });
    }

    const token = authorization.split(' ')[1];

    const { id } = jwt.verify(token, process.env.JWT_PASS || '');

    const student = await Students.findOne({ where: { id } });

    if (!student) {
      return res.status(401).json({ message: 'Not authorized' });
    }
    
    next();

  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};


module.exports = {getProfile}
