import React from "react";

const Info = () => {
  return (
    <ul className="info-list bg-white rounded-xl flex flex-col items-center text-center py-5 mt-6 relative z-20">
      <li className="info-item">
        <div>
          <h2 className="info-title">IP Address</h2>
          <p className="info-detail">192.212.174.101</p>
        </div>
      </li>
      <li className="info-item">
        <div>
          <h2 className="info-title">Location</h2>
          <p className="info-detail">Brooklyn,NY 10001</p>
        </div>
      </li>
      <li className="info-item">
        <div>
          <h2 className="info-title">Timezone</h2>
          <p className="info-detail">UTC-05:00</p>
        </div>
      </li>
      <li className="info-item">
        <div>
          <h2 className="info-title">ISP</h2>
          <p className="info-detail">SpaceX Starlink</p>
        </div>
      </li>
    </ul>
  );
};

export default Info;
