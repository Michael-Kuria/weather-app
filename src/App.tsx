import React, { useEffect, useState } from "react";
import { getWeatherData } from "./client/fetchweather";
import { locations } from "./locations";
import { Weather } from "./weather";
import Main from "./components/main";

function App() {
  const [data, setData] = useState("");
  
  // useEffect(() => {
  //   getWeatherData(locations[0])
  //     .then((response) => {
  //       console.log(response);
  //       setData(JSON.stringify(response, undefined, 4));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  return (
    <div className="App">
      <Main />
      {/* <Weather data={data} /> */}
    </div>
  );
}

export default App;
