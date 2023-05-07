import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Stdnav = () => {
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
        {/* <header className="main-header clearfix" role="header">
  <div className="logo">
  <img src="images/featured_channel.jpg" id="logo" />

    <a href="#">
      <em>KR's Sree Narayana </em> College
    </a>
  </div>
  
  <a href="#menu" className="menu-link">
    <i className="fa fa-bars" />
  </a>
  <nav id="menu" className="main-nav" role="navigation">
    <ul className="main-menu"> */}
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
      {/* <li>
        <a href="">
        <Link to={'/Student'}>
        Home
        </Link>
        </a>
      </li>
      <li>
        <a href="">
        <Link to={'/Updateprfl'}>
        Update
        </Link>
        </a>
      </li>
      <li>
        <a href="">
        <Link to={'/ViewNotification'}>
        View Notification
        </Link>
        </a>
      </li>
      <li>
        <a href="">
        <Link to={'/ViewCompany'}>
        View Company
        </Link>
        </a>
      </li>
      <li>
        <a href="">
        <Link to={'/applyforexam'}>
        Apply Exam
        </Link>
        </a>
      </li>
      <li>
        <a href="">
        <Link to={'/viewResult'}>
        View Result
        </Link>
        </a>
      </li>
    </ul>
  </nav>
</header> */}

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
        <a href="">
        <Link to={'/Student'}>
        Home
        </Link>
        </a>
      </li>
      <li>
        <a href="">
        <Link to={'/abc'}>
        Update
        </Link>
        </a>
      </li>
      <li>
        <a href="">
        <Link to={'/ViewNotification'}>
      Notification
        </Link>
        </a>
      </li>
      <li>
        <a href="">
        <Link to={'/ViewCompany'}>
        Company
        </Link>
        </a>
      </li>
      <li class="has-submenu"><a href="#section2">Exam</a>
          <ul class="sub-menu">
            <li><a href=""> <Link to={'/applyforexam'}>Apply Exam</Link></a></li>
            <li><a href=""> <Link to={'/viewResult'}> View Result</Link></a></li>
            
          </ul>
        </li>
        <li>
            <a className="nav-link scrollto"  onClick={logout} >
              Logout
            </a>
          </li>
      {/* <li>
        <a href="">
        <Link to={'/applyforexam'}>
        Exam
        </Link>
        </a>
      </li> */}
      {/* <li>
        <a href="">
        <Link to={'/viewResult'}>
      Result
        </Link>
        </a>
      </li> */}
      {/* <li class="has-submenu"><a href="#section2">Register</a>
          <ul class="sub-menu">
            <li><a href=""> <Link to={'/stdregistration'}>Student</Link></a></li>
            <li><a href=""> <Link to={'/registration'}> Company</Link></a></li>
            
          </ul>
        </li> */}
      
    </ul>
  </nav>
</header>

    </div>
    
  )
}

export default Stdnav