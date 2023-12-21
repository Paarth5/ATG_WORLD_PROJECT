import Navbar from "./components/navbar";
import Homehero from "./components/homehero";
import Taskbar from "./components/taskbar";
import Card from "./components/card";
import Location from "./components/location";
import data from "./data";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Homehero />
      <div className="container">
        <Taskbar />
        <div className="main-body">
          <div>
            {data.map((d) => {
              return <Card key={d.id} {...d} />;
            })}
          </div>
          <div className="location-container">
            <Location />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
