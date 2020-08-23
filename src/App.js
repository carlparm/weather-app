import React from 'react';
import './App.css';
const api = {
  key: '53ceecdbb29519cd8bf11ca375ed4f75',
  base: "https://api.openweathermap.org/data/2.5"
}

function App() {

  componentDidMount() {
    fetch("api.openweathermap.org/data/2.5/weather?lat={38.8813}&lon={77.0281}&appid={53ceecdbb29519cd8bf11ca375ed4f75}")
    .then(resp => resp.json())
    .then(weather => {

    })
}

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
 