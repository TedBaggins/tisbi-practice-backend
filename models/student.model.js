module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("student", {
        fio: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        // faculty_id: {
        //     type: Sequelize.INTEGER
        // }
    });

    return Student;
};