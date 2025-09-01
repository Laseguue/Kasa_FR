import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Footer from './components/Footer/Footer.jsx';
import DetailsHouse from './components/DetailsHouse/DetailsHouse.jsx';
import Apropos from './components/Apropos/Apropos.jsx';
import FortyFour from './components/404/FortyFour.jsx';

function App() {

  return (
    <Router>
      <div className='App'>
        <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/details/:id" element={<DetailsHouse />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="*" element={<FortyFour />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  )
}

export default App;
