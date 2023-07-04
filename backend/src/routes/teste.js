const express = require('express');

const

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

outer.get('/', coursesController.getAllCourses);

module.exports = app;
