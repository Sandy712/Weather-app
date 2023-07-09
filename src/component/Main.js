import axios from "axios";
import React,{useState,useEffect} from "react";


export default function Main() {
  const apikey = "146df592b88af707529963a10994a183"

  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [desc, setDesc] = useState("");
  const [Icon,setIcon] = useState("");
  const [hum, setHum] = useState("");
  const [name, setName] = useState("");
  const [Country,setCountry]=useState("");
  const [wind,setwind] =useState("");
  const [isDataFetched, setIsDataFetched] = useState(false);
  
  const currentDate = new Date().toString().slice(0, 25);


  const fetchData = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`);
      // Handle the response data
      const onlinedata = response.data;
      setTemp(onlinedata.main.temp);
      setDesc(onlinedata.weather[0].description);
      setHum(onlinedata.main.humidity);
      setName(onlinedata.name);
      setIcon(onlinedata.weather[0].icon);
      setCountry(onlinedata.sys.country);
      setwind(onlinedata.wind.speed);
      
      setIsDataFetched(true);

      
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
          `https://api.openweathermap.org/data/2.5/weather?q=Indore&appid=${apikey}&units=metric`
        );
        const onlinedata = response.data;
        setTemp(onlinedata.main.temp);
        setDesc(onlinedata.weather[0].description);
        setHum(onlinedata.main.humidity);
        setName(onlinedata.name);
        setIcon(onlinedata.weather[0].icon);
        setCountry(onlinedata.sys.country);
        setwind(onlinedata.wind.speed);

        console.log(onlinedata);
      }catch (error) {
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
        <h2 className="main_title" style={{ backgroundColor: "lightblue" }}>{name} Weather</h2>
        <h1 className="app__temp">{temp}°C</h1>
        <div className="app_desc">
          <img className="app_image" src={`http://openweathermap.org/img/wn/${Icon}.png`} alt="desc"/>
          <h3>{desc}</h3> 
        </div>

        <div className="app__country">
          <h4 className="app__hum">Humidity: {hum} </h4>
          <h4 className="app__count">Country: {Country}</h4>
        </div>
        <div className="app__windspeed">
          <h4 className="app__wind">Wind Speed: {wind} m/s</h4>
          <h4 className="app__date">{currentDate}</h4>
        </div>
      </div>
    </div>
  );
}