import React from 'react'
import { VideoType } from '../utils/tsTypes';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }: {exerciseVideos: VideoType[], name: string}) => {
  
  return (
    <div className='mt-5 lg:mt-[200px] p-5 font-sans'>
      <h1 className='mb-8 text-4xl font-semibold'>
        Watch <span className='text-font-accent-light-color capitalize'>{name}</span> exercise videos
      </h1>
      {exerciseVideos.length === 0 ?
      
      <Loader /> 
      
      :
      
      <div className="flex justify-start flex-wrap items-center flex-col lg:flex-row gap-0 lg:gap-[10px]">
        {exerciseVideos?.slice(0, 6).map((item: VideoType, index: number) =>(
          <a 
            key={index}
            className='exercise-video'
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <div>
              <h2 className='text-xl font-semibold text-ellipsis line-clamp-2'>
                {item.video.title}
              </h2>
              <h3>
                {item.video.channelName}
              </h3>
            </div>
          </a>
        ))}
      </div>
      }
      
    </div>
  )
}

export default ExerciseVideos