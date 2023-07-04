const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');
const enrollmentController = require('../controllers/enrollmentController');

router.use(authMiddleware.getProfile);

router.get('/', enrollmentController.getEnrollments);
router.post('/', enrollmentController.addEnrollment);
router.put('/enrollment/:id', enrollmentController.cancelEnrollment);

module.exports = router;
