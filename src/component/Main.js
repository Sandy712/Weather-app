import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { RiSearchLine } from 'react-icons/ri';
import humi from './images/humidity.png';
import windi from './images/wind.png';
import globe from './images/glob.png';
// import logo from './Weather-app/src/component/images/search-icon.png'


export default function Main() {
  const apikey = "146df592b88af707529963a10994a183"

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_DATA":
        return {
          ...state,
          temp: action.payload.temp,
          desc: action.payload.desc,
          hum: action.payload.hum,
          name: action.payload.name,
          Icon: action.payload.Icon,
          Country: action.payload.Country,
          wind: action.payload.wind,
          isDataFetched: true,
        };
      case "SET_CITY":
        return {
          ...state,
          city: action.payload,
        };
      default:
        return state;
    }
  };

  const initialState = {
    city: "",
    temp: "",
    desc: "",
    Icon: "",
    hum: "",
    name: "",
    Country: "",
    wind: "",
    isDataFetched: false,
  };

  const currentDate = new Date().toString().slice(0, 25);

  const [state, dispatch] = useReducer(reducer, initialState);
  const { city, temp, desc, Icon, hum, name, Country, wind, isDataFetched } = state;



  const fetchData = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`);
      // Handle the response data
      const onlinedata = response.data;
      dispatch({
        type: "SET_DATA",
        payload: {
          temp: onlinedata.main.temp,
          desc: onlinedata.weather[0].description,
          hum: onlinedata.main.humidity,
          name: onlinedata.name,
          Icon: onlinedata.weather[0].icon,
          Country: onlinedata.sys.country,
          wind: onlinedata.wind.speed,
        },
      });
      console.log(onlinedata)
    } catch (error) {
      // Handle any errors
      console.error(error);
      alert("Please enter a valid location");
    }
  };

  const defaultData = async () => {
    if (isDataFetched === false || city === "") {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=${apikey}&units=metric`
        );
        const onlinedata = response.data;
        dispatch({
          type: "SET_DATA",
          payload: {
            temp: onlinedata.main.temp,
            desc: onlinedata.weather[0].description,
            hum: onlinedata.main.humidity,
            name: onlinedata.name,
            Icon: onlinedata.weather[0].icon,
            Country: onlinedata.sys.country,
            wind: onlinedata.wind.speed,
          },
        });

        // console.log(onlinedata);
      } catch (error) {
        // Handle any errors
        console.error(error);
        alert("Please enter a valid location");
      }
    }
  };

  useEffect(() => {
    defaultData();
  });


  return (
    <div className="container d-flex align-items-center justify-content-center" >
      <div className="container_app" style={{ cursor: 'auto' }}>
        <div className="Search">
          <form onSubmit={fetchData} className="search-bar" >
            <input
              className="app__input"
              type="text"
              placeholder="Enter City Name"
              onChange={(e) => dispatch({ type: "SET_CITY", payload: e.target.value })}
              spellCheck='false'

            />
            <button className="button"><RiSearchLine className="search-icon" /></button>
          </form>
        </div>



        <div className="Title">
          <h2 className="main_title" >{(name).toUpperCase()} Weather</h2>
          <h1 className="app__temp">{Math.trunc(temp)}°C</h1>
        </div>
        <div className="app_desc">
        </div>

        <div className="grid-container">

          <div className="item item1">
            <img className="app_image" src={`http://openweathermap.org/img/wn/${Icon}.png`} alt="desc" />
            <h3 style={{ cursor: 'auto' }}>{desc}</h3>
          </div>
          <div className="item item2" >
            <img src={humi} alt="" />
            <h4 className="app__hum">Humidity: {hum}%</h4>
          </div>
          <div className="item item3">
            <img src={globe} alt="" />
            <h4 className="app__count">Country: {Country} </h4>
          </div>
          <div className="item item4">
            <img src={windi} alt="" />
            <h4 className="app__wind">Wind Speed: {Math.trunc(wind * 3.6)} km/h</h4>
          </div>
        </div>
        <div className="date-time">
          <h4 className="app__date">Date: {currentDate}</h4>
        </div>
      </div>
    </div>
  );
}
