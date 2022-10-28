const { Schema, model } = require("mongoose");

// create a Schema for user

const Schemadev = new Schema({
    UserName: {
        type: String,
        required: true,
    },
    UserAge: {
        type: Number,
        require: true,
    },
    UserGender: {
        type: String,
        required: true,
    },
    UserProfession: {
        type: String,
        require: true,
    },
});

//  create model

const UserModel = model("userdevs", Schemadev);

module.exports = UserModel;