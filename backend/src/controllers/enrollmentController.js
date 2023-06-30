const Enrollments = require('../models/Enrollment')
const Courses = require('../models/Courses')

const getEnrollments = async (req,res)=>{
    try {
        const enrollements = await Enrollments.findAll()
        res.json(enrollements)
      } catch (error) {
        console.error(error)
        res.status(500).send('Server Error')
      }
}

const addEnrollment = async (req,res)=>{
  try {
    const { studentsId  } = req.body


    const enrollements = await Enrollments.create({
      coursesId,
      studentsId
    })

    const courses = await Courses.findByPk(studentsId)
    

    if (!courses) {
      return res.status(404).json({ message: 'Courses not found' })
    }

    if (courses.remainingVacancies === 0) {
      return res.status(400).json({ message: 'No remaining vacancy' })
    }

    Courses.decrement('remainingVacancies')
    await Courses.save()

    res.json(enrollment)
  } catch (error) {
    console.error(error)
    res.status(500).send('Server Error')
  }  
}

module.exports={getEnrollments, addEnrollment}