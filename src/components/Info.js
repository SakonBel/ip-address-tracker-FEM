const Info = () => {
  return (
    <ul className="info-list bg-white rounded-xl flex flex-col xl:flex-row   items-center text-center py-5 mt-6 mx-auto xl:mt-12 max-w-med justify-evenly relative z-20">
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
          <p className="info-detail">text</p>
        </div>
      </li>
      <li className="info-item flex-1">
        <div>
          <h2 className="info-title">Timezone</h2>
          {/* {information && <p className="info-detail">{information.timezone}</p>} */}
          <p className="info-detail">text</p>
        </div>
      </li>
      <li className="info-item flex-1 last">
        <div>
          <h2 className="info-title">ISP</h2>
          {/* {information && <p className="info-detail">{information.isp}</p>} */}
          <p className="info-detail">text</p>
        </div>
      </li>
    </ul>
  );
};

export default Info;
