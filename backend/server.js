const express = require("express");
const cors = require("cors");
const router = require("./routes/UserRoute.js");
const ConnectDB = require("./config/db");
require("dotenv").config();

const app = express();

// Connect with database

ConnectDB();

// express middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// use cors for connect with frontend
app.use(cors({ origin: "*" }));

app.use("/api/user", router);

app.get("/", (req, res) => {
    res.send("Express Server...");
});

app.listen(process.env.PORT_NUMBER, () => console.log("Server is Active..!"));