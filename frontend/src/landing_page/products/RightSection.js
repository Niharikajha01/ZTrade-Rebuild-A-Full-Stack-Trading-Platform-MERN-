import React from 'react';
function RightSection({  imageURL,
    productDescription,
    productName,
    learnMore}) {
    return ( 
        <div className="container">
        <div className="row">

  
          <div className="col-6 p-5 mt-5">
            <h1>{productName}</h1>
            <p>{productDescription}</p>
            <div>
              <a href={learnMore}>
                Learn More{" "}
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          <div className="col-6">
            {/* image src comes from a property */}
            <img src={imageURL} />
          </div>
        </div>
      </div>
     );
}

export default RightSection;