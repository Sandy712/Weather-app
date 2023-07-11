import "./App.css";
import Main from "./component/Main";
import Navbar from "./component/Navbar";
import WeatherMap from "./component/map";

function App() {
  return (
    <>
      <div><Navbar/></div>
      <div><Main/></div>
      {/* <div><WeatherMap/></div> */}
    </>
  );
}

export default App;
