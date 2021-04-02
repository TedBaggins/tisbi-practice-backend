const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    define: {
        timestamps: false
    },
    operatorsAliases: false,
  
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.faculties = require("./faculty.model.js")(sequelize, Sequelize);
db.students = require("./student.model.js")(sequelize, Sequelize);

//db.faculties.hasMany(db.students, {as: "students"});
db.students.belongsTo(db.faculties, {
    foreignKey: "faculty_id",
    as: "faculty",
});

module.exports = db;