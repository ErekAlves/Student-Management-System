const express = require('express')
const router = express.Router()

// const authMiddleware = require('../middleware/authMiddleware')
const studentsController = require('../controllers/studentsController')

router.get('/', studentsController.getAllStudents)
router.post('/', studentsController.addStudents)

module.exports= router