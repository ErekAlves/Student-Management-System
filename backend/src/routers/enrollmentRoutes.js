const express = require('express')
const router = express.Router()

const enrollmentController = require('../controllers/enrollmentController')

router.get('/', enrollmentController.getEnrollments)
router.post('/',enrollmentController.addEnrollment)
router.put('/enrollments/:enrollmentId',enrollmentController.cancelEnrollment)

module.exports= router