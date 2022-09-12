
import './App.css';
import Header from './components/Header';

import Geekster from './components/Geekster';
import Project from './components/Project';
import Skills from './components/Skills';
import Education from './components/Education';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
   
    <div style={{margin:20}}>
    <Navbar/>
    <Header/> 
    <hr/>
   <Geekster/>
   <Project/>
   <Skills/>
   <Education/>
   <Footer/>
</div>

    
  );
}

export default App;
