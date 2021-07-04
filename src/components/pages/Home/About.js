import React from 'react';


import workers from "../../assets/workers.jpg"
const About = () => {
    return (
        <section className="about-section">
        <div className="anim-icons full-width">
          <span className="icon icon-circle-blue wow fadeIn animated" style={{visibility: 'visible', animationName: 'fa-spin'}} />
          <span className="icon icon-dots wow fadeInleft animated" style={{visibility: 'visible', animationName: 'fadeInLeft'}} />
          <span className="icon icon-circle-1 wow zoomIn animated" style={{visibility: 'visible', animationName: 'zoomIn'}} />
        </div>
        <div className="auto-container">
          <div className="row">
            {/* Content Column */}
            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="title">PURPOSE</span>
                  <h2>Our Promise To You</h2>
                  <br/>
                  <h5>We help you prevent real estate losses by;</h5>
                  <div className="text">
                    <ul className="list-style-two">
                      <li> Running end-to-end property verification on every
                    subject property before you pay for them,
                    one property at a time.
</li>
                      <li> Providing 100% done-for-you real estate and property development
                    services to existing and aspiring property investors.</li>
                      <li> Making verified and futuristic properties accessible to every individual and corporate investors.</li>
                      <li>Delivering simplified quality information to the mobile phones of every property investor using technology.</li>
                    </ul>
                  </div>
                </div>
                <div className="btn-box"><a href="about.php" className="theme-btn btn-style-three"><span className="btn-title">Learn more...</span></a></div>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="image-box">
                <figure className="image wow fadeIn animated" style={{visibility: 'visible', animationName: 'fadeIn'}}><img src={workers} alt="FHGC Project Planning" /></figure>
              </div>
            </div>
          </div>
        </div>    
      </section>

    );
}

export default About;
