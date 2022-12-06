const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leaveSchema = new Schema({
    id: String,
    fromDate: String,
    toDate: String,
    fromTime: String,
    toTime: String,
    reason: String,
    stdid: String,
    mentor: String,
    name: String,
    status: {
        type: String,
        default: "pending"
    }
});

const User = mongoose.model('Leave', leaveSchema);

module.exports = User;
