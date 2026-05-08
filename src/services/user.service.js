

const CustomError = require("../utils/customError");

const userModel = require("../models/user.model");


async function getAllUsers() {

    const users = await userModel.getAllUsersModel();

    return users;
}

async function createUser(userData) {

    const { name, email } = userData;

    try {

        const user = await userModel.createUserModel(name, email);

        return user;

    } catch (error) {

        // duplicate email error
        if (error.code === "23505") {
            throw new CustomError("Email already exists", 400);
        }

        // other errors
        throw error;
    }
}

module.exports = {
    createUser,
    getAllUsers
};