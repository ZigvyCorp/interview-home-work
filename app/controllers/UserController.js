const mongoose = require('mongoose'); // Import Mongoose
const UserModel = require('../models/UserModel'); // Import UserModel

// GET ALL USER
const getAllUser = (request, response) => {
    let {username,limit, password} = request.query;
    const condition = {}
    if(username) {
        condition.username = username
    }
    if(password) {
        condition.username = password
    }

    UserModel.find(condition).limit(limit).exec((error, data) => {
        if (error) {
            return response.status(500).json({
                status: "Internal sever error",
                message: error.message
            })
        } else {
            response.status(200).json({
                status: "Success",
                data: data
            })
        }
    })
};
// CREATE USER
const createUser = (request, response) => {
    let username = request.body.username;
    let password = request.body.password;
    let name = request.body.name;
    let dob = request.body.dob;
    // Validate
    if (!username) {
        return response.status(400).json({
            status: "Bad Request",
            message: "Username is required"
        });
    };
    if (!password) {
        return response.status(400).json({
            status: "Bad Request",
            message: "Password is required"
        });
    };
    if (!name) {
        return response.status(400).json({
            status: "Bad Request",
            message: "Name is required"
        });
    };
    UserModel.create({
        _id: mongoose.Types.ObjectId(),
        username: username,
        password: password,
        name: name,
        dob: dob
    }, (error, data) => {
        if (error) {
            return response.status(500).json({
                status: "Internal sever error",
                message: error.message
            });
        } else {
            return response.status(201).json({
                status: "Created",
                data: data
            });
        };
    });
};
// GET USER BY ID
const getUserById = (request, response) => {
    let userId = request.params.userId; // Tạo User Id
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return response.status(400).json({
            status: "Bad Request",
            message: "User Id is not valid"
        });
    };
    UserModel.findById(userId, (error, data) => {
        if (error) {
            return response.status(500).json({
                status: "Internal Sever error",
                message: error.message
            });
        } else {
            if (data) {
                return response.status(200).json({
                    status: "Success",
                    data: data
                })
            } else {
                return response.status(404).json({
                    status: "Not Found"
                });
            };
        };
    });
};


// UPDATE USER BY ID
const updateUser = (request, response) => {
    let username = request.body.username;
    let password = request.body.password;
    let name = request.body.name;
    let dob = request.body.dob;
    let userId = request.params.userId; // Tạo user Id
    // Validate User Id
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return response.status(400).json({
            status: "Bad Request",
            message: "User Id is not valid"
        });
    };
    UserModel.findByIdAndUpdate(userId, {
        username: username,
        password: password,
        name: name,
        dob: dob
    }, (error, data) => {
        if (error) {
            return response.status(500).json({
                status: "Internal Sever Error",
                message: error.message
            });
        } else {
            if (data) {
                return response.status(200).json({
                    status: "Success",
                    data: data
                });
            } else {
                return response.status(404).json({
                    status: "Not Found"
                });
            };
        };
    });
};
// DELETE USER BY ID
const deleteUser = (request, response) => {
    let userId = request.params.userId; // Tạo User Id
    // Validate Id
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return response.status(400).json({
            status: "Bad Request",
            message: "User Id is not valid "
        });
    };
    UserModel.findByIdAndDelete(userId, (error) => {
        if (error) {
            return response.status(500).json({
                status: "Internal Sever Error",
                message: error.message
            });
        } else {
            return response.status(204).json()
        };
    });
};
module.exports = {
    getAllUser,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
   
}