import React, { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [time, setTime] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }
    const workout = { title, calories, time };

    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}
        `,
      },
    });
    // const response = await fetch("/api/workouts");

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      // setEmptyFields([]);
      setError(null);
      setTitle("");
      setCalories("");
      setTime("");
      dispatch({ type: "CREATE_WORKOUT", payload: json });
      setEmptyFields([]);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>

      <label>Exercise</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes("title") ? "error" : ""}
      />

      <label>Calories:</label>
      <input
        type="number"
        onChange={(e) => setCalories(e.target.value)}
        value={calories}
        className={emptyFields.includes("calories") ? "error" : ""}
      />

      <label>Duration:</label>
      <input
        type="number"
        onChange={(e) => setTime(e.target.value)}
        value={time}
        className={emptyFields.includes("time") ? "error" : ""}
      />

      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default WorkoutForm;
