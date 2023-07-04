const express = require('express')
const router = express.Router()

const authenticationController = require('../controllers/authenticationController')

router.post('/',authenticationController.studentLogin)
router.get('/',authenticationController.logout)

module.exports= router