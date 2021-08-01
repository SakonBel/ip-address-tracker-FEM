import React from "react";

const Info = () => {
  return (
    <main>
      <ul className="info-list">
        <li className="info-item">
          <div>
            <h2 className="info-title">IP Address</h2>
            <p className="info-detail"></p>
          </div>
        </li>
        <li className="info-item">
          <div>
            <h2 className="info-title">Location</h2>
            <p className="info-detail"></p>
          </div>
        </li>
        <li className="info-item">
          <div>
            <h2 className="info-title">Timezone</h2>
            <p className="info-detail"></p>
          </div>
        </li>
        <li className="info-item">
          <div>
            <h2 className="info-title">ISP</h2>
            <p className="info-detail"></p>
          </div>
        </li>
      </ul>
    </main>
  );
};

export default Info;
