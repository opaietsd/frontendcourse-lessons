import logo from './logo.svg';
import './App.css';
import Search from './Components/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Shearch the image you want to find</h1>
         <Search />
      </header>
    </div>
  );
}

export default App;
