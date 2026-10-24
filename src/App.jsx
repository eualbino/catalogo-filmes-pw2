// External libraries
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components
import Home from './components/Table';
import Create from './components/Form';
import Header from './components/Header';
import Update from './components/FormUpdate';
import Delete from './components/FormDelete';
import MovieDetails from './components/SingleMovie';
import { MovieProvider } from './context/MovieContext';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function App() {
  return (
    <BrowserRouter>
    <MovieProvider>
    <Header/>
      <main className="container py-5">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="create" element={<Create/>}/>
          <Route path="details/:id" element={<MovieDetails/>}/>
          <Route path="update" element={<Update/>}/>
          <Route path="delete" element={<Delete/>}/>
        </Routes>
      </main>
      </MovieProvider>
    </BrowserRouter>
  )
}
