module.exports = app => {
    const faculties = require("../controllers/faculty.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all faculties
    router.get("/", faculties.findAll);

    // Retrieve a single faculty with id
    router.get("/:id", faculties.findOne);

    // Create a new faculty
    router.post("/", faculties.create);
  
    // Update a faculty with id
    router.put("/:id", faculties.update);
  
    // Delete a faculty with id
    router.delete("/:id", faculties.delete);
  
    app.use('/api/faculties', router);
};