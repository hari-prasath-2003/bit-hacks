const router = require('express').Router();
const { applyLeave, getAllRecords, approveLeave, rejectLeave } = require("../controller/leave")
const authCheck = (req, res, next) => {
    if (!req.user) {
        res.status(401).send()

    } else {
        next();
    }
};

router.post("/apply", authCheck, (req, res) => {
    console.log(req.body);
    applyLeave(req.body, req.user._id)
    res.send()
})
router.get("/faculty/all", authCheck, async (req, res) => {
    console.log();
    try {

        const records = await getAllRecords(req.user.email, "", "")
        res.send(records)
    } catch (error) {
        res.send()

    }
})
router.get("/faculty/:id", authCheck, async (req, res) => {
    try {

        const records = await getAllRecords("", "", req.params.id)
        res.send(records)
    } catch (error) {
        res.send()

    }
})
router.get("/student/all", authCheck, async (req, res) => {
    try {

        const records = await getAllRecords("", req.user.id, "")
        res.send(records)
    } catch (error) {
        res.send()
    }
})
router.get("/faculty/aprove/:id", authCheck, async (req, res) => {
    console.log(req.user);
    const records = await approveLeave(req.params.id)
    res.send(records)
})
router.get("/faculty/reject/:id", authCheck, async (req, res) => {
    console.log(req.user);
    const records = await rejectLeave(req.params.id)
    res.send(records)
})


module.exports = router;
