import "./App.css";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container col-6 text-left">
        <div className="container card">
          <div className="card-body">
            <form className="app__search">
              <input
                className="app__input"
                type="text"
                placeholder="Insert City Name"
                // onChange={(e) => setCity(e.target.value)}
              />
            </form>
            <h2 className="card-title" style={{ backgroundColor: "lightblue" }}>
              Windy-Weather
            </h2>
            <h1 className="app__temp">°C</h1>

            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <div className="app__humidity">
              <h4 className="app__hum">Humidity: 10%</h4>
              <h4 className="app__count">Country: India</h4>
            </div>
            <div className="app__windspeed">
              <h4 className="app__wind">Wind Speed: 10m/s</h4>
              <h4 className="app__date">13/6/23</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
