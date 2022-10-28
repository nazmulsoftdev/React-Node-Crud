const mongoose = require("mongoose");
require("dotenv").config();
// connect with mongodb databases

const ConnectDB = () => {
    const URL = process.env.MONGODB_URL;
    mongoose
        .connect(URL)
        .then((response) => console.log("Mongodb connected"))
        .catch((err) => console.log("Mongodb Crushed"));
};

module.exports = ConnectDB;