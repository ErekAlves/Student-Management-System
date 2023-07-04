const express = require('express')
const router = express.Router()

const authMiddleware = require('../middleware/authMiddleware')
const coursesController = require('../controllers/coursesController')

router.get('/', authMiddleware.getProfile ,coursesController.getAllCourses)
router.post('/',coursesController.addCourse)


module.exports= router