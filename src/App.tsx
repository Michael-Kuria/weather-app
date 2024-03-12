import React, { useEffect, useState } from "react";
import { getWeatherData } from "./client/fetchweather";
import { locations } from "./locations";
import { Weather } from "./weather";

function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    getWeatherData(locations[0])
      .then((response) => {
        console.log(response.daily);
        setData(JSON.stringify(response));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <p>Hear is the weather data</p>
      <Weather data={data} />
    </div>
  );
}

export default App;
