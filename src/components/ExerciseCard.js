/* eslint-disable no-unused-vars */
import React from 'react';

function ExerciseCard({ exercise = {} }) {
  return (
    <div className="card rounded-lg p-4" key={exercise.id}>
      <img src={exercise.gifUrl} alt="gif" />
      <div className="flex flex-col gap-3">
        <h5 className="uppercase font-bold">{exercise.name}</h5>
        {/* ---targets */}
        <div className="flex items-center gap-3 uppercase">
          <span className="btn btn-primary text-xs rounded-full p-2 px-3">{exercise.bodyPart}</span>
          <span className="btn btn-primary text-xs rounded-full p-2 px-3">{exercise.target}</span>
        </div>

        {/* --equipment-- */}
        <div>
          <span className="uppercase border-2 text-xs rounded-full p-2 px-3">{exercise.equipment}</span>
        </div>
      </div>
    </div>
  );
}

export default ExerciseCard;
