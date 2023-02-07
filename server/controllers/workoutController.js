const Workout = require("../models/Exercise");
const mongoose = require("mongoose");

// get all workouts
const getWorkouts = async (req, res) => {
    const id = req.user.id;
  
    const workouts = await Workout.find({ id }).sort({ createdAt: -1 });
  
    res.status(200).json(workouts);
  };

  // create a new workout
const createWorkout = async (req, res) => {
  const { name, calories, time } = req.body;

  let emptyFields = [];

  if (!name) {
    emptyFields.push("name");
  }
  if (!calories) {
    emptyFields.push("calories");
  }
  if (!time) {
    emptyFields.push("time");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields", emptyFields });
  }
  // add a doc to db
  try {
    const user_id = req.user._id;
    const workout = await Workout.create({ name, calories, time, user_id });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

  // single workout
const getWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};

// delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such workout" });
    }
  
    const workout = await Workout.findOneAndDelete({ _id: id });
  
    if (!workout) {
      return res.status(404).json({ error: "No such workout" });
    }
  
    res.status(200).json(workout);
  };

  module.exports = {
    getWorkouts,
    getWorkout,
    deleteWorkout,
    createWorkout,
  };