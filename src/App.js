import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
// import Header from './components/Header';
import Home from './components/Home';
import About from './pages/about/About';
import Skills from './pages/skills/Skills';
import Services from './pages/services/Services';
import Projects from './pages/projects/Projects';
import Contacts from './pages/contacts/Contacts';
import Testimonials from './pages/testimonials/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Sidebar />
      {/* <Header /> */}
      <Home />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Testimonials />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
