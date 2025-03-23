const express = require("express");
const router = express.Router();

router.post("/create", (req, res) => {
    res.send("Create New Log");
});

router.get("/get", (req, res) => {
    res.send("Get All Logs");
});

router.get("/get/id/:id", (req, res) => {
    res.send(`Get Log with ID ${req.params.id}`);
});

router.get("/get/user/:username", (req, res) => {
    res.send(`Get All Logs from ${req.params.username}`);
});

router.put("/update", (req, res) => {
    res.send("Update Log");
});

router.delete("/delete", (req, res) => {
    res.send("Delete Log");
});

module.exports = router;