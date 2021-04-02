module.exports = (sequelize, Sequelize) => {
    const Faculty = sequelize.define("faculty", {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        year: {
            type: Sequelize.INTEGER
        }
    });

    return Faculty;
};