const mongoose = require('mongoose');
const {isEmail} = require('validator');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Can't be Blank"]
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: [true, "Can't be Blank"],
        index: true,
        validate: [isEmail, "invalid email"]
    },
    password: {
        type: String,
        required: [true, "Can't be blank"]
    },
    picture: {
        type: String,
    },
    newMessage: {
        type: Object,
        default: {}
    },
    status: {
        type: String,
        default: 'Online'
    }
}, {minimize: false});

const User = mongoose.model('User', UserSchema);

module.exports = User