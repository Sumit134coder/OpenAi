/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { exerciseOptions, fetchData } from '../services';

function BodyParts({ bodyParts = [], setExercises }) {
  const [selectedPart, setSelectedPart] = useState(null);

  const handleSearchbyPart = async (str = '') => {
    if (str === 'all') {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      setExercises(exercisesData);
    } else {
      const exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${str}`, exerciseOptions);

      setExercises(exercisesData);
    }
  };

  return (
    <div className="overflow-x-scroll scroll-snap flex gap-3 items-center justify-center no-bar">
      {
      bodyParts && bodyParts.map((bodyPart) => (
        <button
          className={`snap-start min-w-[7rem] text-center shadow p-3 rounded-lg font-bold bg-white hover:bg-primary-500 hover:text-white transition ease-in-out ${bodyPart === selectedPart && 'bg-primary-500 text-white'}`}
          onClick={() => {
            setSelectedPart(bodyPart);
            handleSearchbyPart(bodyPart);
          }}
        >
          {bodyPart.toUpperCase()}
        </button>
      ))
    }

    </div>
  );
}

export default BodyParts;
