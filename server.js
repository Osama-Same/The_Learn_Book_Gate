const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./connection/mongodb");
const router = require("./router/router");
require("dotenv").config();


app.use(cors(corsOptions));
app.use(express.json());
app.use(router);





const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});