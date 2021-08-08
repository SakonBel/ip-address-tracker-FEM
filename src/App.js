import Info from "./components/Info";
import SearchBar from "./components/SearchBar";
import { Map, TileLayer, ZoomControl, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
const pattern = {
  domain: /^([\w@-]+)(\.[\w@-]+)?(\.[\w@-]+)?\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  ipAddress: /^([1-2]?[0-9]?[0-9]\.){3}([1-2]?[0-9]?[0-9])$/,
  ifDomain: /^[\w]+/i,
  ifIP: /^[0-9]+/,
};

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
      <header className="bg-cover text-center px-6 xl:h-hlg xl:min-h-desk duration-200">
        <h1 className="text-2xl font-medium text-white py-7">
          IP Address Tracker
        </h1>
        <SearchBar pattern={pattern} />
        <Info />
      </header>
      <main className="xl:h-mlg duration-200">
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
