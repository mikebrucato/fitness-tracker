const extress = require("express")
const path = require("path")
const app = require("express")


// *** HTML routes *** //

// gets index.html
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"))
})


// gets exercise.html
app.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "public/exercise.html"))
})


// gets stats.html
app.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "public/stats.html"))
})