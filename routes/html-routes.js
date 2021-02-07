const express = require("express")
const path = require("path")
const app = express()


// *** HTML routes *** //

// gets index.html
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})


// gets exercise.html
app.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
})


// gets stats.html
app.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
})

module.exports = app