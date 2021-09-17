import React from 'react';

import "../../css/DesignAndManage.css"
import workers from "../assets/workers.jpg"
import optin_bg from "../assets/optin-bg.jpg"
import background9 from "../assets/background9.jpg"
import business from "../assets/business.jpg"
import sub from "../assets/sub.png"
const DesignAndManage = () => {
    return (
        <div>
        <section className="banner-meetup">
          <div className="bg-pattern" style={{backgroundImage: `url(${optin_bg})`}} />
          <div className="layer-outer">
            <div className="gradient-layer" />
          </div>
          <div className="auto-container">
            <div className="content-box">
              <div className="address" />
              <h2>Design Build and Manage</h2>
            </div>
            {/* <div class="btn-box">
                <a href="CPBS-form.php" class="theme-btn btn-style-two"><span class="btn-title">View Properties</span></a>
            </div> */}
          </div>
        </section>
        {/*End Banner Meetup */}
        {/* About Section */}
        <section className="about-section-two">
          <div className="anim-icons full-width">
            <span className="icon icon-circle-blue wow fadeIn" />
            <span className="icon icon-dots wow fadeInleft" />
            <span className="icon icon-circle-1 wow zoomIn" />
          </div>
          <div className="auto-container">
            <div className="row">
              {/* Content Column */}
              <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                <div className="inner-column">
                  <div className="sec-title">
                    <h2>Design Build and Manage</h2>
                    <br /><br /><br />
                    {/* <span class="title">Sell your property profitably with ease</span> */}
                    <div className="text">
                      <p>
                        Due to the high rise in property losses and scam, we pride ourselves as the
                        solution to preventing real estate and property development losses.
                        We are <a href="/" className="btn-box">FloraHomes Global Consult Limited</a>,
                        a Property Verification, Real Estate and Property Development Company.
                        <br />
                      </p>
                      <p>
                        Our Design, Build and Manage service covers a 100% Done-For-You work in terms of
                        architectural design &amp; its complete working drawing, visualization, documentation,
                        building, finishing and/or managing.
                      </p>
                      <p>
                        Client has the option of either choosing from our existing uniquely designed models so that he can point to
                        specific modifications in order to meet the desired class, or we can create another
                        design according to client’s specifications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Image Column */}
              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="image-box imgBox">
                  <img src={workers} height="100%" alt="Overview" className="imgBox-img" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End About Section */}
        {/* Cases of Lose Types */}
        {/* <section class="speaker-detail">
        <div class="auto-container">
				
			
           
			
			
			
			<div class="row">				
				<div class="info-column col-lg-5 col-md-12 col-sm-12">
                    <div class="inner-column">
						<div class="text-box">
							<p>
                            </p>
							                           
						</div>
						<div class="btn-box"><a href="CPBS-form.php" class="theme-btn btn-style-three"><span class="btn-title">View Listing</span></a></div>
                    </div>
                </div>
				<div class="image-column col-lg-7 col-md-12 col-sm-12">
                    <div class="content-box">
						<figure class="image"><iframe width="650" height="402" src="https://www.youtube.com/embed/IJgBOZWF8OM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope" allowfullscreen></iframe></figure>
                    </div>
                </div>
            </div>
			
        </div>
    </section> */}
        {/*End Cases of Lose Types */}
        {/* Advantages Section */}
        <section className="affiliate-section" style={{backgroundImage:  `url(${background9})`}}>
          <div className="auto-container">
            <div className="content-column">
              <div className="inner-column">
                <div className="sec-title">
                  <div className="text">ADVANTAGES OF ENGAGING</div>
                  <h2>OUR DBM SERVICE.</h2>
                </div>
                <div className="row">
                  {/* Bullet Listing Column */}
                  <div className="affiliate-block col-lg-6 col-md-12">
                    <ul className="list-style-one">
                      <li>We're insured.</li>
                      <li>We let only qualified Design and Building professionals handle your project at great value for less.</li>
                      <li>Everything is done for you 100% according to your desired taste.</li>
                      <li>You have time to face other stuff that matters to you.</li>
                      <li>You get a 1 year post service warranty certificate.</li>
                    </ul>
                  </div>
                  {/* Bullet Listing Column */}
                  <div className="affiliate-block col-lg-6 col-md-12">
                    <ul className="list-style-one">
                      <li>Your work is done timely and efficiently</li>
                      <li>You can engage this service from any location in the world.</li>
                      <li>We ensure optimal privacy and confidentiality in our delivery to the client.</li>
                      <li>Our trained workforce delivers truthfully and competently. </li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="container">
                    <div className="text-center">
                      <div className="btn-box"><a href="https://bit.ly/dbmform" className="theme-btn btn-style-four"><span className="btn-title">Engage Service</span></a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Advantages Section */}
        {/* Engage Process Section */}
        <section className="schedule-section">
          <div className="anim-icons">
            <span className="icon icon-circle-4 wow zoomIn" />
            <span className="icon icon-circle-3 wow zoomIn" />
          </div>
          <div className="auto-container">
            <div className="sec-title text-center">
              <span className="title">HOW TO</span>
              <h2>Engage Our Design, Build and Manage Service</h2>
            </div>
            <div className="schedule-tabs tabs-box">
              <div className="tabs-content">
                {/*Tab*/}
                <div className="tab active-tab" id="tab-1">
                  <div className="schedule-timeline">
                    {/* schedule Block */}
                    <div className="schedule-block">
                      <div className="inner-box">
                        <div className="inner">
                          <div className="date">1ST <br /> STEP</div>
                          <h4>Click Button</h4>
                          <div className="text" style={{color: '#000000'}}>Enter your service brief by either filling this online Google form
                            <a href="https://bit.ly/dbmform" className="btn-box">Engage Service</a>
                            or get our print out here to be filled and scanned back <a href="https://bit.ly/dbmform" className="btn-box">https://bit.ly/DBM-PDFFORM</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* schedule Block */}
                    <div className="schedule-block even">
                      <div className="inner-box">
                        <div className="inner">
                          <div className="date">2ND <br /> STEP</div>
                          <h4>Review</h4>
                          <div className="text" style={{color: '#000000'}}>
                            Receive a vetting review of approval/disapproval
                            that tells if your request is obtainable or not.
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* schedule Block */}
                    <div className="schedule-block">
                      <div className="inner-box">
                        <div className="inner">
                          <div className="date">3RD <br /> STEP</div>
                          <h4>Payment</h4>
                          <div className="text" style={{color: '#000000'}}>
                            For approved brief, receive your invoice according to service option and make your first tranche payment depending on project category.
                            <ul className="list-style-two">
                              <li> Refundable commitment fee of N1,000,000 for complete DBM project or renovation.</li>
                              <li>70% of Bill received for other projects category.</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* schedule Block */}
                    <div className="schedule-block even">
                      <div className="inner-box">
                        <div className="inner">
                          <div className="date">4TH <br /> STEP</div>
                          <h4>Customer Care</h4>
                          <div className="text" style={{color: '#000000'}}>
                            Connect with your personal customer care manager.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br /><br />
            <div className="row">
              <div className="container">
                <div className="text-center">
                  {/* <div class="btn-box"><a href="product-smp/login.php" class="theme-btn btn-style-three"><span class="btn-title">View Properties Listing Now</span></a></div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="affiliate-section" style={{backgroundImage:  `url(${background9})`}}>
          <div className="auto-container">
            <div className="content-column">
              <div className="inner-column">
                <div className="sec-title">
                  <div className="text">COMPLETE DBM PROCESS</div>
                  {/* <h2>OUR DBM SERVICE.</h2> */}
                </div>
                <div className="row">
                  {/* Bullet Listing Column */}
                  <div className="affiliate-block col-lg-6 col-md-12">
                    <ul className="list-style-one">
                      <li>Inspecting site and receiving sketches between 5-7 working days after connecting with your personal manager.</li>
                      <li>Company completes detailed drawings including mechanical, electrical and structural drawings - 3 weeks after design approval.</li>
                      <li>Receive BOQ and Make payment of 70% total cost (less the initial N1,000,000/$3000/£2500)</li>
                      <li>Documents processing begins followed by site work</li>
                    </ul>
                  </div>
                  {/* Bullet Listing Column */}
                  <div className="affiliate-block col-lg-6 col-md-12">
                    <ul className="list-style-one">
                      <li>Receive intermittent project progress update from your care manager.</li>
                      <li>At project Midway, make a payment of 25% of total cost.</li>
                      <li>At completion, receive the complete update, 1 year warranty certificate and all other documents.</li>
                      <li>Within 2 weeks after project completion, client makes payment of the remaining 5% balance.</li>
                    </ul>
                  </div>
                  <div className="sec-title">
                    <div className="text">OTHER PROJECT PROCESS</div>
                  </div>
                  <div className="affiliate-block col-md-12 col-md-12">
                    <ul className="list-style-one">
                      <li>Customer receives project update from personal manager.</li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="container">
                    <div className="text-center">
                      <div className="btn-box"><a href="https://bit.ly/dbmform" className="theme-btn btn-style-four"><span className="btn-title">Engage Service</span></a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Pricing Section */}
        <section className="about-section">
          <div className="auto-container">
            <div className="sec-title text-center">
              <span className="title">PRICING</span>
              <h2>PROFESSIONAL CHARGE ON COMPLETE DBM</h2>
            </div>
            <div className="outer-box">
              <div className="table-responsive-md">
                <table className="table table-bordered table-center">
                  <thead style={{backgroundColor: '#448414', color: '#ffffff'}}>
                    <tr>
                      {/* <th scope="col">VALUE</th> */}
                      <th scope="col">% OF TOTAL COST</th>
                      <th scope="col">PROJECTS WORTH</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{color: '#000000'}}>15%</td>
                      <td style={{color: '#000000'}}>Less than or = N500m</td>
                    </tr>
                    <tr>
                      <td style={{color: '#000000'}}>13%</td>
                      <td style={{color: '#000000'}}>Between N500m &amp; N1b</td>
                    </tr>
                    <tr>
                      <td style={{color: '#000000'}}>10%</td>
                      <td style={{color: '#000000'}}>N1b and Above</td>
                    </tr>
                  </tbody>
                  {/* <tbody>
                            <tr>
                                <td class="text">N2M - N199M</td>
                                <td class="text">10% Overall cost of property and service</td>
                                <td style="border-bottom: 1px solid #ffffff"></td>
                            </tr>
                            <tr>
                                <td class="text">N200M - N500M</td>
                                <td class="text">8% Overall cost of property and service</td>
                                <td  class="text" style="border-bottom: 1px solid #ffffff"> Legal Fees &ndash; 5% of Property purchase </td>
                            </tr>
                            <tr>
                                <td class="text">Above N500M</td>
                                <td class="text">5% Overall cost of property and service</td>
                                <td></td>
                            </tr>
                        </tbody> */}
                </table>
              </div>
            </div>
            <div className="sec-title text-center">
              <h2>PROFESSIONAL CHARGE ON OTHER PROJECTS</h2>
              <p className="text">Bill is prepared after the brief is received from the client</p>
            </div>
          </div>
          <div className="btn-box eng-cont">
            <a href="https://bit.ly/dbmform" className="theme-btn btn-style-two eng-butt"><span className="btn-title">Engage Service</span></a>
          </div>
          <br /> <br />
          <div className="btn-box eng-cont">
            <a href="https://bit.ly/DBM-PDFFORM" className="theme-btn btn-style-two eng-butt"><span className="btn-title">Download PDF</span></a>
          </div>
        </section>
        {/*End Pricing Section */}
        <section className="about-section-two last-smp">
          <div className="anim-icons full-width">
            <span className="icon icon-circle-blue wow fadeIn" />
            <span className="icon icon-dots wow fadeInleft" />
            <span className="icon icon-circle-1 wow zoomIn" />
          </div>
          <div className="auto-container">
            <div className="row">
              {/* Content Column */}
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <figure>
                    <img src={business} alt="business_administrative contacts" />
                  </figure>
                </div>
              </div>
              {/* Image Column */}
              <div className="image-column col-lg-6 col-md-12 col-sm-12 order-2">
                <figure>
                  <img src={sub} alt="subscription_plans" />
                </figure>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default DesignAndManage;
