import React from 'react'

const Stdaplyxm = () => {
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
     <div className="form-group" id="fm">
      <form>
        
        <br />
        <div className="row">
        
        <div><input
          type="text"
          className="form-control"
          placeholder="Name"
          required=""
        />
        </div>

        <div><input
          type="text"
          className="form-control"
          placeholder="Department"
          required=""
        />
        </div>
        
       
        </div>
        <div className="row">
        
        <div><input
          type="text"
          className="form-control"
          placeholder="Email"
          required=""
        /></div>
        
        
        
        <div>
        <input
          type="text"
          className="form-control"
          placeholder="Contact"
          required=""
        />
        </div>
       
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
        <p>
          <button type="button" className="btn btn-success" id="aplybtn">
            Apply
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

export default Stdaplyxm