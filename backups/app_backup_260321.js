// получаем модули
const express = require("express");
const bodyParser = require("body-parser");
const http = require('http');

// создаем приложение
const app = express();
const port = 3000;
app.use(bodyParser.json());
// начинаем прослушивание подключений на 3000 порту
app.listen(port, () => {
    console.log(`Server is running.`);
});

// подключение к бд
const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "tisbipractice",
    password: "postgres",
    port: 5432
});

//-------------------------------------------------------------------------------------

app.get("/", function(req, res) {
    res.end("Server is working");
});

// get all faculties
app.get("/api/faculties", async (req, res) => {
    let facultiesPromise = new Promise((resolve, reject) => {
        pool.query(
            `SELECT id, name, year FROM Faculties`,
            [],
            (error, results) => {
                if (error) {
                    console.log(error);
                }
                if (results.rows.length !== 0) {
                    resolve(results.rows);
                } else {
                    resolve(null);
                }
            }
        );
    });
    let faculties = await facultiesPromise;
    if (faculties) {
        res.status(200).json(faculties);
        return;
    } else {
        res.status(500).end();
        return;
    }
});

// get faculty by id
app.get("/api/faculties/:id", async (req, res) => {
});

// add new faculty
app.post("/api/faculties", async (req, res) => {
});

// update faculty by id
app.put("/api/faculties/:id", async (req, res) => {
});

// remove faculty by id
app.delete("/api/faculties/:id", async (req, res) => {
});

// get all students
app.get("/api/students", async (req, res) => {
});

// get student by id
app.get("/api/students/:id", async (req, res) => {
});

// add new student
app.post("/api/students", async (req, res) => {
});

// update student by id
app.put("/api/students/:id", async (req, res) => {
});

// remove student by id
app.delete("/api/students/:id", async (req, res) => {
});





