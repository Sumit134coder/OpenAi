import React from 'react';
import { AiFillDownCircle } from 'react-icons/ai';

function Landing() {
  return (
    <div className="flex items-center flex-col md:flex-row flex-col-reverse justify-between">
      {/* ---text--- */}
      <div>
        {/* ---2xl text--- */}
        <h1 className="text-[5rem] font-extrabold text-center md:text-left">We Gym , We Conqure</h1>
        <p className="text-[2rem] font-bold text-center md:text-left">The only gym companion for champions</p>
        <div className="flex items-center justify-center md:justify-start gap-3 font-bold my-3">
          <p>Explore</p>
          <p className="text-lg"><AiFillDownCircle /></p>
        </div>
      </div>
      {/* ---picture--- */}
      <div>
        <img
          src="https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="hero"
          className="rounded-full h-[20rem] w-[20rem] md:h-[40rem] md:w-[40rem] object-cover"
        />
      </div>
    </div>
  );
}

export default Landing;
