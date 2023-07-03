const Enrollment = require('../models/Enrollment');
const Courses = require('../models/Courses');

const getEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.findAll();
    res.json(enrollments);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

const addEnrollment = async (req, res) => {
  try {
    const { studentsId, coursesId } = req.body;

    const enrollmentExists = await Enrollment.findOne({
      where: {
        studentsId,
        coursesId,
      },
    });

    if (enrollmentExists) {
      return res.status(400).json({ message: 'Student is already enrolled in this course' });
    }

    const course = await Courses.findByPk(coursesId);

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    if (course.remainingVacancies === 0) {
      return res.status(400).json({ message: 'No remaining vacancy' });
    }

    await Enrollment.create({
      studentsId,
      coursesId,
    });

    course.remainingVacancies--;
    await course.save();

    res.json({ message: 'Enrollment created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

const cancelEnrollment = async (req, res) => {
  try {
    const { enrollmentId } = req.params;

    const enrollment = await Enrollment.findByPk(enrollmentId);

    if (!enrollment) {
      return res.status(404).json({ message: 'Enrollment not found' });
    }

    if (enrollment.cancelationDate) {
      return res.status(400).json({ message: 'Enrollment is already canceled' });
    }

    enrollment.cancelationDate = new Date();
    await enrollment.save();

    res.json({ message: 'Enrollment canceled successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

module.exports = { getEnrollments, addEnrollment, cancelEnrollment };
