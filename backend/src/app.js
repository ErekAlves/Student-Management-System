const express = require('express');

const studentsRoutes = require('./routers/studentsRoutes');
const coursesRoutes = require('./routers/coursesRoutes');
const enrollmentRoutes = require('./routers/enrollmentRoutes');

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

module.exports = app;
