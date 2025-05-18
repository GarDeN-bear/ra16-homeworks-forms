import React from "react";

const WorkoutsTableRow = ({ workout, removeWorkout, editWorkout }) => {
  const handleOnDeleteClick = (ev) => {
    ev.preventDefault();
    removeWorkout(workout);
  };

  const handleOnEditClick = (ev) => {
    ev.preventDefault();
    editWorkout({ date: workout.date, distance: workout.distance });
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split("-");
    return `${day}.${month}.${year}`;
  };

  return (
    <div className="workouts-table-row">
      <p>{formatDate(workout.date)}</p>
      <p>{workout.distance.toFixed(1)}</p>
      <div className="row-events">
        <button
          className="btn btn-row-events btn-edit"
          onClick={handleOnEditClick}
        >
          ✎
        </button>
        <button
          className="btn btn-row-events btn-delete"
          onClick={handleOnDeleteClick}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default WorkoutsTableRow;
