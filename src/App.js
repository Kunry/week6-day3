import './App.css';
import { Routes, Route } from 'react-router-dom';
import Page404 from './components/Page404';
import LifeStatePage from './pages/LifeStatePage';
import MoviesPage from './pages/MoviesPage';
import NavBar from './components/NavBar';
import MovieDetails from './components/MovieDetails';
import QueryStringMovie from './components/QueryStringMovie';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/home' element={<LifeStatePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path="/search/movies" element={<QueryStringMovie />} />
        <Route path='/movie/:idMovie' element={<MovieDetails />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
