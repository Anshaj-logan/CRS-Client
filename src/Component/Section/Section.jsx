import React from 'react'

const Section = () => {
  return (
    <div id='pic' style={{ backgroundImage: "url(images/campus.jpg) "}}>
        <section className="section main-banner" id="top" data-section="section1">
  <video autoPlay="" muted="" loop="" id="bg-video">
    <img src="/images/pg.jpg"/>
  </video>
  <div className="video-overlay header-text">
    <div className="caption">
      <h2>
        <em>Campus</em> Recruitment <em>System</em>
      </h2>
      <h6>Get Your Dream job Today</h6>
      <div className="main-button">
        <div className="scroll-to-section">
          <a href=" ">Discover more</a>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Section