import React, { Fragment } from 'react';

import surv from '../../assets/land-verification.jpg';
import Fade from 'react-reveal/Fade';
import HeadShake from 'react-reveal/HeadShake';
import Con2 from '../Con2';
import Iframe from './Iframe';
import About from './About';
import Testimonials from './Testimonials';
import News from './News';
import LorR from '../LorR';
import Partner from "../../layouts/Partner/Partner"


const cutomTextStyle = {
  color: "white"
}


const Home = () => {






  return (
    <Fragment>
      <div className='newP'>
        <div className='beginning'>
          <div
            id='carouselExampleControls'
            className='carousel slide'
            data-ride='carousel'
            data-interval='6500'
          >


            <div className='carousel-inner'>
              <div className='auto-container'>
                <div className='carousel-item active'>
                  <div>
                    <HeadShake>
                      <h3 style={{ color: cutomTextStyle.color }}>We are</h3>
                    </HeadShake>
                    <Fade bottom>
                      <h2 style={{ color: cutomTextStyle.color }}>FloraHomes GC,</h2>
                      <p
                        style={{ color: cutomTextStyle.color }}
                      >
                        Foremost Online Property Verification & Real Estate
                        Investment Company.
                      </p>
                      <a href="/product" type='button' className='custom-btn btn btn-lg'>
                        Our Services
                      </a>
                    </Fade>
                  </div>
                </div>

                <div className='carousel-item'>
                  <div>
                    <HeadShake>
                      <h3 style={{ color: cutomTextStyle.color }} >Welcome to the world of</h3>
                    </HeadShake>
                    <Fade bottom>
                      <h2 style={{ color: cutomTextStyle.color }}>SECURE, STERLING &amp; SEAMLESS</h2>
                      <p style={{ color: cutomTextStyle.color }}>Services In Real Estate & Property Development</p>
                      <a href="/about"type ="button" className='custom-btn two btn btn-lg'>
                        About Us
                      </a>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
            <a
              className='carousel-control-prev control'
              href='#carouselExampleControls'
              role='button'
              data-slide='prev'
            >
              <span
                className='carousel-control-prev-icon'
                aria-hidden='true'
              ></span>
              <span className='sr-only'>Previous</span>
            </a>
            <a
              className='carousel-control-next control'
              href='#carouselExampleControls'
              role='button'
              data-slide='next'
            >
              <span
                className='carousel-control-next-icon'
                aria-hidden='true'
              ></span>
              <span className='sr-only'>Next</span>
            </a>
          </div>
        </div>


<Partner/>

        <section className="about-section-two">
          <div className="anim-icons full-width">
            <span className="icon icon-circle-blue wow fadeIn" style={{ visibility: 'hidden', animationName: 'none' }} />
            <span className="icon icon-dots wow fadeInleft animated" style={{ visibility: 'visible', animationName: 'fadeInLeft' }} />
            <span className="icon icon-circle-1 wow zoomIn animated" style={{ visibility: 'visible', animationName: 'zoomIn' }} />
          </div>
          <div className="auto-container">
            <div className="row">
              {/* Content Column */}
              <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                <div className="inner-column">
                  <div className="sec-title">
                    <span className="title">WHY WE GET</span>
                    <h2>Our Hands Dirty For You</h2>
                    <div className="text">
                      <h5> To Prevent Real Estate Losses by running end-to-end property verification
                on every subject property before you pay for them, one property at a time.</h5>
                   <br/>

                   <p className="text">
                When our certified professionals that include Estate Surveyors &
                Valuers, Land Surveyors, Property Lawyers, Townplanners,
                Civil Engineers, Architects, Builders, Journalists,
                Quantity Surveyors, Researchers etc. take your interest land
                or building through our verification checklist before you pay
                for it, then be assured that you've been indemnified against
                eviction, demolition, 3rd party claimants, scam, collapse and
                any other form of property losses anywhere across Nigeria.
              </p>
                   
                    </div>
                  </div>
                </div>
              </div>
              {/* Image Column */}
              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="image-box">
                  <figure className="image wow fadeIn animated" style={{ visibility: 'visible', animationName: 'fadeIn' }}><img src={surv} alt="" /></figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Con2 />

        <section className="features-section-three">
          <div className="auto-container">
            <div className="content-column">
              <div className="sec-title text-center">
                <span className="title">PRODUCTS</span>
                <h2>Services we Render</h2>
              </div>
              <div className="row">
                {/* Feature Block */}
                <div className="feature-block-three col-lg-6 col-md-12 col-sm-12 wow fadeInUp animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                  <div className="inner-box">
                    <div className="icon-box"><span className="icon flaticon-search" /></div>
                    <h4>Verification Service</h4>
                    <div className="text">
                      <span style={{ color: 'black' }}>Due to the prevalence of demolition, eviction, dispute and scam
                    issues relating to landed properties, we set out to help
                    individuals and corporate investors to verify and clear their
                    subject of interest either before paying for the new found property
                    or for already existing property against government acquisition,
                    title issues, ownership issues, Omo-Onile wahala, uses issues,
                    dispute, third party claimants, structural defects etc.
                    This we achieve by taking such properties through our systemised verification checklist.</span>
                    </div>
                    <div className="link-box"><a href="/verification" className="theme-btn"><span className="fa fa-angle-right" /></a></div>
                  </div>
                </div>
                {/* Feature Block */}
                <div className="feature-block-three col-lg-6 col-md-12 col-sm-12 wow fadeInUp animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                  <div className="inner-box">
                    <div className="icon-box"><span className="icon flaticon-home" /></div>
                    <h4>Complete Property Buyer Services</h4>
                    <div className="text">
                      <span style={{ color: 'black' }}> Our property acquisition team is always available and ready to
                    help prospective property buyers handle their property purchase
                    from start to finish at 100% done-for-you either land or building,
                    within Estate or with Omo-Onile, for individual or corporate large
                    expanse across Nigeria. This involves supervising and executing
                    property transactions through all the 7 stages of property purchase:
                    Sourcing, Verification, Valuation, Negotiation, Payment, Survey, and Documentation.</span>
                    </div>
                    <div className="link-box"><a href="/cpbs" className="theme-btn"><i class="fas fa-angle-right"></i></a></div>
                  </div>
                </div>
                <div className="container">
                  <div className="text-center"><br /><br />
                    <div className="btn-box"><a href="/products" className="theme-btn btn-style-three"><span className="btn-title">View All Products</span></a><span className="ripple" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <div className='sec2'>
          <h2 className='text-center'>WHAT WE STAND FOR</h2>
          <div className='embed-responsive embed-responsive-16by9'>
            <iframe
              id='inlineFrameExample'
              title='FloraHomeGC Intro Video'
              loading='lazy'
              className='embed-responsive-item'
              width='560'
              height='315'
              src='https://www.youtube.com/embed/gkAYHJvo8as?autoplay=1&mute=1'
              allowFullScreen
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            ></iframe>
          </div>
        </div> */}

        <Iframe src="https://www.youtube.com/embed/gkAYHJvo8as?autoplay=1&mute=1" />



        {/* <div className='sec3'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm'>
                <h4>PURPOSE</h4>
                <h2>our promise to you</h2>
                <h5>We help you prevent real estate losses by;</h5>
             
                <ol >
                  <li className='noB' style={{listStyleType:listStyle.listStyleType}}>
                    Running end-to-end property verification on every
                    subject property before you pay for them,
                    one property at a time.

                  </li>
                  <li className='noB' style={{listStyleType:listStyle.listStyleType}}>
                    Providing 100% done-for-you real estate and property development
                    services to existing and aspiring property investors.
                  </li>
                  <li className='noB' style={{listStyleType:listStyle.listStyleType}}>
                    Making verified and futuristic properties accessible to every individual and corporate investors.
                  </li>
                  <li className='noB'style={{listStyleType:listStyle.listStyleType}}>
                    Delivering simplified quality information to the
                    mobile phones of every property investor using technology.
                  </li>
                </ol>
                <button type='button' className='custom-btn btn btn-lg'>
                  Learn More...
                </button>
              </div>
              <div className='col-sm'>
                <div className='clipBorder'>
                  <img src={workers} alt='workers' />
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <About />

        <Testimonials />
        <News />

        <div className='sec6'></div>
      </div>

      <LorR />
    </Fragment>
  );
};

export default Home;
