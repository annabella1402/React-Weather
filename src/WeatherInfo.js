import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="city" id="displayed-city">
        {props.data.city}
      </div>
      <ul>
        <li>
          Last updated: <FormattedDate date={props.data.date} />
        </li>
        <li> {props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-sm-6">
          <div className="d-flex weather-temperature">
            <WeatherIcon code={props.data.icon} size={80} />
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-sm-6">
          <ul>
            <li>
              Humidity:{" "}
              <span id="humidity">{Math.round(props.data.humidity)}</span>%
            </li>
            <li>
              Wind: <span id="wind">{Math.round(props.data.wind)}</span>Km/H
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
