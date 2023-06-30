const Courses = require('../models/Courses')

const getAllCourses = async (req,res)=>{
    try {
        const courses = await Courses.findAll()
        res.json(courses);
      } catch (error) {
        console.error(error)
        res.status(500).send('Server Error')
      }
}

const addCourse = async (req,res)=>{
  try {
    const { description, date, maxParticipants, remainingVacancies  } = req.body
    const courses = await Courses.create({
      description,
      date,
      maxParticipants,
      remainingVacancies
    })
    res.json(courses)
  } catch (error) {
    console.error(error)
    res.status(500).send('Server Error')
  }  
}


module.exports={getAllCourses, addCourse}