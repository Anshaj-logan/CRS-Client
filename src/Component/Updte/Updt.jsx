
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Updt = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate()
  const setRegister = (event) => {  
    console.log(event.target);
    const name = event.target.name;
    const value = event.target.value;   
    setInputs({...inputs, [name]: value });
    console.log(inputs);
  };
  const login_id = localStorage.getItem("loginId")
  useEffect(() => {
   
    axios
      .get(
        ` http://localhost:2000/api/student/view-student-profile/${login_id}`
      )
      .then((response) => {
        if (response.data.success === true) {
          setInputs(response.data.data);
        }
      });
  }, []);
  console.log("data", inputs);

  const registerSubmit = (event) => {
    event.preventDefault();
  
  //   setformErrors(validate(inputs))
  // setIssubmit(true)
  // if(Object.keys(formErrors).length === 0 && isSubmit){
    axios.post(`http://localhost:2000/api/student/update-user-profile/${login_id}`,inputs).then((data)=>{
      console.log(data);
      // console.log(data.response.data.message);
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
  <center><h3>Update your profile here</h3></center>

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
          onChange={setRegister}
          value={inputs.name||''}
          className="form-control"
          placeholder="Name"
          name="name"
        /></div>
        <br />
        
        <div className="col-sm-6">
        <input
          type="text"
          onChange={setRegister}
          value={inputs.department||''}
          className="form-control"
          placeholder="Department"
          name="department"
        />
        <br /></div>
        </div>
        <div className="row">
        <div className="col-sm-6">
        <input
          type="text"
          onChange={setRegister}
          value={inputs.email||''}
          className="form-control"
          placeholder="Email"
          name="email"
        /></div>
        <br />
        <div className="col-sm-6">
        <input
          type="text"
          onChange={setRegister}
          value={inputs.contact}
          className="form-control"
          placeholder="Contact"
          name="contact"
        /></div>
        </div>
        <br />



        <div className="row">
        <div className="col-sm-6">
        <input
          type="text"
          onChange={setRegister}
          value={inputs.sslc_score}
          className="form-control"
          placeholder="SSLC Score"
          name="sslc_score"
        /></div>
        <br />
        <div className="col-sm-6">
        <input
          type="text"
          onChange={setRegister}
          value={inputs.plustwo_score}
          className="form-control"
          placeholder="Plus Two Score"
        name="plustwo_score"
        /></div>
        </div>
      <br/>


      <div className="row">
        <div className="col-sm-6">
        <input
          type="text"
          onChange={setRegister}
          value={inputs.degree_score}
          className="form-control"
          placeholder="Degree Score "
         name="degree_score"
        /></div>
        <br />
        <div className="col-sm-6">
        <input
          type="text"
          onChange={setRegister}
          value={inputs.backlogs||''}
          className="form-control"
          placeholder="Number of Backlogse"
         name="backlogs"
        /></div>
        </div>
        <br />
        {/* <div className="row">
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
        /></div>
        
        </div> */}
        <br/>
        <div className="row">
        <p>
          <button type="submit" className="btn btn-success" id="upbtn">
            Update
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

export default Updt