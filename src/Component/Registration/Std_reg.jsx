import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import {toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Std_reg = () => {
  const [inputs, setInputs] = useState({
    
    name:"",
    phone_no:"",
    email:"",
    department:"",
    username: "",
    password: "",
    contact:"",
    sslc_score:"",
    plustwo_score:"",
    degree_score:"",
    backlog:"",
    cnf_password:"",
  });
  const [formErrors, setformErrors] = useState({})
  const [isSubmit, setIssubmit] = useState(false)
  const [passwordMatch, setPasswordMatch] = useState(true);

  

  const validate = (values)=>{
    var error = {}
    if(!values.username){
      error.username ="Enter Username"
    }
    if(!values.password){
      error.password ="Enter Password"
    }
    if(!values.name){
      error.name ="Enter Your Name"
    }
   
    if(!values.email){
      error.email ="Enter Your Email"
    }
    if(!values.contact){
      error.contact ="Enter Contact"
    }
    if(!values.department){
      error.department ="Enter Deapartment"
    }
    if(!values.sslc_score){
      error.sslc_score ="Enter SSLC score"
    }
    if(!values.plustwo_score){
      error.plustwo_score ="Enter Plus two score"
    }
    if(!values.degree_score){
      error.degree_score ="Enter Degree Score"
    }
    if(!values.backlog){
      error.backlog ="Enter Backlogs"
    }
    if(!values.cnf_password){
      error.cnf_password ="Enter Password"
    }
   
    return error
  }



    const setRegister = (event) => {
  
      const name = event.target.name;
      const value = event.target.value;   
      setInputs({...inputs, [name]: value });
      console.log(inputs);
    };
  
    const registerSubmit = (event) => {
      event.preventDefault();
      if (inputs.password === inputs.cnf_password) {
        // Passwords match, do something (e.g., submit form)
        setPasswordMatch(true);
      } else {
        // Passwords don't match, display an error message
        setPasswordMatch(false);
      }
      setformErrors(validate(inputs))
    setIssubmit(true)
    if(Object.keys(formErrors).length === 0 && isSubmit){
      axios.post('http://localhost:2000/api/register/student',inputs).then((data)=>{
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
    }
    };
  return (
    <div style={{backgroundImage: "url(images/reg.jpg)"}}>

        <div className="container-fluid" id="log">
  <div className="row">
    <div className="col-sm-4"></div>
    <div class="col-sm-4"><h4>Registration</h4></div>
    <div className="col-sm-4" />
  </div>
  <div className="row">
    <div className="col-sm-4" />
    <div className="form-group">
    <ToastContainer />
  <form onSubmit={registerSubmit}>
        <br />
        <span style={{color:"red"}} > {formErrors.name? formErrors.name :""}</span>
        <input
        name="name"
        value={inputs.name || ""}
        onChange={setRegister} 
        onClick={()=>{setformErrors({...formErrors,name:""})}}
          type="text"
          className="form-control"
          placeholder="Name"
          
        />
        <br />
        <span style={{color:"red"}} > {formErrors.department? formErrors.department :""}</span>
        <input
        name="department"
        value={inputs.department || ""}
        onChange={setRegister} 
        onClick={()=>{setformErrors({...formErrors,department:""})}}
          type="text"
          className="form-control"
          placeholder="Department"
          
        />
        <br />
        <span style={{color:"red"}} > {formErrors.email? formErrors.email :""}</span>
        <input
        name="email"
        value={inputs.email || ""}
        onChange={setRegister} 
        onClick={()=>{setformErrors({...formErrors,email:""})}}
          type="text"
          className="form-control"
          placeholder="Email"
          
        />
        <br />
        <span style={{color:"red"}} > {formErrors.contact? formErrors.contact :""}</span>
        <input
        name="contact"
        value={inputs.contact || ""}
        onChange={setRegister} 
        onClick={()=>{setformErrors({...formErrors,contact:""})}}
          type="text"
          className="form-control"
          placeholder="Contact"
          
        />
        <br />
        <span style={{color:"red"}} > {formErrors.sslc_score? formErrors.sslc_score :""}</span>
        <input
        name="sslc_score"
        value={inputs.sslc_score || ""}
        onChange={setRegister} 
        onClick={()=>{setformErrors({...formErrors,sslc_score:""})}}
          type="text"
          className="form-control"
          placeholder="SSLC Score"
          
        />
        <br />
        <span style={{color:"red"}} > {formErrors.plustwo_score? formErrors.plustwo_score :""}</span>
        <input
        name="plustwo_score"
        value={inputs.plustwo_score || ""}
        onChange={setRegister} 
        onClick={()=>{setformErrors({...formErrors,plustwo_score:""})}}
          type="text"
          className="form-control"
          placeholder="Plus Two Score"
          
        />
        <br />
        <span style={{color:"red"}} > {formErrors.degree_score? formErrors.degree_score :""}</span>
        <input
        name="degree_score"
        value={inputs.degree_score || ""}
        onChange={setRegister} 
        onClick={()=>{setformErrors({...formErrors,degree_score:""})}}
          type="text"
          className="form-control"
          placeholder="Degree Score"
          
        />
        <br />
        <span style={{color:"red"}} > {formErrors.backlog? formErrors.backlog :""}</span>
        <input
        name="backlog"
        value={inputs.backlog || ""}
        onChange={setRegister} 
        onClick={()=>{setformErrors({...formErrors,backlog:""})}}
          type="text"
          className="form-control"
          placeholder="Number of Backlogs"
          
        />
        <br />
        <span style={{color:"red"}} > {formErrors.username? formErrors.username :""}</span>
        <input
        name="username"
        value={inputs.username || ""}
        onChange={setRegister} 
        onClick={()=>{setformErrors({...formErrors,username:""})}}
          type="text"
          className="form-control"
          placeholder="UserName"
          
        />
         <br />
        <span style={{color:"red"}} > {formErrors.password? formErrors.password :""}</span>
        <input
        name="password"
        value={inputs.password || ""}
        onChange={setRegister} 
        onClick={()=>{setformErrors({...formErrors,password:""})}}
          type="text"
          className="form-control"
          placeholder="Password"
          
        />
        <br />
        <span style={{color:"red"}} > {formErrors.cnf_password? formErrors.cnf_password :""}</span>
        <input
        name="cnf_password"
        value={inputs.cnf_password || ""}
        onChange={setRegister} 
        onClick={()=>{setformErrors({...formErrors,cnf_password:""});setPasswordMatch(true)}}
          type="text"
          className="form-control"
          placeholder="Confirm Password"


          
        />
         {!passwordMatch && <p style={{color:"red"}}>Passwords do not match</p>}
        <br />
        <p>
          <button type="submit" className="btn btn-success">
            REGISTER
          </button>
        </p>
      </form>
    </div>
  </div>
</div>

    </div>
  )
}

export default Std_reg