/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { ExerciseDetails, SuggestedVideos, SimilarVideos } from './sections';
import { exerciseOptions, fetchData, youtubeOptions } from '../../services';

function Details() {
  const [queryParams] = useSearchParams();

  const id = queryParams.get('id');

  const [exercise, setExercise] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  console.log(id);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, exerciseOptions);

      setExercise(exerciseData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseData.name} exercise`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseData.equipment}`, exerciseOptions);
      setEquipmentExercises(equimentExercisesData);
    };

    fetchExercisesData();
  }, [id]);

  return (
    <div className="flex flex-col gap-3">
      {/* ---Details--- */}
      <ExerciseDetails exercise={exercise} />
      {/* ----excerise Videos----- */}
      <SimilarVideos exerciseVideos={exerciseVideos} name={exercise.name} />
      {/* suggested */}
      {/* <SuggestedVideos
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      /> */}
    </div>
  );
}

export default Details;
