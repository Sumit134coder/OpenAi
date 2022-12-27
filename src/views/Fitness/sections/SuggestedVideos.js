/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from 'react';
import { ExerciseCard } from '../../../components';

function SuggestedVideos({ targetMuscleExercises, equipmentExercises }) {
  return (
    <div className="my-4">
      <h5 className="text-lg font-bold">Related Target Muscle Exercises</h5>
      {/* ---video container----- */}
      <div className="flex gap-4 overflow-x-scroll no-bar snap-x">
        {
          targetMuscleExercises && targetMuscleExercises.slice(0, 3).map((item) => (
            <ExerciseCard exercise={item} className="snap-start h-auto" />
          ))
    }
      </div>

      <h5 className="text-lg font-bold mt-4">Related Equipment Exercises</h5>
      {/* ---video container----- */}
      <div className="flex gap-4 overflow-x-scroll no-bar snap-x">
        {
          equipmentExercises && equipmentExercises.slice(0, 4).map((item) => (
            <ExerciseCard exercise={item} className="snap-start" />
          ))
    }
      </div>
    </div>
  );
}

export default SuggestedVideos;
