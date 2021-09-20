import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'

function App() {




  return (
    <BrowserRouter>
      <NavBar/>
      <Home/>
      <About/>
      <Projects/>
    </BrowserRouter>
  );
}

export default App;
