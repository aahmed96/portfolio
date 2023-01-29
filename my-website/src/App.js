import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App () {
  return (
    <div id="app" className="App">
       
        <Header />

        <Body />

        <About />

        <Skills />

        <Footer />

      
    </div>

    
  );
}

export default App;
