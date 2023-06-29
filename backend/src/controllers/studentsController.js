const studentsMondel = require('../models/studentsMondel')

const getAllStudents =  async (req, res) => {

    const students = await studentsMondel.getAllStudents()
    
    return res.status(200).json(students)


};

module.exports = {getAllStudents};