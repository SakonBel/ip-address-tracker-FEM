import Info from "./components/Info";
import SearchBar from "./components/SearchBar";
import { Map, TileLayer, ZoomControl } from "react-leaflet";

function App() {
  return (
    <div className="App h-screen min-h-reverse">
      <header className="h-2/5 bg-cover text-center px-6">
        <h1 className="text-2xl font-medium text-white py-7">
          IP Address Tracker
        </h1>
        <SearchBar />
        <Info />
      </header>
      <main className="h-3/5">
        <Map
          center={[51.505, -0.09]}
          tileSize={256}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a> contributors'
            url={`${process.env.REACT_APP_MAPBOX_URL}streets-v11/tiles/{z}/{x}/{y}?access_token=${process.env.REACT_APP_MAPBOX_KEY}`}
          />
          <ZoomControl position={"bottomleft"} />
        </Map>
      </main>
    </div>
  );
}

export default App;
