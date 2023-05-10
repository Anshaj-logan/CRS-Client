import axios from "axios";
import React, { useEffect, useState } from "react";
import {toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Upstcmp = () => {
  const login_id = localStorage.getItem("loginId")
  const [inputs, setInputs] = useState({
    login_id:login_id
  });
  const setRegister = (event) => {  
    console.log(event.target);
    const name = event.target.name;
    const value = event.target.value;   
    setInputs({...inputs, [name]: value });
    console.log(inputs);
  };
  
  const registerSubmit = (event) => {
    event.preventDefault();
  
  //   setformErrors(validate(inputs))
  // setIssubmit(true)
  // if(Object.keys(formErrors).length === 0 && isSubmit){
    axios.post(`http://localhost:2000/api/company/upload-Post`,inputs).then((data)=>{
      console.log(data);
      setInputs({})
      window.location.reload()
      toast(data.data.message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      
     
    }).catch((err)=>{
      console.log(err);
      toast(err.response.data.message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    })
  
  };
  return (
    <div id='pic' style={{ backgroundImage: "url(images/reg.jpg) "}}>
        <section className="section main-banner" id="top" data-section="section1">
  <video autoPlay="" muted="" loop="">
    {/* <img src="/images/pg.jpg"/> */}
  </video>
  <div className="container-fluid" id="log">
  <center><h3>Post Upload</h3></center>

  <div className="row" >
    <div className="col-sm-4"/>
    <div className="col-sm-4" />
  </div>
     <div className="form-group" id="fm">
     <ToastContainer />
  <form onSubmit={registerSubmit}>
        
        <br />
        <div className="row">
        <div className="col-sm-6">
        <input
          type="text"
          className="form-control"
          placeholder="Job Title"
          name="job_title"
          onChange={setRegister}
        /></div>
        <br />
        
        <div className="col-sm-6">
        <textarea
        type="text"
        className="form-control"
        placeholder='Description'
        name="description"
          onChange={setRegister}
        rows={4} // Specify the number of rows you want to display
        cols={40} // Specify the number of columns you want to display
      />
        <br /></div>
        </div>
        <div className="row">
        <div className="col-sm-6">
        <input
          type="text"
          className="form-control"
          placeholder="No vaccancy"
          name="vacency"
          onChange={setRegister}
        />
       </div>
        <br />
        <div className="col-sm-6">
        <input
          type="text"
          className="form-control"
          placeholder="Email"
          name="email"
          onChange={setRegister}
        /></div>
        </div>
        <br />



        <div className="row">
        <div className="col-sm-6">
        <input
          type="text"
          className="form-control"
          placeholder="Package"
          name="package"
          onChange={setRegister}
          
        /></div>
        <br />
        <div className="col-sm-6">
        <input
          type="text"
          className="form-control"
          placeholder="Location"
          name="location"
          onChange={setRegister}
        /></div>
        </div>
      <br/>


      <div className="row">
        {/* <div className="col-sm-6">
        <input
          type="text"
          className="form-control"
          placeholder="Degree Score "
          required=""
        /></div> */}
        {/* <br /> */}
        {/* <div className="col-sm-6">
        <input
          type="text"
          className="form-control"
          placeholder="Number of Backlogse"
          required=""
        /></div> */}
        {/* </div>
        <br />
        <div className="row">
        <div className="col-sm-6">
        <input
          type="text"
          className="form-control"
          placeholder="Password "
          required=""
        /></div>
        <br />
        <div className="col-sm-6">
        <input
          type="text"
          className="form-control"
          placeholder="Confirm Password"
          required=""
        /></div> */}
        
        </div>
        <br/>
        <div className="row">
        <p>
          <button type="submit" className="btn btn-success" id="upbtn">
            Upload
          </button>
        </p>
        </div>
        
      </form>
    </div>
    </div>
    <br/>
    <br/>

    <br/>

   
  
</section>

</div>
  )
}

export default Upstcmp