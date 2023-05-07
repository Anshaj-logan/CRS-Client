import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import {toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [inputs, setInputs] = useState({
    
    company_name:"",
   
    email:"",
    
    username: "",
    password: "",
    contact:"",
    established:"",
    location:"",
    
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
    if(!values.company_name){
      error.company_name ="Enter Company Name"
    }
    if(!values.established){
      error.established ="Enter Established Year"
    }
    if(!values.email){
      error.email ="Enter Your Email"
    }
    if(!values.contact){
      error.contact ="Enter Contact"
    }
    if(!values.location){
      error.location ="Enter Location"
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
      console.log(inputs);
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
      axios.post('http://localhost:2000/api/register/company',inputs).then((data)=>{
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
        <span style={{color:"red"}} > {formErrors.company_name? formErrors.company_name :""}</span>
        <input
        name="company_name"
        value={inputs.company_name || ""}
        onChange={setRegister} 
        onClick={()=>{setformErrors({...formErrors,company_name:""})}}
          
          type="text"
          className="form-control"
          placeholder="Company Name"
          
        />
        <br />
        <span style={{color:"red"}} > {formErrors.established? formErrors.established :""}</span>
        <input
        name="established"
        value={inputs.established || ""}
        onChange={setRegister} 
        onClick={()=>{setformErrors({...formErrors,established:""})}}
          type="text"
          className="form-control"
          placeholder="Established"
          
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
        <span style={{color:"red"}} > {formErrors.location? formErrors.location :""}</span>
        <input
        name="location"
        value={inputs.location || ""}
        onChange={setRegister} 
        onClick={()=>{setformErrors({...formErrors,location:""})}}
          type="text"
          className="form-control"
          placeholder=" Location"
          
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
          placeholder="Username"
          
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
        onClick={()=>{setformErrors({...formErrors,cnf_password:""});setPasswordMatch(true)} }
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

export default Register