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

    function routeById(i){
        if(i<id) navigate(`/digets/${i}`)
        else navigate(`/digets/${i+1}`)
    }

    return (
        <div className='flex flex-col md:flex-row justify-between'>
            <div className='md:w-[60%] w-[100%]'>
                <div className='flex text-[18px] flex-wrap my-[20px] items-center gap-[10px] font-[500]'>
                    <Link to={"/"} className='hover:text-[#9F00FF]'>{t("home")}</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>

                    <Link to={"/digets"} className='hover:text-[#9F00FF]'>{t("digets")}</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>

                    <p>{t(data[id].name)}</p>
                </div>
                <div>
                    <p className='text-[40px] font-[700]'>{t(data[id].name)}</p>
                    <p className='flex items-center text-[16px] my-[20px] text-[#686868] gap-[5px]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                        {data[id].view}</p>
                    <img className='w-[95%] rounded-[5px]' src={data[id].image} alt="" />
                    <div className='flex my-[50px] gap-[30px] flex-col'>
                        {id!=5 && data[id].collection.map((el, i) => (
                            <div key={i} className='flex flex-col gap-[20px]'>
                                {id!=5 && (
                                    <p className='text-[32px] font-[700]'>{t(el.name)}</p>
                                )}
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
                                {id!=5 && el.description && (
                                    <p className='text-[18px]'>{t(el.description)}</p>
                                )}
                                {el.tariffs && (<div>
                                    <p className='text-[18px] font-[700]'>{t("tariffs")}:</p>
                                    <ol className="list-disc list-inside">
                                        {el.tariffs.map((item, i) => (
                                            <li key={i}>
                                                {t(item)}
                                            </li>
                                        ))}
                                    </ol>

                                </div>
                                )}
                                {el.conditions && (
                                    <p className='text-[18px]'><span className='font-[700]'>{t("conditions")}: </span>{t(el.conditions)}</p>
                                )}
                                {el.time && (
                                    <p className='text-[18px]'><span className='font-[700]'>{t("time")}: </span>{t(el.time)}</p>
                                )}
                                {el.address && (
                                    <p className='text-[18px]'><span className='font-[700]'>{t("address")}: </span>{t(el.address)}</p>
                                )}
                                {el.phone && (
                                    <p className='text-[18px]'><span className='font-[700]'>{t("phone")}: </span>{t(el.phone)}</p>
                                )}
                                {el.importnamt && (
                                    <p className='text-[18px]'><span className='font-[700]'>{t("important")}: </span>{t(el.importnamt)}</p>
                                )}
                                {el.Instagram && (
                                    <p className='text-[18px]'><span className='font-[700]'>Instagram: </span>@{el.Instagram}</p>
                                )}
                                {el.TikTok && (
                                    <p className='text-[18px]'><span className='font-[700]'>TikTok: </span>{el.TikTok}</p>
                                )}
                                {el.YouTube && (
                                    <p className='text-[18px]'><span className='font-[700]'>YouTube: </span>{el.YouTube}</p>
                                )}
                            </div>
                        ))}
                        <ol className='flex mt-[50px] flex-col gap-[30px]'>
                            {id==5 && data[id].collection.map((el, i)=>(
                                <li key={i} className='text-[20px]'><span className='font-[700]'>{i+1}.{t(el.name)}.</span>{t(el.description)}</li>
                            ))}
                        </ol>
                    </div>
                </div>
                <div className='flex flex-row my-[30px] gap-[20px]'>
                    <p className='font-[700] text-[22px]'><span>{t("share")}:</span></p>
                    <div className='flex flex-row items-center gap-[20px]'>
                        <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Twitter--Streamline-Svg-Logos" height={24} width={24} ><desc>{"\n    Twitter Streamline Icon: https://streamlinehq.com\n  "}</desc><path fill="#55acee" d="M23.75 4.7117c-0.86465 0.38345 -1.79385 0.642625 -2.769125 0.759175 0.995475 -0.5967 1.7599 -1.54155 2.119875 -2.66735 -0.931525 0.55245 -1.96335 0.9537 -3.06155 1.169975 -0.879525 -0.937025 -2.132525 -1.5225725 -3.5192 -1.5225725 -2.6627 0 -4.82145 2.1586475 -4.82145 4.8211975 0 0.377875 0.042725 0.74585 0.1249 1.098725 -4.007025 -0.201075 -7.559575 -2.1205 -9.9375025 -5.0374 -0.4150025 0.712075 -0.6527625 1.540275 -0.6527625 2.42385 0 1.67265 0.85124 3.148375 2.144915 4.012925 -0.7904 -0.025 -1.533755 -0.241875 -2.1838525 -0.602975 -0.000345 0.0201 -0.000345 0.0403 -0.000345 0.0606 0 2.335975 1.6618975 4.28465 3.8674975 4.7275 -0.4046 0.1102 -0.830525 0.169075 -1.270275 0.169075 -0.31065 0 -0.612725 -0.030175 -0.907025 -0.086475 0.613475 1.915475 2.394 3.309375 4.50375 3.348325 -1.65005 1.29305 -3.728925 2.06385 -5.987735 2.06385 -0.38913 0 -0.7729325 -0.0228 -1.150115 -0.067325 2.133645 1.36795 4.66795 2.16605 7.39065 2.16605 8.8681 0 13.7175 -7.34655 13.7175 -13.71765 0 -0.20905 -0.00465 -0.416975 -0.013925 -0.6237 0.941925 -0.679775 1.759375 -1.52895 2.405775 -2.4958Z" strokeWidth={0.25} /></svg>
                        <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Facebook--Streamline-Svg-Logos" height={24} width={24} ><desc>{"\n    Facebook Streamline Icon: https://streamlinehq.com\n  "}</desc><path fill="#1877f2" d="M23.75 12C23.75 5.51065 18.48935 0.25 12 0.25S0.25 5.51065 0.25 12c0 5.864775 4.2968 10.725775 9.91405 11.60725V15.396475H7.180675V12h2.983375V9.411325c0 -2.94485 1.7542 -4.571475 4.43815 -4.571475 1.28555 0 2.630225 0.229475 2.630225 0.229475v2.891625h-1.48165c-1.45965 0 -1.914825 0.905725 -1.914825 1.83495V12h3.258775l-0.52095 3.396475H13.83595V23.60725C19.4532 22.725775 23.75 17.864775 23.75 12Z" strokeWidth={0.25} /><path fill="#ffffff" d="M16.573775 15.396475 17.094725 12H13.83595v-2.2041c0 -0.929225 0.455175 -1.83495 1.914825 -1.83495h1.48165V5.069325s-1.344675 -0.229475 -2.630225 -0.229475c-2.68395 0 -4.43815 1.626625 -4.43815 4.571475V12H7.180675v3.396475h2.983375V23.60725C10.762275 23.701125 11.375425 23.75 12 23.75c0.624575 0 1.237725 -0.048875 1.83595 -0.14275V15.396475h2.737825Z" strokeWidth={0.25} /></svg>
                        <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 96 96" id="Telegram--Streamline-Svg-Logos" height={24} width={24} ><desc>{"\n    Telegram Streamline Icon: https://streamlinehq.com\n  "}</desc><path fill="url(#a)" d="M48 1C35.5377 1 23.5747 5.95483 14.7695 14.7659 5.95703 23.5769 1 35.5399 1 48c0 12.4601 4.95703 24.4231 13.7695 33.2341C23.5747 90.0452 35.5377 95 48 95c12.4623 0 24.4253-4.9548 33.2305-13.7659C90.043 72.4231 95 60.4601 95 48c0-12.4601-4.957-24.4231-13.7695-33.2341C72.4253 5.95483 60.4623 1 48 1Z" /><path fill="#ffffff" d="M22.2748 47.5041c13.7034-5.969 22.8391-9.9045 27.4069-11.8058 13.0572-5.4292 15.767-6.3722 17.5368-6.4041.3893-.0063 1.2558.0899 1.8213.5474.47.3856.6022.907.6683 1.2727.0587.3657.1395 1.1993.0734 1.8499-.705 7.4319-3.7673 25.4667-5.3242 33.7908-.6536 3.5222-1.9534 4.7031-3.2092 4.8184-2.7319.2511-4.8028-1.8036-7.4466-3.5362-4.1345-2.712-6.4698-4.3996-10.4869-7.0456-4.6412-3.0579-1.6303-4.7389 1.0135-7.4855.6903-.7189 12.7194-11.6574 12.947-12.6496.0294-.1241.0588-.5867-.2203-.8305-.2717-.2446-.6756-.1609-.9694-.0948-.4186.094-7.0206 4.4621-19.8281 13.1035-1.8727 1.2881-3.5691 1.916-5.0966 1.8829-1.6743-.036-4.9056-.9488-7.307-1.7287-2.9375-.9569-5.2801-1.4629-5.0745-3.088.1028-.846 1.2704-1.7119 3.4956-2.5968Z" /><defs><linearGradient id="a" x1={4701} x2={4701} y1={1} y2={9401} gradientUnits="userSpaceOnUse"><stop stopColor="#2aabee" /><stop offset={1} stopColor="#229ed9" /></linearGradient></defs></svg>
                    </div>
                </div>
            </div>
            <div className='w-[100%] md:w-[38%]'>
                <p className='text-[24px] font-[700]'>{t("intersting")}</p>
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
                                    <p>{t(el.category)}</p>
                                </div>
                                <p onClick={() => routeById(i)} className='text-[16px] font-[600] cursor-pointer hover:text-[#9F00FF]'>{t(el.name)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DigetInfo