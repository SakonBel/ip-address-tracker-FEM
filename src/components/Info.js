import React, { useEffect, useState } from "react";
let address = "";
const Info = () => {
  const [information, setInformation] = useState(null);

  useEffect(() => {
    fetch(
      `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_KEY}ipAddress=${address}`
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
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ul className="info-list bg-white rounded-xl flex flex-col items-center text-center py-5 mt-6 relative z-20">
      <li className="info-item">
        <div>
          <h2 className="info-title">IP Address</h2>
          {information && <p className="info-detail">{information.ip}</p>}
        </div>
      </li>
      <li className="info-item">
        <div>
          <h2 className="info-title">Location</h2>
          {information && <p className="info-detail">{information.location}</p>}
        </div>
      </li>
      <li className="info-item">
        <div>
          <h2 className="info-title">Timezone</h2>
          {information && <p className="info-detail">{information.timezone}</p>}
        </div>
      </li>
      <li className="info-item">
        <div>
          <h2 className="info-title">ISP</h2>
          {information && <p className="info-detail">{information.isp}</p>}
        </div>
      </li>
    </ul>
  );
};

export default Info;
