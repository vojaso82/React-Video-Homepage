import './App.css';
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'

function App() {




  return (
    <div className='app'>
      <NavBar/>
      <Home/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
