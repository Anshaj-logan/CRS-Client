import React from 'react'

const Update = () => {
  return (
    <div id='pic' style={{ backgroundImage: "url(images/reg.jpg) "}}>
        <section className="section main-banner" id="top" data-section="section1">
  <video autoPlay="" muted="" loop="">
    {/* <img src="/images/pg.jpg"/> */}
  </video>
  <div className="container-fluid" id="log">
  <center><h3>Add Notification</h3></center>

  <div className="row" >
    <div className="col-sm-4"/>
    <div className="col-sm-4" />
  </div>
     <div className="form-group" id="fm">
      <form>
        
        <br />
        <div className="row">
        <center><div className="col-sm-6">
        <input
          type="text"
          className="form-control"
          placeholder="Date"
          required=""
        /></div></center>
        <br />
        </div><br/>
        <div className="row">
        <center><div className="col-sm-6">
        <input
          type="text"
          className="form-control"
          placeholder="Notification"
          required=""
        /></div></center>
        <br />
        </div><br/>
        
        <div className="row">
        <p>
          <button type="button" className="btn btn-success" id="upbtn">
            Add
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

export default Update