const Courses = require('../models/Courses');
const Enrollment = require('../models/Enrollment');
const { Sequelize, Op } = require('sequelize');

const getAllCourses = async (req, res) => {
  try {
    const currentDate = new Date();

    const courses = await Courses.findAll({
      where: {
        date: {
          [Op.gt]: currentDate,
        },
      },
    });

    const enrollmentCounts = await Enrollment.findAll({
      attributes: [
        'coursesId',
        [Sequelize.fn('COUNT', Sequelize.col('id')), 'enrollmentCount'],
      ],
      group: ['coursesId'],
    });

    const coursesWithCount = courses.map((course) => {
      const enrollmentCount = enrollmentCounts.find(
        (count) => count.coursesId === course.id
      );
      return {
        id: course.id,
        description: course.description,
        date: course.date,
        maxParticipants: course.maxParticipants,
        remainingVacancies: course.remainingVacancies,
        enrollmentCount: enrollmentCount ? enrollmentCount.enrollmentCount : 0,
      };
    });

    res.json(coursesWithCount);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

const addCourse = async (req, res) => {
  try {
    const { description, date, maxParticipants, remainingVacancies } = req.body;
    const course = await Courses.create({
      description,
      date,
      maxParticipants,
      remainingVacancies,
    });
    res.json(course);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

module.exports = { getAllCourses, addCourse };
