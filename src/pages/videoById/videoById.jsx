import { useNavigate, useParams } from "react-router";
import { videos } from "../video/video";
import ReactPlayer from "react-player";

const VideoById = () => {
  const { id } = useParams();
  const navigation = useNavigate();
  let obj = videos.find((elem) => elem.id == Number(id));
  console.log(obj);

  function getById(id) {
    navigation(`/video/${id}`);
  }

  return (
    <div>
      <div className=" md:flex justify-around">
        <div className="w-[90%] m-auto md:w-[60%]">
          <p className="text-[25px] md:text-[40px]">{obj.title}</p>
          <p className="text-gray-500">{obj.views} {obj.date}</p>
          <img className="w-[90%] rounded-2xl" src={obj.img} alt="" />
          <br />
          <p className="text-gray-500">{obj.description}</p>
          <div className="w-[100%] mt-[50px] overflow-hidden rounded-2xl">
            <ReactPlayer
              controls
              playing={true}
              url={obj.url}
              light={true}
              width={"100%"}
              height={"400px"}
              muted
              playIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
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
        <div className="w-[90%] m-auto md:w-[35%] mt-[50px]">
          {videos.map((video) => (
            <div
              key={video.url}
              className="group flex overflow-hidden border-1 border-gray-500 rounded-[10px] shadow-[5px_5px_5px_5px] shadow-gray-300 md:shadow-0 md:border-0 mt-[50px] md:mt-[20px] w-[100%] h-[100px] md:w-[100%]"
            >
              <img
                className="rounded-[10px] w-[150px] h-[100px] object-cover transform transition duration-700 group-hover:scale-110"
                src={video.img}
                alt=""
                onClick={() => getById(video.id)}
              />
              <div className="p-[10px]">
                <p className="text-gray-500 transition">{video.date}</p>
                <p className="transition group-hover:text-purple-400">
                  {video.title} — <a href={video.url}>Смотреть</a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoById;
