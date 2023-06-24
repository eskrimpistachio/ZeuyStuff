import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import Content from './pages/Content';
import Exhibition from './pages/Exhibition';
import Book from './pages/Book';
import Artwork from './pages/Artwork';
import About from './pages/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<Content />}>
            <Route path="/exhibition" element={<Exhibition />} />
            <Route path="/exhibition/book" element={<Book />} />
            <Route path="/exhibition/artwork" element={<Artwork />} />
          </Route>
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
