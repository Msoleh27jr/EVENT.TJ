import React from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import { data } from './dataBase'
import { useTranslation } from 'react-i18next'

const DigetInfo = () => {
    const { id } = useParams()
    console.log(data[id]);

    let recomended = data.filter((el, i) => i != id)

    let navigate = useNavigate()

    const { t } = useTranslation();

    return (
        <div className='flex flex-row justify-between'>
            <div className='w-[68%]'>
                <div className='flex text-[18px] my-[20px] items-center gap-[10px] font-[500]'>
                    <Link to={"/"} className='hover:text-[#9F00FF]'>{t("home")}</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>

                    <Link to={"/digets"} className='hover:text-[#9F00FF]'>{t("digets")}</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>

                    <p>{data[id].name}</p>
                </div>
                <div>
                    <p className='text-[40px] font-[700]'>{data[id].name}</p>
                    <p className='flex items-center text-[16px] my-[20px] text-[#686868] gap-[5px]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                        {data[id].view}</p>
                    <img className='w-[95%] rounded-[5px]' src={data[id].image} alt="" />
                    <div className='flex my-[50px] gap-[30px] flex-col'>
                        {data[id].collection.map((el, i) => (
                            <div key={i} className='flex flex-col gap-[20px]'>
                                <p className='text-[32px] font-[700]'>{el.name}</p>
                                {Array.isArray(el.link) && el.link.length > 0 &&
                                    el.link.map((url, index) => {
                                        let videoId = null;

                                        try {
                                            const parsed = new URL(url);
                                            if (parsed.hostname === 'youtu.be') {
                                                videoId = parsed.pathname.slice(1);
                                            } else if (parsed.hostname.includes('youtube.com')) {
                                                videoId = parsed.searchParams.get('v');
                                            }
                                        } catch (err) {
                                            console.error('Invalid YouTube URL:', url);
                                        }

                                        return (
                                            videoId && (
                                                <iframe
                                                    key={index}
                                                    className="rounded-[5px] w-[95%] h-[70vh] mb-4"
                                                    src={`https://www.youtube.com/embed/${videoId}`}
                                                    title={`YouTube video ${index + 1}`}
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                ></iframe>
                                            )
                                        );
                                    })
                                }

                                {
                                    Array.isArray(el.link) == false && (
                                        <img src={el.link} className="rounded-[5px] w-[95%]" alt="" />
                                    )
                                }
                                {el.description && (
                                    <p className='text-[18px]'>{el.description}</p>
                                )}
                                {el.tariffs && (<div>
                                    <p className='text-[18px] font-[700]'>Тарифы:</p>
                                    <ol className="list-disc list-inside">
                                        {el.tariffs.map((item, i) => (
                                            <li key={i}>
                                                {item}
                                            </li>
                                        ))}
                                    </ol>

                                </div>
                                )}
                                {el.conditions && (
                                    <p className='text-[18px]'><span className='font-[700]'>Дополнительные услуги: </span>{el.conditions}</p>
                                )}
                                {el.time && (
                                    <p className='text-[18px]'><span className='font-[700]'>Время работы: </span>{el.time}</p>
                                )}
                                {el.address && (
                                    <p className='text-[18px]'><span className='font-[700]'>Адрес: </span>{el.address}</p>
                                )}
                                {el.phone && (
                                    <p className='text-[18px]'><span className='font-[700]'>Телефон: </span>{el.phone}</p>
                                )}
                                {el.importnamt && (
                                    <p className='text-[18px]'><span className='font-[700]'>Важно: </span>{el.importnamt}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='w-[30%]'>
                <p className='text-[24px] font-[700]'>Так же вам может быть интересно</p>
                <div className='flex flex-col my-[30px] gap-[20px]'>
                    {recomended && recomended.map((el, i) => (
                        <div key={i} className='flex flex-row gap-[20px]'>
                            <img className='rounded-[5px] w-[40%]' src={el.image} alt="Photo" />
                            <div className='flex flex-col gap-[10px]'>
                                <div className='flex text-[12px] text-[#686868] flex-row gap-[20px]'>
                                    <p className='flex items-center gap-[5px]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                        {el.view}</p>
                                    <p>{el.category}</p>
                                </div>
                                <p onClick={() => navigate(`/digets/${i}`)} className='text-[16px] font-[600] cursor-pointer hover:text-[#9F00FF]'>{el.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <p><span>Поделиться:</span></p>
            </div>
        </div>
    )
}

export default DigetInfo