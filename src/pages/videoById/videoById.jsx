import { useParams } from "react-router";
import { videos } from "../video/video";

const VideoById = () => {
  const { id } = useParams();
  let obj = videos.find((elem) => elem.id == Number(id));
  console.log(obj);

  return (
    <div>
      <div className="flex justify-around">
        <div className="w-[60%]">
          <p className="text-[40px]">{obj.title}</p>
          <img className="w-[90%] rounded-2xl" src={obj.img} alt="" />
        </div>
        <div className="w-[30%] mt-[50px]">
          {videos.map((video) => (
            <div
              key={video.url}
              className="group overflow-hidden border-1 border-gray-500 rounded-[10px] shadow-[5px_5px_5px_5px] shadow-gray-300 md:shadow-0 md:border-0 mt-[50px] md:mt-0 w-[100%] m-auto md:w-[80%]"
            >
              <img
                className="rounded-[10px] w-full object-cover transform transition duration-700 group-hover:scale-110"
                src={video.img}
                alt=""
                onClick={() => getById(video.id)}
              />
              <div className="p-[10px]">
                <p className="text-gray-500 transition">{video.date}</p>
                <p className="transition text-[20px] group-hover:text-purple-400">
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
