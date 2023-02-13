import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App () {
  return (
    <div id="app" className="App">
       
        <Header />

        <Body />

        <About />

        <Skills />

        <Projects />

        <Footer />

      
    </div>

    
  );
}

export default App;
