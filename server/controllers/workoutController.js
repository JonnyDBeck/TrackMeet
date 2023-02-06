const Workout = require("../models/Exercise");
const mongoose = require("mongoose");

// get all workouts
const getWorkouts = async (req, res) => {
    const id = req.user.id;
  
    const workouts = await Workout.find({ id }).sort({ createdAt: -1 });
  
    res.status(200).json(workouts);
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
  };