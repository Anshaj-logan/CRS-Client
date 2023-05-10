import axios from "axios";
import React, { useEffect, useState } from "react";
import {toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShIntrvw = () => {
  const login_id = localStorage.getItem("loginId")
  const [inputs, setInputs] = useState({
    login_id:login_id
  });
  const [selectedDate, setSelectedDate] = useState('');
  const [user, setuser] = useState([]);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  const [selectedTime, setSelectedTime] = useState('');

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };
  useEffect(() => {
   
    axios
      .get(
        ` http://localhost:2000/api/company/view-User`
      )
      .then((response) => {
        if (response.data.success === true) {
          setuser(response.data.data);
        }
      });
  }, []);
  console.log("data", inputs,user);
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
    axios.post(`http://localhost:2000/api/company/upload-interview`,inputs).then((data)=>{
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
  <center><h3>Upload InterView</h3></center>

  <div className="row" >
    <div className="col-sm-9"/>
    <div className="col-sm-9" />
  </div>
     <div className="form-group" id="fm">
     <ToastContainer />
  <form onSubmit={registerSubmit} >
        
        <br />
       
        <div className="row">
        <center><div className="col-sm-9">
        <select name="user_id" id=""  className="form-control" style={{width:"10rem"}} onChange={setRegister} >
         
         <option value="">select</option>
         {user.map((data,key)=>(
         <option value={data._id}> {data.name}    </option>
         ))}
       </select></div></center>
        <br />
        </div><br/>
        <div className="row">
        <center><div className="col-sm-9">
        <label htmlFor="dateInput" style={{color:"white",marginRight:"10rem"}}>Select a date:</label>
        <input
        name="date"
        type="date"
        id="dateInput"
        
        onChange={setRegister}
      />

      {/* <p style={{color:"white"}}>Selected date: {setRegister}</p> */}
      </div></center>
        <br />
        </div><br/>
        
        <div className="row">
        <center><div className="col-sm-9">
        <label htmlFor="timeInput" style={{color:"white",marginRight:"10rem"}}>Select a time:</label>
      <input
      name="time"
        type="time"
        id="timeInput"
       
        onChange={setRegister}
      />

      {/* <p style={{color:"white"}}>Selected time: {setRegister}</p> */}
      </div></center>
        <br />
        </div><br/>
        <div className="row">
        <center><div className="col-sm-9">
        <input
        name="link"
          type="text"
          className="form-control"
          placeholder="Link URL"
          onChange={setRegister}
          
        /></div></center>
        <br />
        </div><br/>
        {/* <div className="row">
        <center><div className="col-sm-9">
        <input
          type="text"
          className="form-control"
          placeholder="Experience"
          required=""
        /></div></center>
        <br />
        </div>
       <br /> */}
       <div className="row">
        <p style={{width:"10rem",marginLeft:"10rem"}}>
          <button type="submit" className="btn btn-success" >
            POST
          </button>
        </p>
        </div>
        
      </form>
    </div>
    </div>
    <br/>
    <br/>
  
</section>

</div>
  )
}

export default ShIntrvw