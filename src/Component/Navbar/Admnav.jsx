import React from 'react'
import { Link } from 'react-router-dom'
const Admnav = () => {
  return (
    <div>
         <div >
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
        <Link to={'/login'}>
        Approve Student
        </Link>
        </a>
      </li>
      <li>
        <a href="">
        <Link to={'/registration'}>
        Approve Company
        </Link>
        </a>
      </li>
      <li>
        <a href="">
        <Link to={'/registration'}>
        Upload Event
        </Link>
        </a>
      </li>
      
      <li>
        <a href="">
        <Link to={'/registration'}>
        View Result
        </Link>
        </a>
      </li>
    </ul>
  </nav>
</header>

    </div>
    </div>
  )
}

export default Admnav