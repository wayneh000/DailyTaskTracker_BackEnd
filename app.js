require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;

const auth = require("./routes/auth");
const logs = require("./routes/logs");

app.get("/", (req, res) => {
    res.send("Hello, world!");
});

app.use("/auth", auth);
app.use("/logs", logs);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});