import { NavLink, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import MoviesPage from './pages/MoviesPage/MoviesPage';

// import Home from './pages/HomePage/HomePage';
// import Movies from './pages/MoviesPage/MoviesPage';
import './App.css';

function App() {
  return (
    <>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />

        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
