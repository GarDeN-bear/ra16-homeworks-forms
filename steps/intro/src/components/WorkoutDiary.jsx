import React, { useState } from "react";
import WorkoutInputs from "./WorkoutInputs.jsx";
import WorkoutsTable from "./WorkoutsTable.jsx";

const WorkoutDiary = () => {
  const [workouts, setWorkouts] = useState([]);
  const [editedWorkout, setEditedWorkout] = useState({});

  const addWorkout = (workout, isEdited) => {
    if (!workout.date || !workout.distance) {
      return;
    }
    let workoutsCopy = workouts;
    if (isEdited) {
      const index = workouts.findIndex((w) => w.date === editedWorkout.date);
      workoutsCopy[index].date = workout.date;
      workoutsCopy[index].distance = workout.distance;
    } else {
      const index = workouts.findIndex((w) => w.date === workout.date);
      if (index >= 0) {
        workoutsCopy[index].distance += workout.distance;
      } else {
        workoutsCopy.push(workout);
      }
    }

    workoutsCopy.sort((a, b) => new Date(a.date) - new Date(b.date));
    setWorkouts([...workoutsCopy]);
  };

  const removeWorkout = (workout) => {
    const filteredWorkouts = workouts.filter((el) => el != workout);
    setWorkouts([...filteredWorkouts]);
  };

  const editWorkout = (workout) => {
    setEditedWorkout(workout);
  };

  return (
    <div className="workouts-content">
      <WorkoutInputs onAddWorkout={addWorkout} editedWorkout={editedWorkout} />
      <WorkoutsTable
        workouts={workouts}
        removeWorkout={removeWorkout}
        editWorkout={editWorkout}
      />
    </div>
  );
};

export default WorkoutDiary;
