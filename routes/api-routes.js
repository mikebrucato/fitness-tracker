const express = require("express")
const app = express();
const Workout = require("../models/Workout");


// gets all workouts
app.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
      console.log("you've created a new workout!")
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// creates new workout
app.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout)
    }).catch(err => {
      res.statusCode(400).json(err)
    })
})

// View the combined weight of multiple exercises from the past seven workouts on the `stats` page.




// View the total duration of each workout from the past seven workouts on the `stats` page.


module.exports = app