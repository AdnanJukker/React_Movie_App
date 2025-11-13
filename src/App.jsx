import './css/App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Favorite from './pages/Favorite';
import { MovieProvider } from './context/MovieContext';
import NavBar from './components/navBar';

function App() {
  return (
    <MovieProvider>
      <NavBar />
    <main className='main-content'>
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/favorite' element= {<Favorite />} />
      </Routes>
    </main>
    </MovieProvider>
  );
}



export default App
