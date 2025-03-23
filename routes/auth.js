const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
    res.send("Login");
});

router.post("/signup", (req, res) => {
    res.send("Signup");
});

router.put("/change-password", (req, res) => {
    res.send("Change Password");
});

router.put("/update-default-tasks", (req, res) => {
    res.send("Update Default Tasks")
});

module.exports = router;