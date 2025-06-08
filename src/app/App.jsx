import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./styles/App.css";
import "../app/providers/i18n/i18next";
import Layout from "./providers/layout/layout";
import {
  Digets,
  Events,
  EventsById,
  Home,
  Movie,
  MovieById,
  News,
  NewsById,
  PictureById,
  Pictures,
  Theatres,
  Video,
  VideoById,
} from "./providers/lazy/lazy";
import Loading from "../shared/loading/loading";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense
              fallback={<Loading/>}
            >
              <Layout />
            </Suspense>
          }
        >
          <Route index element={<Home />} />
          <Route path="theatres" element={<Theatres />} />
          <Route path="movie" element={<Movie />} />
          <Route path="pictures/:id" element={<PictureById />} />
          <Route path="pictures" element={<Pictures />} />
          <Route path="digets" element={<Digets />} />
          <Route path="video/:id" element={<VideoById />} />
          <Route path="video" element={<Video />} />
          <Route path="news/:id" element={<NewsById />} />
          <Route path="news" element={<News />} />
          <Route path="events/:id" element={<EventsById />} />
          <Route path="events" element={<Events />} />
          <Route path="movie/:id" element={<MovieById />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
