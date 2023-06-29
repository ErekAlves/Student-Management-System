const sequelize = require('./conection');

const getAllStudents = async () => {
  const [students] = await sequelize.('SELECT * FROM students');

  return students;
};

module.exports = { getAllStudents };
