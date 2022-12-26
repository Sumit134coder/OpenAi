/* eslint-disable no-unused-vars */
import React from 'react';

function SimilarVideos({ exerciseVideos = [], name = '' }) {
  return (
    <div>
      <h5 className="text-lg font-bold my-4">{`Related ${name} videos`}</h5>
      {/* ---video container----- */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {
        exerciseVideos.slice(0, 3).map((item) => (
          <a
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            className="card"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} className="object-cover h-auto w-full" />
            <div className="text-sm flex flex-col gap-2 p-2">
              <p className="font-bold">{item.video.title}</p>
              <p className="text-primary-400 text xs">{item.video.channelName}</p>
            </div>
          </a>
        ))
      }
      </div>
    </div>
  );
}

export default SimilarVideos;
