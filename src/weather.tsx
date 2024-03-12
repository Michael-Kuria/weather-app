import { getWeatherData } from "./client/fetchweather";
import React, {FunctionComponent} from "react";
export interface Location {
  latitude: number;
  longitude: number;
}

export interface WeatherData {
  current: Object;
  hourly: Object;
  daily: Object;
}


interface Props{
   data: string
}

export const Weather: FunctionComponent<Props> = ({data}) => {

  return(
    <div>
      {data}
    </div>
  )
}