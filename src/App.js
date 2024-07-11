import hotel from './hotelbg.jpg';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="img">
        <header className="App-header">
          <img src={hotel} className="App-logo" alt="logo" />
          <p>
            This is VP restaurant website
          </p>
          <a
            className="App-link"
            href="https://maps.app.goo.gl/1V4pHutFKJu53bPi6"
            target="_blank"
            rel="noopener noreferrer"
          >
            Location
          </a>
        </header>
      </div>
    </div>
  );
}

export default App;
