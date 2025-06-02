import { lazy } from "react";


export const Home = lazy(()=> import('../../../pages/home/home.jsx'))
export const Theatres = lazy(()=> import('../../../pages/theatres/theatres.jsx'))
export const Movie = lazy(()=> import('../../../pages/movie/movie.jsx'))
export const Pictures = lazy(()=> import('../../../pages/pictures/pictures.jsx'))
export const Digets = lazy(()=> import('../../../pages/digets/digets.jsx'))
export const Video = lazy(()=> import('../../../pages/video/video.jsx'))
export const News = lazy(()=> import('../../../pages/news/news.jsx'))
export const Events = lazy(()=> import('../../../pages/events/evevnts.jsx'))