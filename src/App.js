import Info from "./components/Info";
import SearchBar from "./components/SearchBar";
import { Map, TileLayer, ZoomControl, Marker, Popup } from "react-leaflet";
import { useEffect, useRef, useState } from "react";
const pattern = {
  domain: /^([\w@-]+)(\.[\w@-]+)?(\.[\w@-]+)?\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  ipAddress: /^([1-2]?[0-9]?[0-9]\.){3}([1-2]?[0-9]?[0-9])$/,
  ifDomain: /^[\w]+/i,
  ifIP: /^[0-9]+/,
};

function App() {
  const [information, setInformation] = useState(null);
  const [address, setAddress] = useState("");
  const [domainName, setDomainName] = useState("");
  const { domain, ipAddress, ifDomain, ifIP } = pattern;
  const [typeText, setTypeText] = useState("");
  const [typeAddress, setTypeAddress] = useState("");
  const textValue = useRef("");
  const [position, setPosition] = useState(null);
  const [namePopup, setNamePopup] = useState("");
  const [countryPopup, setCountryPopup] = useState("");

  const handleChange = (e) => {
    textValue.current = e.target.value;
    const typeValue = textValue.current;
    if (ifIP.test(typeValue)) {
      const result = ipAddress.test(typeValue);

      if (result) {
        setTypeAddress("valid");
      } else {
        setTypeAddress("invalid");
      }
    } else if (ifDomain.test(typeValue)) {
      const result = domain.test(typeValue);

      if (result) {
        setTypeText("valid");
      } else {
        setTypeText("invalid");
      }
    } else {
      setTypeAddress("");
      setTypeText("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeAddress === "valid") {
      setAddress(textValue.current);
    }

    if (typeText === "valid") {
      setDomainName(textValue.current);
    }
  };

  useEffect(() => {
    fetch(
      `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_KEY}ipAddress=${address}&domain=${domainName}`
    )
      .then((res) => res.json())
      .then((data) => {
        const newInfo = {
          ip: data.ip,
          location: `${data.location.region}, ${data.location.city} ${data.location.postalCode}`,
          timezone: `UTC${data.location.timezone}`,
          isp: data.isp,
        };
        setInformation(newInfo);
        setPosition([data.location.lat, data.location.lng]);
        setNamePopup(data.as.name);
        setCountryPopup(data.location.country);
      })
      .catch((err) => console.log(err));
  }, [address, domainName]);

  return (
    <div className="App h-screen xs:min-h-minitab sm:min-h-tablet md:min-h-reverse min-h-mobile">
      <header className="bg-cover text-center px-6 h-2/5 xl:h-hlg xl:min-h-desk duration-200">
        <h1 className="text-2xl font-medium text-white py-7">
          IP Address Tracker
        </h1>
        <SearchBar
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          typeAddress={typeAddress}
          typeText={typeText}
        />
        <Info information={information} />
      </header>
      <main className="h-3/5 md:min-h-tab xl:h-mlg duration-200">
        <Map center={position} tileSize={256} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a> contributors'
            url={`${process.env.REACT_APP_MAPBOX_URL}streets-v11/tiles/{z}/{x}/{y}?access_token=${process.env.REACT_APP_MAPBOX_KEY}`}
          />
          <ZoomControl position={"bottomleft"} />
          <Marker position={position}>
            <Popup>
              <p className="text-yellow-600 text-lg">
                {namePopup}{" "}
                <span className="text-gray-600">{countryPopup}</span>{" "}
              </p>
            </Popup>
          </Marker>
        </Map>
      </main>
    </div>
  );
}

export default App;
