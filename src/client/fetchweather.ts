import { fetchWeatherApi } from "openmeteo";
import { WeatherData } from "../weather";
import Axios from "axios";
import { range } from "../helpers";
import { Location } from "../types/location";

const params = {
  current: "temperature_2m,weather_code,wind_speed_10m,wind_direction_10m",
  hourly: "temperature_2m,precipitation",
  daily: "weather_code,temperature_2m_max,temperature_2m_min",
};

const weatherUrl = "https://api.open-meteo.com/v1/forecast";

export const getWeatherData = async (location: Location) => {
  const responses = await fetchWeatherApi(weatherUrl, {
    ...location,
    ...params,
  });

  const response = responses[0];

  // Attributes for timezone and location
  const utcOffsetSeconds = response.utcOffsetSeconds();
  const timezone = response.timezone();
  const timezoneAbbreviation = response.timezoneAbbreviation();
  const latitude = response.latitude();
  const longitude = response.longitude();

  const current = response.current()!;
  const hourly = response.hourly()!;
  const daily = response.daily()!;

  // Note: The order of weather variables in the URL query and the indices below need to match!
  const weatherData = {
    current: {
      time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
      temperature: current.variables(0)!.value(), // Current is only 1 value, therefore `.value()`
      weatherCode: current.variables(1)!.value(),
      windSpeed: current.variables(2)!.value(),
      windDirection: current.variables(3)!.value(),
    },
    hourly: {
      time: range(
        Number(hourly.time()),
        Number(hourly.timeEnd()),
        hourly.interval()
      ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
      temperature: hourly.variables(0)!.valuesArray()!, // `.valuesArray()` get an array of floats
      precipitation: hourly.variables(1)!.valuesArray()!,
    },
    daily: {
      time: range(
        Number(daily.time()),
        Number(daily.timeEnd()),
        daily.interval()
      ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
      weatherCode: daily.variables(0)!.valuesArray()!,
      temperatureMax: daily.variables(1)!.valuesArray()!,
      temperatureMin: daily.variables(2)!.valuesArray()!,
    },
  };

  return weatherData;
};
