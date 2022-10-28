const express = require("express");
const UserModel = require("../model/UserModel.js");

// make a route for routing request
const router = express.Router();

// get All usser

const getUser = async(req, res) => {
    try {
        const result = await UserModel.find().select({
            UserName: 1,
            UserAge: 1,
            UserGender: 1,
            UserProfession: 1,
        });
        res.send(result);
    } catch (err) {
        console.log(err);
    }
};

// add new user

const addUser = async(req, res) => {
    const result = new UserModel(req.body);
    try {
        const data = await result.save();
        res.send(data);
    } catch (err) {
        console.log(err);
    }
};

// delete user

const deleteUser = async(req, res) => {
    const id = req.params.id;

    try {
        const result = await UserModel.findByIdAndDelete(id);
        res.send(result);
    } catch (err) {
        console.log(err);
    }
};

// update user

const updateUser = async(req, res) => {
    try {
        const updateData = await UserModel.findByIdAndUpdate(
            req.params.id, { $set: req.body }, { new: true }
        ).exec();

        res.send(updateData);
    } catch (err) {
        console.log(err);
    }
};

router.route("/").get(getUser).post(addUser);

router.route("/:id").delete(deleteUser).put(updateUser);

module.exports = router;