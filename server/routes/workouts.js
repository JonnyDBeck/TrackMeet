const express = require("express");
const {
  getWorkouts,
  getWorkout,
  deleteWorkout,
  createWorkout,
} = require("../controllers/workoutController");


const router = express.Router();

// GET all workouts
router.get("/", getWorkouts);

// GET a single workout
router.get("/:id", getWorkout);


// POST a new workout
// router.post("/", createWorkout);

// DELETE a workout
router.delete("/:id", deleteWorkout);

module.exports = router;
