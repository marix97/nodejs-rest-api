const User = require('../models/user.model');

// Create and Save a new User
exports.create = async (req, res) => {
    try{
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    await user.save();

    return res.status(201).send({
        message: "User created succesfully"
    })
    }
    catch(err){
        return res.status(500).send({
            message: err.message || "Some error occurred while trying to save to database."
        });
    }
};

// Retrieve and return all user from the database.
exports.findAll = async (req, res) => {
    try{
        const users = await User.find();
        return res.status(200).send(users);
    }
    catch(err){
        return res.status(500).send({
            message: err.message
        })
    }
};

// Find a single user with a userId
exports.findOne = async (req, res) => {
    try{
        const user = await User.findById(req.params.userId);
        if(!user){
            return res.status(404).send({
                message: "No user with such ID in our database"
            })
        }

        return res.status(200).send(user);
    }
    catch(err){
        return res.status(500).send({
            message: err.message
        })
    }
};

// Update a user identified by the userId in the request
exports.update = async (req, res) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.userId, {
            username: req.body.username,
            password: req.body.password
        }, {new: true});

        if(!user){
            return res.status(404).send({
                message: `User with id ${req.params.userId} has not been found in our database.`
            })
        }

        return res.status(200).send(user);
    }
    catch(err){
        return res.status(500).send({
            message: `Error occured while trying to update record with Id ${res.params.userId} in our database.`
        })
    }
};

// Delete a user with the specified userId in the request
exports.delete = async (req, res) => {
    try{
        const user = await User.findByIdAndRemove(req.params.userId);
        if(!user){
            return res.status(404).send({
                message: "No user with such id in our database"
            })
        }

        return res.status(200).send({
            message: `User with ID ${req.params.userId} has been successfully deleted`
        })
    }
    catch(err){
        return res.status(500).send({
            message: `Could not delete record with ID ${res.params.userId}`
        })
    }
};