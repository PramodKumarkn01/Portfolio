import React from 'react';
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
import Home from '../src/Pages/Home';
import Header  from './Components/Header';
import Footer from './Components/Footer';
import Myskill from './Pages/Myskill';
import Conatct from './Pages/Contact';
import EducationExperience from './Pages/Education';
// import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header/>
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Home" element={<Home />} />
            <Route path="/Myskill" element={<Myskill />} />
            <Route path="/Contact" element={<Conatct />} />
            <Route path="/EducationExperience" element={<EducationExperience/>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
