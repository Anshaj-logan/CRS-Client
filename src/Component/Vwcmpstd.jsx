
import axios from "axios";
import React, { useEffect, useState } from "react";

const Vwcmpstd = () => {
  const [inputs, setInputs] = useState([]);
  useEffect(() => {
   
    axios
      .get(
        ` http://localhost:2000/api/company/view-company`
      )
      .then((response) => {
        if (response.data.success === true) {
          setInputs(response.data.data);
        }
      });
  }, []);
  console.log("data", inputs);
  return (
    
      <div>
        <div id="Vwcmpny"
        // style={{ background:""}}
        >
            <br/>
            <br/>
             <br/>
              <br/>
              <br/>
            <br/>
            <div className="section-title">
          {/* <h2>
         <span>Donation</span>
          </h2> */}
        </div>
        <center>
        <div className="col-md-9">
          <div className="tile">
            <div className="tile-body">
              <div className="table-responsive">
             
                <table className="table table-hover table-bordered" id="sampleTable">
                  <thead>
                    <tr>
                      <th>Company Name</th>
                      <th>Established</th>
                      <th>Email</th>
                      <th>Contact</th>
                      <th>Location</th>
                    </tr>
                  </thead>
                  <tbody>
                  {inputs.map((data,key)=>(
                    <tr>
                    <td>{data.company_name}</td>
                    <td>{data.established}</td>
                    <td>{data.email}</td>
                    <td>{data.contact}</td>
                    <td>{data.location}</td>
                    </tr>
                    
                    
                     ))}
                  </tbody>
                </table>
              </div>
              
            </div>
          </div>
        </div></center>
      </div>
    </div>  
    
  )
}

export default Vwcmpstd