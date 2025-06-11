import { Link, useNavigate, useParams } from "react-router";
import { videos } from "../video/video";
import ReactPlayer from "react-player";

const VideoById = () => {
  const { id } = useParams();
  const navigation = useNavigate();
  const obj = videos.find((elem) => elem.id === Number(id));

  const getById = (id) => {
    navigation(`/video/${id}`);
  };

  if (!obj)
    return <p className="text-center text-red-500 mt-10">Видео не найдено</p>;

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex gap-[10px]">
        <Link to="/">
          <div className="">
            <p>Главная -</p>
          </div>
        </Link>
        <Link to="/video">
          <div className="">
            <p>Видео -</p>
          </div>
        </Link>
        <div className="">
          <p>{obj.title}</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-2/3">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">{obj.title}</h1>
          <p className="text-sm text-gray-500 mb-4">
            {obj.views} {obj.date}
          </p>
          <img
            src={obj.img}
            alt="Preview"
            className="w-full h-auto rounded-2xl mb-6 shadow"
          />
          <p className="text-gray-600 dark:text-[#FAFAFA] leading-relaxed mb-8">
            {obj.description}
          </p>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <ReactPlayer
              controls
              playing
              url={obj.url}
              light
              width="100%"
              height="400px"
              muted
              playIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  stroke="none"
                  className="w-16 h-16 mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 5v14l11-7z"
                  />
                </svg>
              }
            />
          </div>
        </div>

        <div className="md:w-1/3 space-y-6">
          {videos.filter((e) => e.id != id).map((video) => (
            <div
              key={video.id}
              className="flex items-center gap-4 rounded-xl dark:bg-gray-700 shadow hover:shadow-md transition p-3 bg-white cursor-pointer"
              onClick={() => getById(video.id)}
            >
              <img
                src={video.img}
                alt={video.title}
                className="w-32 h-20 rounded-lg object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-xs dark:text-[#FAFAFA] text-gray-400">{video.date}</span>
                <span className="text-sm font-medium dark:text-[#FAFAFA] text-gray-800 hover:text-purple-500 line-clamp-2">
                  {video.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoById;
