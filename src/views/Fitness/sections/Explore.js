/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { BodyParts, ExerciseCard } from '../../../components';
import { exerciseOptions, fetchData } from '../../../services';

function Explore() {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);
  const [exercises, setExercises] = useState([]);

  const handleSearch = async () => {
    if (search) {
      console.log('Search');
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  return (
    <div className="my-8 flex flex-col gap-4">
      {/* --heaing-- */}
      <div className="text-center text-[3rem] font-bold">Explore workout exercises</div>

      {/* ---search options---- */}
      <div className="flex items-center md:px-[3rem] px-4 gap-4">
        <input type="search" placeholder="Search..." className="flex-1 form-input" onChange={(e) => setSearch(e.target.value)} />
        <button type="submit" className="btn btn-primary font-bold px-4" onClick={() => handleSearch()}>Search</button>
      </div>

      {/* ---parts--- */}
      <BodyParts bodyParts={bodyParts} setExercises={setExercises} />

      {/* --result container--- */}
      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {
          exercises.map((exercise) => <ExerciseCard exercise={exercise} />)
        }
        </div>
      </div>
    </div>
  );
}

export default Explore;
