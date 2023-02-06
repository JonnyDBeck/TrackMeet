const express = require("express");
const {
  getWorkouts,
  getWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");


const router = express.Router();

// GET all workouts
router.get("/", getWorkouts);

// GET a single workout
router.get("/:id", getWorkout);


// DELETE a workout
router.delete("/:id", deleteWorkout);