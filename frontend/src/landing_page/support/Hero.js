import React from "react";
function Hero() {
  return (
    <div className="container-fluid" id="supportHero">
      <div className=" p-3" id="supportWrapper">
        <h5>Support Portal</h5>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-6 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F& Q" /><br/>
          <a href="">Track account Opening</a>
          <a href="">Track segmanet activation</a>
          <a href="">Intraday Margins</a>
          <a href="">Kite user manual</a>
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              {" "}
              <a href="">MCX Option contracts expiry - April 2025</a>
            </li>
            <li>
              {" "}
              <a href="">MCX Base metals contract expiry - April 2025</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;
