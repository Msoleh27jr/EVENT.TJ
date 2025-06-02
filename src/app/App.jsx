import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./styles/App.css";
import '../app/providers/i18n/i18next'
import Layout from "./providers/layout/layout";
import { Digets, Events, Home, Movie, News, Pictures, Theatres, Video } from "./providers/lazy/lazy";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Suspense fallback={<p>loading</p>}>
          <Layout />
        </Suspense>}>
          <Route index element={<Home />} />
          <Route path="theatres" element={<Theatres/>}/>
          <Route path="movie" element={<Movie/>}/>
          <Route path="pictures" element={<Pictures/>}/>
          <Route path="digets" element={<Digets/>}/>
          <Route path="video" element={<Video/>}/>
          <Route path="news" element={<News/>}/>
          <Route path="events" element={<Events/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
