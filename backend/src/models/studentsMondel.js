const connection = require('./conection');



const getAllStudents = async () => {
    
    const [students] =  await connection.execute('SELECT * FROM students')

    return students

};

module.exports = { getAllStudents}