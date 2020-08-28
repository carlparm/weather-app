import React, { useState } from 'react';
// const api = {
//   key: '53ceecdbb29519cd8bf11ca375ed4f75',
//   base: "https://api.openweathermap.org/data/2.5"
// }

function App() {

  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})

  const search = e => {
    if(e.key === "Enter")
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${month} ${date}, ${year}`
  }

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Where are you?" onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search}/>
        </div>
        <div className="location-box">
          <div className="location">Washington, DC</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">15c</div>
          <div className="weather">Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;
 