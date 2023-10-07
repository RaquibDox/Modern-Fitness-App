import { VideoType } from "../../utils/tsTypes";
import Loader from "../Loader";
import ReactPlayer from "react-player/youtube";

const ExerciseVideos = ({
  exerciseVideos,
  name,
}: {
  exerciseVideos: VideoType[];
  name: string;
}) => {
  return (
    <div className="mt-5 lg:mt-[200px] p-5 font-sans">
      <h1 className="mb-10 text-4xl font-semibold text-center">
        Watch{" "}
        <span className="capitalize text-font-accent-light-color">{name}</span>{" "}
        exercise videos
      </h1>
      {exerciseVideos.length === 0 ? (
        <Loader />
      ) : (
        <div className="flex justify-center flex-wrap items-center flex-col lg:flex-row gap-2 lg:gap-[20px]">
          {exerciseVideos?.slice(0, 8).map((item: VideoType, index: number) => (
            <div
              key={index}
              className="exercise-video video-thumbnail-w h-[340px] flex flex-col gap-4 no-underline"
            >
              <ReactPlayer
                light={
                  <img
                    src={item.video.thumbnails[0].url}
                    alt={item.video.title}
                    className="bg-cover w-auto h-[100%]"
                  />
                }
                playing={true}
                url={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                style={{ background: "#000" }}
                width="100%"
                height="100%"
                controls={true}
              />
              <div>
                <h2 className="text-xl font-semibold text-ellipsis line-clamp-2 h-[60px]">
                  {item.video.title}
                </h2>
                <h3>{item.video.channelName}</h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExerciseVideos;
