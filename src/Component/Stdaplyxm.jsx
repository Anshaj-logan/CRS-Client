
import axios from "axios";
import React, { useEffect, useState } from "react";
import {toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Stdaplyxm = () => {
  const login_id = localStorage.getItem("loginId")
  const [inputs, setInputs] = useState({
    login_id:login_id
  });
  const [company, setcompny] = useState([]);
  console.log(inputs);
 
  useEffect(() => {
   
    axios
      .get(
        ` http://localhost:2000/api/company/view-post`
      )
      .then((response) => {
        if (response.data.success === true) {
          setcompny(response.data.data);
        }
      });
  }, []);
  console.log("data", inputs);
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
    axios.post(`http://localhost:2000/api/student/apply-exam`,inputs).then((data)=>{
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
  <div className="container-fluid" id="lg">
  <center><h3>Apply for Exam</h3></center>

  <div className="row" >
    <div className="col-sm-4"/>
    <div className="col-sm-4" />
  </div>
  {/* <center> */}
     <div className="form-group" id="apply">
     <ToastContainer />
  <form onSubmit={registerSubmit}>
        
        <br />
        
        
        <div>
          <select name="post_id" id=""  className="form-control" style={{width:"10rem"}} onChange={setRegister} >
         
            <option value="">select</option>
            {company.map((data,key)=>(
            <option value={data._id}> {data.company_name} - {data.job_title}   </option>
            ))}
          </select>
        </div>
        <br />
        <div><input
          type="text"
          className="form-control"
          placeholder="Name"
          name="name"
          onChange={setRegister}
        />
        </div>
        <br />

        <div><input
          type="text"
          className="form-control"
          placeholder="Department"
          name="department"
          onChange={setRegister}
        />
        </div>
        <br />
        
       
        
        
        
        <div><input
          type="text"
          className="form-control"
          placeholder="Email"
          name="email"
          onChange={setRegister}
        /></div>
        <br />
        
        
        
        <div>
        <input
          type="text"
          className="form-control"
          placeholder="Contact"
          name="contact"
          onChange={setRegister}
        />
        </div>
       
        
        <br />



        {/* <div className="row">
        <div className="col-sm-6">
        <input
          type="text"
          className="form-control"
          placeholder="SSLC Score"
          required=""
        /></div>
        <br />
        <div className="col-sm-6">
        <input
          type="text"
          className="form-control"
          placeholder="Plus Two Score"
          required=""
        /></div>
        </div> */}
      <br/>


     
        <br/>
        <div className="row">
        <p style={{width:"50%"}}>
          <button type="submit" className="btn btn-success" >
            Apply
          </button>
        </p>
        </div>
        
      </form>
    </div>
    {/* </center> */}
    </div>
    <br/>
    <br/>

    <br/>

   
  
</section>

</div>
  )
}

export default Stdaplyxm