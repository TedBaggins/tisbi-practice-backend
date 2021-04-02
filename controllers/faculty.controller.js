const db = require("../models");
const Faculty = db.faculties;
const Op = db.Sequelize.Op;

// get all faculties
exports.findAll = (req, res) => {
    Faculty.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}

// get faculty by id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Faculty.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}

// create and save new faculty
exports.create = (req, res) => {
    const { name, year } = req.body;
    if (!name) {
        res.status(400).send({
            message: "Name can not be empty"
        });
        return;
    }
    const faculty = {
        name: name,
        year: year
    }
    Faculty.create(faculty)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

// update faculty by id
exports.update = (req, res) => {
    const id = req.params.id;
    Faculty.update(req.body, {
        where: {id: id}
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "Faculty was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Faculty with id=${id}. Maybe Faculty was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Faculty with id=" + id
        });
    });
};

// remove faculty by id
exports.delete = (req, res) => {
    const id = req.params.id;

    Faculty.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Faculty was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Faculty with id=${id}. Maybe Faculty was not found!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Faculty with id=" + id
        });
    });
};