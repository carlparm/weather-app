import React from 'react';
import './App.css';
const api = {
  key: '53ceecdbb29519cd8bf11ca375ed4f75',
  base: "https://api.openweathermap.org/data/2.5"
}

function App() {

  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Where are you?" />
        </div>
      </main>
    </div>
  );
}

export default App;
 