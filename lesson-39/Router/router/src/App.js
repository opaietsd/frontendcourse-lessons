import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Aboutus from './Components/Aboutus';
import Contat from './Components/Contat';
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
          <header className="App-header">
            <ul>
              <li>
                <Link to="/">Home</Link>
                <Link lo="/about">About us</Link>
                <Link to="/contact">Contact us</Link>
              </li>
            </ul>
          </header>
          <Routes>
            <Route exact path='/about' element={<Aboutus />}></Route>
            <Route exact path='/' element={<Home />} ></Route>
            <Route exact path='/contact' element={<Contat />}></Route>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
