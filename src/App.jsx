import { Route, Routes } from 'react-router-dom';

import Cast from './components/Cast/Cast';
import Reviews from './components/Reviews/Reviews';
import SharedLayout from './components/SharedLayout/SharedLayout';
import HomePage from './pages/HomePage/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import MoviesPage from './pages/MoviesPage/MoviesPage';

// import Home from './pages/HomePage/HomePage';
// import Movies from './pages/MoviesPage/MoviesPage';
import './App.css';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />

          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
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
