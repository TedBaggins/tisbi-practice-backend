// получаем модули
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// создаем приложение
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync();

require("./routes/faculty.routes")(app);
require("./routes/student.routes")(app);

// начинаем прослушивание подключений на 3000 порту
app.listen(port, () => {
    console.log(`Server is running.`);
});

app.get("/", function(req, res) {
    res.status(200).end("Server is working");
});






