import { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';

// import Cast from './components/Cast/Cast';
// import Reviews from './components/Reviews/Reviews';
import SharedLayout from './components/SharedLayout/SharedLayout';

// import HomePage from './pages/HomePage/HomePage';
// import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
// import MoviesPage from './pages/MoviesPage/MoviesPage';
import './App.css';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));
const Cast = lazy(() => import('./components/Cast/Cast'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />

          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<HomePage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
