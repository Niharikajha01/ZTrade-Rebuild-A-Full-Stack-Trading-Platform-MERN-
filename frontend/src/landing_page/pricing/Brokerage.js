import React from 'react';
function Brokerage() {
    return ( 
        <div className="container">

        <div className="row p-5 mt-5 text-center border-top">
          <div className="col-8 p-4 ">
            <a href="" style={{textDecoration:"none"}}>
            <h3 className='fs-5'>Brokerage calculator</h3></a>
            <ul style={{textAlign:"left", lineHeight:"2.5"}} className='text-muted fs-6'>
               <li> Call & Trade and RMS auto-squareoff:additional charges + GST per order.</li>
                <li>Digital contrac notes will be sent via e-mail.</li>
                <li>Physical copies of contract notes ,if required, shall be charges.</li>
                
            </ul>
            

          </div>
          <div className="col-4 p-4">
            <a href="" style={{textDecoration:"none"}}><h3 className='fs-5'> List of charges</h3></a>
          </div>
        </div>
      </div>
     );
}

export default Brokerage;