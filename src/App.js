import React from 'react';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
    fetch("https://dark-sky.p.rapidapi.com/38.879700,-77.025818?lang=en&units=auto", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "dark-sky.p.rapidapi.com",
        "x-rapidapi-key": "3e3f7f2f29msh9dbbf38143a9de3p12d253jsn397d037c0019"
      }
    })
    .then(response => {
      console.log(response.json());
    })
    .catch(err => {
      console.log(err);
    });
  }

  dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${month} ${date}, ${year}`
  }

  render() {
    return (
      <div className="app">
        <main>
          <div className="search-box">
            {/* <input type="text" className="search-bar" placeholder="Where are you?" onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search}/> */}
          </div>
          <div className="location-box">
            <div className="location">Washington, DC</div>
            <div className="date">{this.dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">15c</div>
            <div className="weather">Sunny</div>
          </div>
        </main>
      </div>
  );
}
}

export default App;
 