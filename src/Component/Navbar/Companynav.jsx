import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Companynav = () => {
  const navigate = useNavigate()
  const logout = ()=>{
    localStorage.removeItem("name")
    localStorage.removeItem("loginId")
    localStorage.removeItem("role")
    localStorage.removeItem("student_id")
    navigate('/')

  }
  return (
    <div>
         <div>
        <header className="main-header clearfix" role="header">
  <div className="logo">
  <img src="images/featured_channel.jpg" id="logo" />

    <a href="#">
      <em>KR's Sree Narayana </em> College
    </a>
  </div>
  <a href="#"></a>
  <a href="#menu" className="menu-link">
    <i className="fa fa-bars" />
  </a>
  <nav id="menu" className="main-nav" role="navigation">
    <ul className="main-menu">
      {/* <li><a href="#section1">Home</a></li> */}
      {/* <li class="has-submenu"><a href="#section2">About Us</a> */}
      {/* <ul class="sub-menu">
      <li><a href="#section2">Who we are?</a></li>
      <li><a href="#section3">What we do?</a></li>
      <li><a href="#section3">How it works?</a></li> 
      <li><a href="https://templatemo.com/about" rel="sponsored" class="external">External URL</a></li>
    </ul> */}
      {/* <li><a href="#section4">Login</a></li> */}
      {/* <li><a href="#section5">Video</a></li> */}
      <li>
        <a href="/posupload">
       
       Upload Post
        
        </a>
      </li>
      {/* <li>
        <a href="">
        <Link to={'/uploadexam'}>
        Upload Exam
        </Link>
        </a>
      </li> */}
      
      {/* <li>
        <a href="">
        <Link to={'/scheduleintrvew'}>
        
      
        </Link>
        </a>
      </li> */}
      <li class="has-submenu"><a href=""> Schedule Event</a>
          <ul class="sub-menu">
          <li><a href=""> <Link to={'/uploadexam'}>Exam</Link></a></li>
            <li><a href=""> <Link to={'/Int'}>Interview</Link></a></li>
            
            
          </ul>
        </li>
      {/* <li>
        <a href="">
        <Link to={'/ntfcn'}>
        
       Notifications
        </Link>
        </a>
      </li> */}
      
      <li>
        <a href="">
        <Link to={'/uploadrslt'}>
        Upload Result
        </Link>
        </a>
      </li>
      <li>
            <a className="nav-link scrollto"  onClick={logout} >
              Logout
            </a>
          </li>
    </ul>
  </nav>
</header>

    </div>
    </div>
  )
}

export default Companynav