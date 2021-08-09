const Info = ({ information }) => {
  return (
    <ul className="info-list bg-white rounded-xl flex flex-col md:flex-row   items-center text-center py-5 mt-6 mx-auto md:mt-12 max-w-lg md:max-w-4xl xl:max-w-med justify-evenly relative z-20">
      <li className="info-item duration-200">
        <div className="">
          <h2 className="info-title ">IP Address</h2>
          {information && <p className="info-detail">{information.ip}</p>}
        </div>
      </li>
      <li className="info-item flex-1">
        <div>
          <h2 className="info-title">Location</h2>
          {information && <p className="info-detail">{information.location}</p>}
        </div>
      </li>
      <li className="info-item flex-1">
        <div>
          <h2 className="info-title">Timezone</h2>
          {information && <p className="info-detail">{information.timezone}</p>}
        </div>
      </li>
      <li className="info-item flex-1 last">
        <div>
          <h2 className="info-title">ISP</h2>
          {information && <p className="info-detail">{information.isp}</p>}
        </div>
      </li>
    </ul>
  );
};

export default Info;
