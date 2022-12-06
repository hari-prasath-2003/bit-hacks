const Leave = require("../models/leave")
const User = require("../models/user-model")

async function applyLeave(detail, user) {
    console.log("detail", detail);
    const temprec = await User.findById(user, "mentor username stdid")
    console.log(temprec);

    new Leave({
        fromDate: detail.fromdate,
        fromTime: detail.fromtime,
        toDate: detail.todate,
        toTime: detail.totime,
        reason: detail.reason,
        stdid: temprec.stdid,
        mentor: temprec.mentor,
        name: temprec.username,
        id: user
    }).save()
}
async function getAllRecords(mail, id, rollno) {
    try {
        const records = await Leave.find({ $or: [{ $and: [{ mentor: mail }, { status: "pending" }] }, { id: id }, { stdid: rollno }] })
        console.log(records);
        return records
    } catch (error) {

    }

}
async function approveLeave(id) {
    const leave = await Leave.findById(id)
    leave.status = "approved"
    return await leave.save()

}
async function rejectLeave(id) {
    const leave = await Leave.findById(id)
    leave.status = "rejected"
    return await leave.save()

}
module.exports = { applyLeave: applyLeave, getAllRecords: getAllRecords, approveLeave: approveLeave, rejectLeave: rejectLeave }