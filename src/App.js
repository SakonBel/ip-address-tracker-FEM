import Info from "./components/Info";
import SearchBar from "./components/SearchBar";
import { Map, TileLayer, ZoomControl, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";

function App() {
  // const [information, setInformation] = useState(null);
  // const [address, setAddress] = useState("");
  const [position, setPosition] = useState([51.505, -0.09]);

  // useEffect(() => {
  //   fetch(
  //     `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_KEY}ipAddress=${address}&domain=react-leaflet-v2-docs.netlify.app`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const newInfo = {
  //         ip: data.ip,
  //         location: `${data.location.region}, ${data.location.city} ${data.location.postalCode}`,
  //         timezone: `UTC${data.location.timezone}`,
  //         isp: data.isp,
  //       };
  //       setInformation(newInfo);
  //      setPosition([data.lat, data.lng])
  //     })
  //     .catch((err) => console.log(err));
  // }, [address]);

  return (
    <div className="App h-screen min-h-reverse">
      <header className="bg-cover text-center px-6 xl:h-hlg xl:min-h-desk">
        <h1 className="text-2xl font-medium text-white py-7">
          IP Address Tracker
        </h1>
        <SearchBar />
        <Info />
      </header>
      <main className="xl:h-mlg">
        <Map center={position} tileSize={256} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a> contributors'
            url={`${process.env.REACT_APP_MAPBOX_URL}streets-v11/tiles/{z}/{x}/{y}?access_token=${process.env.REACT_APP_MAPBOX_KEY}`}
          />
          <ZoomControl position={"bottomleft"} />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </Map>
      </main>
    </div>
  );
}

export default App;
