module.exports = app => {
    const students = require("../controllers/student.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all students
    router.get("/", students.findAll);

    // Retrieve a single student with id
    router.get("/:id", students.findOne);

    // Create a new student
    router.post("/", students.create);
  
    // Update a student with id
    router.put("/:id", students.update);
  
    // Delete a student with id
    router.delete("/:id", students.delete);
  
    app.use('/api/students', router);
};