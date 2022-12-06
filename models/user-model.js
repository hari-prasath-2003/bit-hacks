const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    email: String,
    regno: String,
    googleId: String,
    role: String,
    stdid: String,
    mentor: String,
    profile: String
});

const User = mongoose.model('user', userSchema);

module.exports = User;
