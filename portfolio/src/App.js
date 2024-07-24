
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Skills from './Components/Skills';
import Education from './Components/Education';
import Projects from './Components/Projects';

function App() {
  return (
    <div>
       <Navbar/>
      <section id="home">
        <Home/>
      </section>
      <section id="about">
        <About/>
      </section>
      <section id="education">
        <Education/>
      </section>
      <section id="skills">
        <Skills/>
      </section>
      <section id="projects">
        <Projects/>
      </section>
      <br/>
      <section id="contact">
        <Contact/>
      </section>
    </div>
    // <BrowserRouter>
    //   <Navbar/>
    //   <Routes>

    //     <Route path='/home' element={
    //      <>
    //       <Home/>
    //      </>
    //     }/>
    //     <Route path='/about' element={
    //      <>
    //          <About/>
    //      </>
    //     }/>
    //     <Route path='/contact' element={
    //      <>
    //          <Contact/>
    //      </>
    //     }/>
    //     <Route path='/skills' element={
    //      <>
    //          <Skills/>
    //      </>
    //     }/>
    //     <Route path='/education' element={
    //      <>
    //          <Education/>
    //      </>
    //     }/>
    //     <Route path='/projects' element={
    //      <>
    //          <Projects/>
    //      </>
    //     }/>
        
    //   </Routes>
    //   </BrowserRouter>
  );
}

export default App;
