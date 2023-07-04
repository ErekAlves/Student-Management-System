const express = require('express');

const studentsRoutes = require('./routes/studentsRoutes');
const coursesRoutes = require('./routes/coursesRoutes');
const enrollmentRoutes = require('./routes/enrollmentRoutes');
const authenticationController = require('./routes/authenticationRoutes');
// const authMiddleware = require('./middleware/authMiddleware')


const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use('/students', studentsRoutes);
app.use('/courses', coursesRoutes);
app.use('/enrollment', enrollmentRoutes);
app.use('/login', authenticationController);
app.use('/logout', authenticationController);


module.exports = app;
