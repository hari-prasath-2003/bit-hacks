const router = require('express').Router();

const authCheck = (req, res, next) => {
    if (!req.user) {
        res.redirect('/auth/google');
    } else {
        next();
    }
};

router.get('/', authCheck, (req, res) => {
    if (req.user.role === "student") {

        res.render("student/index", { user: req.user.username, userProfile: req.user.profile, mentor: req.user.mentor })
    } else {
        res.render("faculty/leave-approval", { user: req.user.username, userProfile: req.user.profile })
    }
});
router.get('/leave', authCheck, (req, res) => {
    if (req.user.role === "student") {

        res.render("student/leaveapply", { user: req.user.username, userProfile: req.user.profile })
    } else {
        res.render("faculty/leave-approval", { user: req.user.username, userProfile: req.user.profile })
    }
});
router.get('/leave/summary', authCheck, (req, res) => {
    if (!(req.user.role === "student")) {
        console.log("ho");
        res.render("faculty/leave-summary", { user: req.user.username, userProfile: req.user.profile })
    }

});


module.exports = router;
