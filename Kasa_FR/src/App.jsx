import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Footer from './components/Footer/Footer.jsx';
import DetailsHouse from './components/DetailsHouse/DetailsHouse.jsx';
import Apropos from './components/Apropos/Apropos.jsx';

function App() {

  return (
    <Router>
      <div className='App'>
        <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/details/:id" element={<DetailsHouse />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
      <Footer />
    </div>
    </Router>
  )
}

export default App;
