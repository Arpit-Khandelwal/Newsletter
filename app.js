const express = require("express");
const app = express();
exports.app = app;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
    console.log(req.body); // Logging the request body
    if (req.body.username === "arpit.khandelwal2019@vitstudent.ac.in") {
        res.send("<h1>Successfully signed up</h1>"); // Sending the request body as the response
    }
    else {
        res.sendFile(__dirname + "/fail.html");
    }
});

app.listen(3000, () => {
    console.log("Running on port 3000");
});
