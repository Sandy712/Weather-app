import axios from "axios";
import React,{useState} from "react";

export default function Main() {
  const apikey = "146df592b88af707529963a10994a183"

  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [desc, setDesc] = useState("");
  const [hum, setHum] = useState("");

  const currentDate = new Date().toLocaleDateString('en-IN');


  const fetchData = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
      // Handle the response data
      const onlinedata = response.data;
      setTemp(onlinedata.main.temp);
      setDesc(onlinedata.weather[0].description);
      setHum(onlinedata.main.humidity);

      
      if (response.status === 200) {
        const weatherData = response.data;
        // Handle the weather data as per your requirements
        console.log(weatherData);
        return weatherData;
      }
      else {
        throw new Error('API request failed');
      }

    } catch (error) {
      // Handle any errors
      console.error(error);
      alert("Please enter a valid location");
    }
  };





  return (
    <div className="container" style={{ backgroundColor: "green"}}>
      <div className="container_app">
        <form onSubmit={fetchData}   className="app__search">
          <input
            className="app__input"
            type="text"
            placeholder="Insert City Name"
            onChange={(e) => setCity(e.target.value)}
          />
        </form>
        <h2 className="main_title" style={{ backgroundColor: "lightblue" }}>
          Windy-Weather 
        </h2>
        <h1 className="app__temp">{temp}°C</h1>
        <p className="sub_title">Description:{desc}</p>
        <div className="app__humidity">
          <h4 className="app__hum">Humidity: {hum}</h4>
          <h4 className="app__count">Country: India</h4>
        </div>
        <div className="app__windspeed">
          <h4 className="app__wind">Wind Speed: 10m/s</h4>
          <h4 className="app__date">{currentDate}</h4>
        </div>
      </div>
    </div>
  );
}