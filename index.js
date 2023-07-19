require("dotenv").config();
const express = require("express");
const router = require("./routes/routes");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(router);

app.listen(port, () => console.log(`Running on http://localhost:${port}/`));
