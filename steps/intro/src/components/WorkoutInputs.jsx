import React, { useState, useEffect } from "react";

const WorkoutInputs = ({ onAddWorkout, editedWorkout = {} }) => {
  const [date, setDate] = useState("");
  const [distance, setDistance] = useState(0);
  const [isEdited, setIsEdited] = useState(false);

  useEffect(() => {
    if (editedWorkout.date && editedWorkout.distance !== undefined) {
      setDate(editedWorkout.date);
      setDistance(editedWorkout.distance);
      setIsEdited(true);
    }
  }, [editedWorkout]);

  const handleOnSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleOnClickButton = (ev) => {
    ev.preventDefault();
    onAddWorkout(
      {
        date: date,
        distance: parseFloat(distance),
      },
      isEdited
    );
    setIsEdited(false);
  };

  return (
    <form className="workout-form" onSubmit={handleOnSubmit}>
      <div className="workout-form-container">
        <p>Дата (ДД.ММ.ГГ)</p>
        <input
          className="date-input workout-input"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required="required"
          min="1900-01-01"
          max="3000-01-01"
        ></input>
      </div>
      <div className="workout-form-container">
        <p>Пройдено км</p>
        <input
          className="distance-input workout-input"
          type="number"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          required="required"
          min={0}
          max={1000}
        ></input>
      </div>
      <div className="workout-form-container">
        <button className="btn btn-ok" onClick={handleOnClickButton}>
          Ok
        </button>
      </div>
    </form>
  );
};

export default WorkoutInputs;
