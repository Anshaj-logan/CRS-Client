import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div style={{backgroundImage: "url(images/pg.jpg)"}}>
    <div className="container-fluid" id="log">
  <div className="row">
    
    <div className="col-sm-4">
      <h4>
        <br />
        Login
      </h4>
    </div>
    <div className="col-sm-4" />
  </div>
  <div className="row">
    <div className="col-sm-4" />
    <div className="form-group">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          required=""
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Password"
          required=""
        />
        <br />
        <p>
          <button type="button" className="btn btn-success">
            Login
          </button>
        </p>
        <br />
        <br />
      </form>
      <a href="">Forgot Password?</a>
    </div>
  </div>
</div>

        
    </div>
  )
}

export default Login