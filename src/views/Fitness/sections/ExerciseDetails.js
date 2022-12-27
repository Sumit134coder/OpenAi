/* eslint-disable no-unused-vars */
import React from 'react';
import { BiBody } from 'react-icons/bi';

// TODO: CSS needed

function ExerciseDetails({ exercise = {} }) {
  return (
    <div className="flex md:flex-row flex-col justify-center items-center gap-[5rem]">
      {/* ---image--- */}
      <div>
        <img src={exercise?.gifUrl} alt="user" className="md:w-[40rem] rounded" />
      </div>
      <div className="flex flex-col gap-[2rem]">
        <h5 className="text-[2rem] uppercase font-extrabold">{exercise?.name}</h5>
        <p>
          Exercises keep you strong.
          {' '}
          <span>{exercise?.name}</span>
          {' '}
          bup is one
          of the best
          {' '}
          <br />
          {' '}
          exercises to target your
          {' '}
          {exercise.target}
          . It will help you improve your
          {' '}
          <br />
          {' '}
          mood and gain energy.

        </p>
        {/* ---badges---- */}
        <div className="flex flex-row flex-wrap md:flex-col gap-3 uppercase">
          {/* ---body part--- */}
          <div className="flex items-center gap-4">
            {/* ---badge---- */}
            <div className="flex items-center justify-center h-16 w-16 bg-primary-500/70 text-white rounded-full">
              <img src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzY2xlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="equipment" className="h-full w-full rounded-full object-cover" />
            </div>
            <p className="text-sm font-bold">{exercise?.bodyPart}</p>
          </div>
          {/* ---target part--- */}
          <div className="flex items-center gap-4">
            {/* ---badge---- */}
            <div className="flex items-center justify-center h-16 w-16 bg-primary-500/70 text-white rounded-full">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFZu_niS1Yn8kroAIHxNnXSvXusS76d776yw&usqp=CAU" alt="equipment" className="h-full w-full rounded-full object-cover" />
            </div>
            <p className="text-sm font-bold">{exercise?.target}</p>
          </div>
          {/* ---equipment--- */}
          <div className="flex items-center gap-4">
            {/* ---badge---- */}
            <div className="flex items-center justify-center h-16 w-16 bg-primary-500/70 text-white rounded-full">
              <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="equipment" className="h-full w-full rounded-full object-cover" />
            </div>
            <p className="text-sm font-bold">{exercise?.equipment}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExerciseDetails;
