import React, { useRef, useState } from 'react'
import { Link, useParams } from 'react-router'
import { Button } from '../../shared/ui/custom/button/button'
import ReactPlayer from 'react-player'
import CalendarComponent from '../../shared/ui/custom/calendar-swiper/calendar-swiper'
import LocalActivityIcon from '@mui/icons-material/LocalActivity';

const MovieById = () => {
    let { id } = useParams()
    const videoRef = useRef(null);
    
    let [data] = useState([
      {
        id: 1,
        image: 'https://www.kino-teatr.ru/movie/posters/big/4/0/176904.jpg',
        name: 'Каратэ-пацан: Легенды',
        genres: [
          {
            genre: 'Семейный',
            id: 1
          },
          {
            genre: 'Спорт',
            id: 2
          },
          {
            genre: 'Драма',
            id: 3
          },
          {
            genre: 'Боевик',
            id: 5
          },
          {
            genre: 'Анимадок',
            id: 4
          }
        ],
        age: 12,
        time: '1 ч. 58 минут',
        country: 'США',
        rating: 6.6,
        year: 2025,
        description: 'Продолжение истории об американском мальчишке, победившем в соревнованиях по кунг-фу, и пожилом мастере, помогавшем ему в этом непростом деле.',     
        role: 'Джеки Чан, Джошуа Джексон, Арамис Найт, Ральф Маччио, Мин-На Вэнь, Шонетт Рене Уилсон, Сэди Стэнли, Уайатт Олефф, Бен Ван, Jennifer-Lynn Christie',
        video: 'https://www.youtube.com/embed/55qOCxcLj6o&feature=youtu.be'
      },
      {
        id: 2,
        image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/1/19/Mission-_Impossible_%E2%80%93_The_Final_Reckoning.jpg/330px-Mission-_Impossible_%E2%80%93_The_Final_Reckoning.jpg',
        name: 'Миссия невыполнима: Финальная расплата',
        genres: [
          {
            genre: 'Боевик',
            id: 1
          },
          {
            genre: 'Триллер',
            id: 2
          },
          {
            genre: 'Приключения',
            id: 3
          }
        ],
        age: 16,
        time: '2ч 49мин',
        country: 'США, Великобритания',
        rating: 7.6,
        year: 2025,
        description: 'Итан Хант пытается разыскать инновационный искусственный интеллект, угрожающий существованию всего мира.',     
        role: 'Том Круз, Анджела Бассетт, Джанет МакТир, Ребекка Фергюсон, Ванесса Кирби, Шей Уигэм, Хейли Этвелл, Трэмелл Тиллман, Ханна Уэддингхэм, Кэти М. О’Брайан',
        video: 'https://www.youtube.com/embed/1bsBFEr9_Ag'
      },
      {
        id: 3,
        image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSU13E6WdhYqkaVtEbYqIRZkoyik7J4iMMhdULtdwMmjSMuM07x',
        name: 'Лило и Стич',
        genres: [
          {
            genre: 'Семейный',
            id: 1
          },
          {
            genre: 'Анимация',
            id: 2
          }
        ],
        age: 6,
        time: '1 ч. 25 минут',
        country: 'США',
        rating: 7.2,
        year: 2025,
        description: 'О дружбе, возникшей между девочкой по имени Лило и похожим на собаку/коалу пришельцем по имени Стич, который создан для создания хаоса и разрушений…',     
        role: 'Джейсон Скотт Ли, Зак Галифианакис, Кортни Б. Вэнс, Крис Сандерс, Тиа Каррере, Билли Магнуссен, Ханна Уэддингхэм, Sofia Lone, Сидни Агудонг, Maia Kealoha',
        video: 'https://www.youtube.com/embed/5WXweoj_1Z0'
      },
      {
        id: 4,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGDkrEcx5SHpSuj2i6xBiFtFTbpe4tPEmWqg&s',
        name: 'Игры возмездия',
        genres: [
          {
            genre: 'Боевик',
            id: 1
          },
          {
            genre: 'Триллер',
            id: 2
          }
        ],
        age: 18,
        time: '1 ч. 26 минут',
        country: 'Великобритания, США',
        rating: 3.4,
        year: '29 мая 2025',
        description: 'Бокуши строит неприступную крепость, собирает в ней целый арсенал оружия и преданных ему ветеранов боевых действий. Правительство пытается проникнуть в организацию, чтобы узнать его планы. После нескольких неудачных попыток власти вербуют Нэша Кавано, бывшего спецназовца, который когда-то был учеником Бокуши. Наконец-то у Нэша появляется возможность отомстить человеку, который отнял у него все, включая любовь всей его жизни.',     
        role: 'Лоуренс Мэйсон, Роберт Де Ниро, Джон Легуизамо, Саид Тагмауи, Джейми Фокс, Скотт Иствуд, Рита Ора, Нора Арнезедер, Шамир Андерсон, Джои Бикиччи',
        video: 'https://www.youtube.com/embed/3m3MjEQh0qE'
      },
    ])

    let movie = data.find((e) => e.id == id)
    let movies = data.filter((e) => e.id != id)

    const scrollToVideo = () => {
      videoRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <>
      <section className="my-[40px]">
        <div className="flex items-center flex-wrap text-[18px] gap-[20px]">
          <Link to={"/"}>
            <h3>Главная</h3>
          </Link>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
          <Link to={"/movie"}>
            <h3>Кино</h3>
          </Link>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
          <h3>{movie.name}</h3>
        </div>

            <div className='flex md:flex-row flex-col items-start gap-[20px] justify-between'>            
                <div className='w-[100%]'>
                    <div className='my-[30px] w-[100%] flex md:flex-row flex-col items-start gap-[30px]'>
                        <div className='md:w-[315px]'>
                            <div className='relative'>
                                <img src={movie.image} alt="image" className='md:w-[315px] h-[475px] rounded-[10px]' />
                                <div style={{backgroundColor: movie.rating < 5 ? 'red' : movie.rating < 7 ? '#db8f00' : '#43c443'}} className='absolute top-[15px] right-[15px] w-[30px] h-[20px] rounded-[4px] flex items-center justify-center text-[#FAFAFA]'>
                                {movie.rating}
                                </div>
                            </div>
                            <Button onClick={scrollToVideo} className='w-full my-[20px] h-[50px] text-[#FAFAFA] text-[18px] cursor-pointer hover:bg-[#4040ff] transition-all duration-500 font-normal bg-[#9F00FF]'>Трейлер</Button>
                            <Button className='w-full h-[50px] text-[#FAFAFA] text-[18px] cursor-pointer font-normal hover:bg-[gray] transition-all duration-500 bg-[#272525]'>Купить билет</Button>
                        </div>

              <div className="md:w-[440px] w-[100%]">
                <div className="flex items-center flex-wrap gap-[20px]">
                  {movie.genres.map((e) => {
                    return (
                      <h3 key={e.id} className="h-[35px] px-[5px] text-[gray] flex items-center justify-center rounded-[7px] bg-[#f5f5f5]">
                        {e.genre}
                      </h3>
                    );
                  })}
                </div>
                <h2 className="my-[20px] text-[35px] font-bold">{movie.name}</h2>
                <h3 className="mb-[20px] text-[#9F00FF] text-[18px] font-semibold">Детали:</h3>
                <ul>
                  <li className="font-bold text-[18px]">
                    Возрастная категория фильма: <span className="font-normal">{movie.age}+</span>
                  </li>
                  <li className="font-bold text-[18px]">
                    Хронометраж: <span className="font-normal">{movie.time}</span>
                  </li>
                  <li className="font-bold text-[18px]">
                    Страна: <span className="font-normal">{movie.country}</span>
                  </li>
                  <li className="font-bold text-[18px]">
                    Рейтинг{" "}
                    <span style={{ backgroundColor: movie.rating < 5 ? "red" : movie.rating < 7 ? "#db8f00" : "#43c443" }} className="font-normal text-[#FAFAFA] px-[5px] rounded-[5px] h-[20px]">
                      IMDb {movie.rating}
                    </span>
                  </li>
                  <li className="font-bold text-[18px]">
                    Год: <span className="font-normal">{movie.year}</span>
                  </li>
                  <li className="font-bold text-[18px]">
                    В ролях: <span className="font-normal">{movie.role}</span>
                  </li>
                </ul>
              </div>
            </div>

                    <h3 className='my-[50px] text-[20px] font-bold'>Описание</h3>      
                    <p className='text-[18px] mb-[50px]'>{movie.description}</p>
                    <h3 ref={videoRef} className='mb-[35px] text-[20px] font-bold'>Трейлер</h3>  
                    <div className='overflow-hidden w-[100%] md:w-[370px] rounded-[10px]'>
                        <ReactPlayer
                            controls
                            url={movie.video}
                            light={true}
                            width={'100%'}
                            height={'190px'}
                            playIcon={
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="white"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="none"
                                className="w-16 h-16 mx-auto"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 5v14l11-7z" />
                                </svg>
                            }   
                            />
                    </div>
                    
                    <CalendarComponent />
                    
                    <div className='flex items-center bg-gray-100 rounded-[10px] py-[20px] px-[15px] gap-[10px]'>
                        <LocalActivityIcon className='text-[#9F00FF]' />
                        <h4 className='font-bold text-[18px]'>Чтобы купить билет, нажмите на сеанс.</h4>
                    </div>

                    <h3 className='text-[20px] my-[20px] font-bold'>Душанбе</h3>
                    
                    <div className='bg-gray-100 p-[25px] rounded-[10px]'>
                        <div className='flex items-center gap-[150px]'>
                          <div>
                            <h3 className='text-[20px] font-semibold'>Кайхон</h3>
                            <p className='text-[#9F00FF] font-semibold text-[14px]'>№5</p>
                            <p>(+998) 94-707-4455</p>
                            <p>ул. Бабура, 174, внутри парка Magic Сity</p>
                          </div>
                          <div className='flex items-center gap-[10px]'>
                            <div className='border border-[#9F00FF] px-[5px] hover:text-[#FAFAFA] transition-all duration-300 hover:bg-[#9F00FF] rounded-[5px]'>
                              <p className='text-[18px] font-semibold'>17:40</p>
                            </div>
                            <div className='border border-[#9F00FF] px-[5px] hover:text-[#FAFAFA] transition-all duration-300 hover:bg-[#9F00FF] rounded-[5px]'>
                              <p className='text-[18px] font-semibold'>20:45</p>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div className='p-[25px]'>
                        <div className='flex items-center gap-[150px]'>
                          <div>
                            <h3 className='text-[20px] font-semibold'>Кинотеатр "Ватан"</h3>
                            <p className='text-[#9F00FF] font-semibold text-[14px]'>№4</p>
                            <p>(+998) 94-707-4455</p>
                            <p>ул. Бабура, 174, внутри парка Magic Сity</p>
                          </div>
                          <div className='border border-[#9F00FF] px-[5px] hover:text-[#FAFAFA] transition-all duration-300 hover:bg-[#9F00FF] rounded-[5px]'>
                            <p className='text-[18px] font-semibold'>18:55</p>
                          </div>
                        </div>
                    </div>
                    <div className='bg-gray-100 p-[25px] rounded-[10px]'>
                        <div className='flex items-center gap-[150px]'>
                          <div>
                            <h3 className='text-[20px] font-semibold'>3D Кинотеатр Навруз</h3>
                            <p className='text-[#9F00FF] font-semibold text-[14px]'>№3</p>
                            <p>(+998) 94-707-4455</p>
                            <p>ул. Бабура, 174, внутри парка Magic Сity</p>
                          </div>
                          <div className='flex items-center gap-[10px]'>
                            <div className='border border-[#9F00FF] px-[5px] hover:text-[#FAFAFA] transition-all duration-300 hover:bg-[#9F00FF] rounded-[5px]'>
                              <p className='text-[18px] font-semibold'>17:30</p>
                            </div>
                            <div className='border border-[#9F00FF] px-[5px] hover:text-[#FAFAFA] transition-all duration-300 hover:bg-[#9F00FF] rounded-[5px]'>
                              <p className='text-[18px] font-semibold'>20:20</p>
                            </div>
                            <div className='border border-[#9F00FF] px-[5px] hover:text-[#FAFAFA] transition-all duration-300 hover:bg-[#9F00FF] rounded-[5px]'>
                              <p className='text-[18px] font-semibold'>23:10</p>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
                
                <div>
                    <h3 className='text-[30px] mb-[30px] font-bold'>Смотрите так же</h3>
                    <div className='flex flex-wrap md:w-[320px] w-[100%] gap-[20px] justify-between items-start'>    
                        {
                        movies.slice(0, 4).map((e) => {
                            return <div key={e.id}>
                                <Link to={`/movie/${e.id}`}>
                                    <div className='w-[145px] m-auto md:m-0 overflow-hidden transform transition duration-600 group cursor-pointer' key={e.id}>
                                     <div className='overflow-hidden rounded-[10px] mb-[20px]'>
                                        <img src={e.image} className='w-full h-[230px] object-cover transform transition duration-700 group-hover:scale-110 rounded-[10px]' alt="image" />          
                                     </div>
                                    <h3 className='font-bold group-hover:text-[#9F00FF] transition-all duration-500 text-[19px]'>{e.name}</h3>
                                    <h4 className='my-[15px] text-[18px] text-[#9F00FF]'>Расписание</h4>
                                    <div className='flex flex-wrap items-center gap-[5px]'>
                                        {
                                        e.genres.slice(0,3).map((e) => {
                                            return (
                                            <h3 key={e.id} className='h-[35px] px-[5px] text-[gray] flex items-center justify-center rounded-[7px] bg-[#f5f5f5]'>{e.genre}</h3>
                                            )
                                        })
                                        }
                                    </div>
                                    </div>
                                </Link>                    
                            </div>
                        })   
                        }
                    </div>
                </div>
            </div> 
        </section>
    </>
  );
};

export default MovieById;
