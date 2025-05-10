import React from "react";
import WorkoutsTableRow from "./WorkoutsTableRow.jsx";

const WorkoutsTable = ({ workouts = [], removeWorkout, editWorkout }) => {
  return (
    <div className="workouts-table">
      <div className="workouts-table-row">
        <p>Дата (ДД.ММ.ГГ)</p>
        <p>Пройдено км</p>
        <p>Действия</p>
      </div>
      <div className="workouts-table-body">
        {workouts.map((workout, index) => (
          <WorkoutsTableRow
            key={index}
            workout={workout}
            removeWorkout={removeWorkout}
            editWorkout={editWorkout}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkoutsTable;
