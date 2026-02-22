import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import css from './App.module.css';
import Navigation from "../Navigation/Navigation";
import Loader from "../Loader/Loader";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MovieDetailsPage = lazy(() => import("../../pages/MovieDetailsPage/MovieDetailsPage"));
const MoviesCast = lazy(() => import("../MovieCast/MovieCast"));
const MoviesReviews = lazy(() => import("../MoviesReviews/MoviesReviews"));
const NotFoundPage = lazy(
  () => import("../../pages/NotFoundPage/NotFoundPage"),
);
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));

export default function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="/movies/:movieId/cast" element={<MoviesCast />} />
            <Route path="/movies/:movieId/reviews" element={<MoviesReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
