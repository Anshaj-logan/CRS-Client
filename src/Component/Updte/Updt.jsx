import React from 'react'

const Updt = () => {
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
      <form>
        
        <br />
        <div className="row">
        <div className="col-sm-6">
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          required=""
        /></div>
        <br />
        
        <div className="col-sm-6">
        <input
          type="text"
          className="form-control"
          placeholder="Department"
          required=""
        />
        <br /></div>
        </div>
        <div className="row">
        <div className="col-sm-6">
        <input
          type="text"
          className="form-control"
          placeholder="Email"
          required=""
        /></div>
        <br />
        <div className="col-sm-6">
        <input
          type="text"
          className="form-control"
          placeholder="Contact"
          required=""
        /></div>
        </div>
        <br />



        <div className="row">
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
        </div>
      <br/>


      <div className="row">
        <div className="col-sm-6">
        <input
          type="text"
          className="form-control"
          placeholder="Degree Score "
          required=""
        /></div>
        <br />
        <div className="col-sm-6">
        <input
          type="text"
          className="form-control"
          placeholder="Number of Backlogse"
          required=""
        /></div>
        </div>
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
        /></div>
        
        </div>
        <br/>
        <div className="row">
        <p>
          <button type="button" className="btn btn-success" id="upbtn">
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