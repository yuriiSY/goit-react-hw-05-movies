import { Route, Routes } from 'react-router-dom';

import { lazy } from 'react';

import SharedLayout from 'components/SharedLayout/SharedLayout';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const FilmsPage = lazy(() => import('pages/FilmsPage/FilmsPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));
const SingleFilmsPage = lazy(() =>
  import('pages/SingleFilmPage/SingleFilmPage')
);
const ReviewsPage = lazy(() => import('pages/ReviewsPage/ReviewsPage'));
const CastPage = lazy(() => import('pages/CastPage/CastPage'));

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<FilmsPage />} />
          <Route path="/movies/:movieId" element={<SingleFilmsPage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
