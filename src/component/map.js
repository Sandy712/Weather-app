import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';

// Import Leaflet CSS
import 'leaflet/dist/leaflet.css';

// Fix Leaflet marker icon issue
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const WeatherMap = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('India');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
        const API_KEY = 'YOUR_API_KEY';

        // Fetch real-time weather data from the OpenWeatherMap API based on the search query
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${weatherData?.coord.lat}&lon=${weatherData?.coord.lon}&appid=${API_KEY}`
        );
        setWeatherData((prevData) => ({ ...prevData, ...response.data }));
      } catch (error) {
        console.error(error);
      }
    };

    if (weatherData) {
      fetchData();
    }
  }, [weatherData]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.elements.search.value);
  };

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
        const API_KEY = '68728417b823fdcc4f64b58984b566f1';

        // Fetch initial weather data from the OpenWeatherMap API based on the search query
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${API_KEY}`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchInitialData();
  }, [searchQuery]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { coord } = weatherData;
  const { lat, lon } = coord;

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" name="search" placeholder="Enter a country" />
        <button type="submit">Search</button>
      </form>
      <MapContainer center={[lat, lon]} zoom={6} style={{ height: '400px' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {weatherData.current && (
          <Marker position={[lat, lon]}>
            <Popup>
              <h3>{weatherData.name}</h3>
              <p>{weatherData.current.weather[0].description}</p>
              <p>Temperature: {weatherData.current.temp} K</p>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default WeatherMap;
