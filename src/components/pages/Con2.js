import React from 'react'
import mock from '../assets/app-mockup.png';

const Con2 = () => {
    
    return (
    
        <section className="app-section">
        <div className="auto-container">
          <div className="row">
            {/* Image Box */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="image-box">
                  <figure className="image wow fadeInRight animated" style={{visibility: 'visible', animationName: 'fadeInRight'}}><img src={mock} alt="mock" /></figure>
                </div>
              </div>
            </div>
            {/* Content Box */}
            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="sec-title">
                  <h2>
                    <span style={{color: 'white'}}>21 Real Estate Mistakes That Make People
                      Lose Money In Property Investment.
                    </span>
                  </h2>
                </div>
                <div className="text-box">
                  <span style={{color: 'white'}}>Don't fall victim to landed property scam, demolition, third party claimant and other losses in Nigeria Real Estate.
                    <br /><br /></span>
                </div>
                <br />
                <div className="btn-box"><a href="realestatesmistakes" className="theme-btn btn-style-four"><span className="btn-title">Access Now</span></a></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Con2
