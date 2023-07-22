import "./Weather.css";

const Weather = () => {
  return (
    <>
      {/* Search Bar */}
      <div className="container-fluid">
        <div className="row justify-content-center mt-3">
          <div className="col-md-8">
            <div className="input-group mb-3 ">
              <input
                type="text"
                className="form-control"
                placeholder="Search...."
                aria-label="Search"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-primary"
                type="button"
                id="button-addon2"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Weather-Card */}
      <div className="container border p-4 mt-3">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <p className="text-center" id="cloudIcon">
              <i className={"wi wi-day-sunny"}></i>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 bg-dark">
            <p className="text-center text-light" id="tempValue">
              28.57 &deg;
            </p>
          </div>
          <div className="col-md-6 bg-dark">
            <p className="text-center text-light" id="cloudtext">
              CLOUDS
              <p className="text-center fs-6 text text-light">Pune, IND</p>
            </p>
          </div>
          <div className="col-md-3 bg-warning">
            <p className="text-center fs-1 text text-light lh-5">
              {new Date().toLocaleString()}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 bg-success">
            <div className="row">
              <div className="col-md-1">
                <p>
                  <i className={"wi wi-day-cloudy"}></i>
                </p>
                <div className="col-md-2">Demo</div>
              </div>
            </div>
          </div>
          <div className="col-md-3 bg-primary">2</div>
          <div className="col-md-3 bg-danger">3</div>
          <div className="col-md-3 bg-secondary">4</div>
        </div>
      </div>
    </>
  );
};

export default Weather;
