const express = require("express")
const app = express();
const db = require("../models");

app.post("/api/workouts", ({ body }, res) => {
    db.create(body)
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  // add exercises to recent workout plan




  // add new exercises to new workout plan



  // View the combined weight of multiple exercises from the past seven workouts on the `stats` page.




  // View the total duration of each workout from the past seven workouts on the `stats` page.


module.exports = app