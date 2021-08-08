const Info = () => {
  return (
    <ul className="info-list bg-white rounded-xl flex flex-col md:flex-row   items-center text-center py-5 mt-6 mx-auto md:mt-12 max-w-lg md:max-w-4xl xl:max-w-med justify-evenly relative z-20">
      <li className="info-item ">
        <div className="">
          <h2 className="info-title ">IP Address</h2>
          {/* {information && <p className="info-detail">{information.ip}</p>} */}
          <p className="info-detail">192.208.56.27</p>
        </div>
      </li>
      <li className="info-item flex-1">
        <div>
          <h2 className="info-title">Location</h2>
          {/* {information && <p className="info-detail">{information.location}</p>} */}
          <p className="info-detail">Brooklyn,NY 30000</p>
        </div>
      </li>
      <li className="info-item flex-1">
        <div>
          <h2 className="info-title">Timezone</h2>
          {/* {information && <p className="info-detail">{information.timezone}</p>} */}
          <p className="info-detail">UTC-7.00</p>
        </div>
      </li>
      <li className="info-item flex-1 last">
        <div>
          <h2 className="info-title">ISP</h2>
          {/* {information && <p className="info-detail">{information.isp}</p>} */}
          <p className="info-detail">Space-X, Starlink</p>
        </div>
      </li>
    </ul>
  );
};

export default Info;
