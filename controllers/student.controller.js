const db = require("../models");
const Student = db.students;
const Op = db.Sequelize.Op;

// get all students
exports.findAll = (req, res) => {
    Student.findAll({
            include: [
                { model: db.faculties, as: 'faculty' }
            ]
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}

// get student by id
exports.findOne = (req, res) => {

}

// create and save new student
exports.create = (req, res) => {
    const { fio, faculty_id } = req.body;
    if (!fio) {
        res.status(400).send({
            message: "Name can not be empty"
        });
        return;
    }
    if (!faculty_id) {
        res.status(400).send({
            message: "Faculty id can not be empty"
        });
        return;
    }
    const student = {
        fio: fio,
        faculty_id: faculty_id
    }
    Student.create(student)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

// update student by id
exports.update = (req, res) => {
  
};

// remove student by id
exports.delete = (req, res) => {
    const id = req.params.id;

    Student.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Student was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Student with id=${id}. Maybe Student was not found!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Student with id=" + id
        });
    });
};