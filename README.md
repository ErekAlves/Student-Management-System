# Student-Management-System
Project created to implement a Student Management System for my graduate program on full stack development.

# API Usage Instructions

This guide provides step-by-step instructions on how to use the API.

## Prerequisites

Before using the API, make sure to follow these steps:

1. Create a file named `.env` based on the `.envexample` file.
2. Install the project dependencies in the backend folder.

## Application Routes

The following routes are available in the application:

**Note: Make sure to use the correct port (e.g., 3333).**

### Students

- POST: http://localhost:3333/students
  - Registers a student in the Students table in the database.
  - Model for request:
    ```json
    {
      "username": "unique_username",
      "name": "name",
      "email": "email@gmail.com",
      "password": "password",
      "age": 20,
      "phoneNumber": "5555555"
    }
    ```

- GET: http://localhost:3333/students
  - Lists students from the Students table in the database.

### Courses

- POST: http://localhost:3333/courses
  - Registers a course in the Courses table in the database.
  - Model for request:
    ```json
    {
      "description": "English Course",
      "date": "10/04/2023",
      "maxParticipants": 15,
      "remainingVacancies": 15
    }
    ```

**Note: The following routes require user authentication.**

To obtain the authentication token, follow these steps:

1. Send a POST request to http://localhost:3333/login with the following body:
   ```json
   {
     "username": "unique_username",
     "password": "12345"
   }
   ```
2. The response will contain a token that is required for accessing the subsequent routes.

### Authenticated Routes

Make sure to select the "Bearer Token" option in Postman or Insomnia and paste the token generated from the previous "POST LOGIN" route.

- GET: http://localhost:3333/courses
  - Displays the courses from the Courses table in the database.
  - Note: Token is required.

- POST: http://localhost:3333/enrollment
  - Enrolls a student in a desired course.
  - Note: Token is required.
  - Send the student ID and course ID in the request body:
    ```json
    {
      "studentsId": "1",
      "coursesId": "1"
    }
    ```

- GET: http://localhost:3333/enrollment
  - Displays the enrolled courses.
  - Note: Token is required.

- PUT: http://localhost:3333/enrollment/id
  - Cancels an enrollment.
  - Note: Token is required.

Remember to replace `/id` in the route with the actual enrollment ID you want to cancel.