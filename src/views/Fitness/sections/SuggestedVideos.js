/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from 'react';

function SuggestedVideos({ targetMuscleExercises, equipmentExercises }) {
  return (
    <div>
      {/* <h5 className="text-lg font-bold">{`Related ${name} videos`}</h5> */}
      {/* ---video container----- */}
      {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {
      exerciseVideos.slice(0, 3).map((item) => (
        <a
          href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          target="_blank"
          rel="noreferrer"
          className="card"
        >
          <img src={item.video.thumbnails[0].url} alt={item.video.title} className="object-cover h-[6rem] w-[7rem]" />
          <div className="text-sm">
            <p>{item.video.title}</p>
            <p>{item.video.channelName}</p>
          </div>
        </a>
      ))
    }
      </div> */}
    </div>
  );
}

export default SuggestedVideos;
