import React from 'react';

import Partner from "../layouts/Partner/Partner"
import "../../css/Verification.css"
import optin_bg from "../assets/optin-bg.jpg"
import landVerification from "../assets/land-verification.jpg"
import background9 from "../assets/background9.jpg"
import Iframe from './Home/Iframe';



const Verification = () => {
  return (
    <div>
      {/* Banner Meetup */}
      <section className="banner-meetup">
        <div className="bg-pattern" style={{ backgroundImage: `url(${optin_bg})` }} />
        {/* <div class="layer-outer">

                    <div class="gradient-layer"></div>

                </div> */}
        <div className="auto-container">
          <div className="content-box">
            <div className="address" />
            <h2>VERIFICATION SERVICE PAGE
            </h2>
          </div>
          {/* <div class="btn-box">

                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSc8rf7DAg4Wb4-ghqM-IVMXglwR-M_CwMjLd3d3_sdeGUaxKA/viewform" class="theme-btn btn-style-two"><span class="btn-title">Engage service</span></a>

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
        <div className="container">
          <div className="row">
            {/* Content Column */}
            <div className="content-column col-lg-12 col-md-12 col-sm-12 order-2">
              <div className="inner-column">
                <div className="sec-title">
                  <h2 style={{ marginBottom: '15px' }}>
                    Don't Lose Your Money! Let Us Help You Verify Your Real Estate Investment Before You Pay For Them.

                  </h2>
                  {/* <h4 style={{fontWeight: 600, marginBottom: '15px'}}>Don't be a victim of property scam, demolition, eviction, 3rd party claimants, and other Real Estate related losses!</h4> */}
                  {/*  <br><br><br> */}
                  {/* <p style={{marginBottom: '15px', fontSize: '20px'}}>Let's help you verify your Real Estate investments opportunities before you pay for them.</p> */}
                </div>
                <div className="text">
                  <ul className="list-style-two">

                    <li>
                      Are you buying from within an Estate or from the Omo-Onile?
                    </li>

                    <li>
                      Are you an Individual property investor, developer company or corporate investor?
                    </li>

                    {/* <li>
                        Are you an individual land investor, home buyer, developer company, corporate organisation or realtor?
                      </li>
                      <li>
                        The 1 plot you want to buy or the 100 hectares you need for development...
                   

                      

                      </li>
                      <li>
                        The estate land or building you want to buy…
                      </li>
                      <li>
                        The community or individual property you want to buy…
                      </li>
                      <li>
                        The property you already purchased…
                      </li>
                      <li>
                        Whether newly bought or even several year's old…
                      </li>
                      <li>
                        Are you sure that you're not about to lose all your investments?
                      </li>
                      <li>
                        Are you sure you've not been scammed?
                      </li> */}
                  </ul>
                  {/* <p>
                      Don't lose your millions of Naira when you can totally avoid losing at all simply by getting your interest property verified before paying or before spending more money in case you've already purchased it.
                    </p> */}


                  <p style={{ fontWeight: "600", lineHeight: "1.8em", color: "#222", }}>

                    Don't be a victim of fake C of O, fake Excision, fake Allocation, encumbered property, internal and external disputes, committed acquisition, property encroaching road, wrong uses, incomplete documentation, fake "title under processing", price extortion, building with defective structure, property that is susceptible to flooding, untruthful professionals, dubious agents, dubious developers, greedy Omo-Onile, property with multiple owners and many other issues…
                  </p>

                  <section className="affiliate-section" style={{  marginBottom: "10px" }}>
                    <div className="auto-container">
                      <div className="content-column">
                        <div className="inner-column">
                          <div className="row">
                            {/* Bullet Listing Column */}
                            <div className="affiliate-block col-lg-12 col-md-12">
                              <div className="sec-title">

                                <h2 className="text" style={{color:"black"}}>
                                  <span style={{ fontWeight: "900", color: "#EE7926", fontSize: "30px" }}>With just N150,000 only,</span>  you can totally avoid losing millions of Naira by getting your interest property completely verified before paying for it or before spending more on it in case you've already purchased the property.
                                </h2>
                              </div>
                              <div class="text-center" style={{ marginTop: "25px" }}>

                                <div class="btn-box"><a href="/" class="theme-btn btn-style-three" style={{backgroundColor:"#EE7926"}}><span class="btn-title">GET A FREE CONSULTATION NOW</span></a></div>

                              </div>

                            </div>

                          </div>

                        </div>
                      </div>
                    </div>
                  </section>
                 <Partner/>
                  {/* <div className="vidBox">
                    <video src="https://www.youtube.com/embed/gkAYHJvo8as?autoplay=1&mute=1" autoPlay width="100%" height="auto" type="video/mp4" controls />
                  </div> */}
                  <Iframe src="https://youtu.be/gkAYHJvo8as"/>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className=" content-column col-lg-8">
              <p style={{ fontWeight: 'bold', marginTop: '80px' }}>
                Or do you think verification is just about…
              </p>
              <ul className="list-style-two">
                <li>Taking a surveyor to the land? No</li>
                <li>Sending documents to a lawyer? No.</li>
                <li>Seeing several developments and buildings around the property? No</li>
                <li>The fence and beautiful gatehouse on the estate? No</li>
                <li>The promises of good returns? No</li>
                <li>When the property has C of O, Gazette or Governor's Consent as a title? No</li>
                <li>The document they send to you? No</li>
                <li>Being scared of land and so deciding to be buying just buildings? No.</li>
              </ul>
              <p style={{ fontWeight: 'bold' }}>
                So how exactly do you know the genuinity of a property?
              </p>
            </div>
            <div className="col-lg-4">
              <div className="image-box veriBox">
                <img src={landVerification} alt="Overview" className="veriBox-img" />
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
      <section className="affiliate-section" style={{ backgroundImage: `url(${background9})` }}>
        <div className="auto-container">
          <div className="content-column">
            <div className="inner-column">
              <div className="row">
                {/* Bullet Listing Column */}
                <div className="affiliate-block col-lg-12 col-md-12">
                  <div className="sec-title">
                    <h2 className="text">ONLY WHEN EVERY REQUIRED LANDED PROPERTY PROFESSIONALS COME TOGETHER TO TAKE EVERY SINGLE PROPERTY THROUGH PROPER VERIFICATION PROCESSES…
                    </h2>
                    <h2 className="text">
                      But Wait, Who are these professionals and What does the process entail?
                    </h2>
                  </div>
                </div>
              </div>
              {/*  <div class="row">

                            <div class="container">

                                <div class="text-center">

                                    <div class="btn-box"><a href="https://docs.google.com/forms/d/e/1FAIpQLSc8rf7DAg4Wb4-ghqM-IVMXglwR-M_CwMjLd3d3_sdeGUaxKA/viewform" class="theme-btn btn-style-four"><span class="btn-title">Engage Service</span></a></div>

                                </div>

                            </div>

                        </div>
 */}
            </div>
          </div>
        </div>
      </section>
      {/* End Advantages Section */}
      <section>
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-12 mt-5 mb-5">
              {/* sana */}
              <p>
                Due to the prevalence of demolition, eviction, dispute, collapse and scam issues relating to landed properties, our verification team which include but not limited to Estate Surveyors, Land Surveyors, Property Lawyers, Town-Planners, Civil Engineers, Architects, Researchers etc set out to help individuals and corporate investors to verify and clear their subject of interest either before paying for the new found property or for already existing property against government acquisition, title issues, ownership issues, Omo-Onile wahala, uses issues, dispute, third party claimants, structural defects etc. This we achieve by taking such properties through our systemised verification checklist.
              </p>
              <h5>
                Where else do you want to do your property verification aside from FloraHomesGC, the most trusted property verification company in Nigeria with the right hands, qualifications and years of experience?
              </h5>
              <br />
              <h2><b>Our property verification includes but not limited to the following:</b></h2>
              <br /><br />
              <h5> <b>1) STATUS VERIFICATION: This involves confirming if the land ( either unbuilt or built) is free from any government commitment.</b>
              </h5>
              <ul className="list-style-two mt-4">
                <li>Physical land inspection with our land experts for picking Coordinates, and engaging in other field research.</li>
                <li>Correlating the document data with the actual site location data and determining the actual status of the land.
                </li>
                <li>Competitive analysis of similar adjoining Properties.</li>
                <li>Coordinate Charting at Surveyor General's office for updated information.</li>
              </ul>
              <br /><br />
              <h5> <b>2) TITLE &amp; OWNERSHIP VALIDATION (TOV): This involves confirming the genuity of the acclaimed property title, checking for debt, encumbrances or dispute of any kind, as well as confirming the real ownership of the said property.</b>
              </h5>
              <ul className="list-style-two mt-4">
                <li>A comprehensive examination of all documents
                </li>
                <li>Confirming other government Property requirements
                </li>
                <li>Authentication of the claimed title.</li>
                <li>Authenticating the property ownership</li>
                <li>Unveiling any possible third-party ownership claims.</li>
                <li>Unraveling the property history.</li>
                <li>Root of title research</li>
                <li>Checking of taxes or collateral issues</li>
                <li>Checking any internal dispute.</li>
                <li>Presentation of Report at the end of the exercise.</li>
              </ul>
              <br /><br />
              <h5> <b>3)BUILDING DOCUMENTS, LAND USES &amp; STRUCTURAL VERIFICATION: All documents regarding building regulation are vetted, land uses that ensure structures are fixed according to regulated plans and the structure is vetted to ascertain that there's no structural weaknesses that may lead to collapse, meeting all standard regarding futuristic investment. Contradicting these plans usually lead to demolition, collapse, eviction or paying penal-fees. </b>
              </h5>
              <ul className="list-style-two mt-4">
                <li>Confirming all documents in relation to the structure.
                </li>
                <li>Ensure interest land use tally with existing use
                </li>
                <li>Confirming the site plan is in conformity with approved layout plan
                </li>
                <li>Confirming all planning tallies with the state master plan.
                </li>
                <li>Examining the Structural state of the interest building.
                </li>
                <li>Flooding susceptibility check.
                </li>
              </ul>
              <br />
            </div>
          </div>
        </div>
      </section>
      {/* sana 2 */}
      <section style={{ backgroundImage: `url(${background9})` }}>
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-12 pt-5 pb-5 text-white">
              {/* <p style={{color: 'white'}}> You're still waiting…
                </p>
                <p style={{color: 'white'}}>
                  We say
                  Don't be a victim of fake C of O, fake Excision, fake Allocation, encumbered property, internal and external disputes, committed acquisition, property encroaching road, wrong uses, incomplete documentation, fake "title under processing", price extortion, building with defective structure, property that is susceptible to flooding, untruthful professionals, dubious agents, dubious developers, greedy Omo-Onile, property with multiple owners and many other issues…
                </p> */}
              <h5 style={{ color: 'white' }}><b>BENEFITS OF ENGAGING THIS SERVICE
              </b>
              </h5>
              <br />
              <ul className="list-style-two">
                <li style={{ color: 'white' }}> We ensure that any property to be traded has a perfect title that can be easily processed and perfected to our client's credentials at the appropriate ministry to prevent any 3rd party claimants, disputes, eviction, or any other related losses.
                </li>
                <li style={{ color: 'white' }}> It protect you against scam, eviction, encumbrance, demolition or any kind of property losses
                </li>
                <li style={{ color: 'white' }}> You get peace of mind on your property as you do not stand any risk of property losses.
                </li>
                <li style={{ color: 'white' }}> Services executed and delivered between 14-21 working days while VIP delivery of 5-10 working days and hence enabling you to make your transaction decisions on time.
                </li>
                <li style={{ color: 'white' }}> We engage video inspection that gives the client a convenient overview of the job being carried out.
                </li>
                <li style={{ color: 'white' }}> We give you a perfect understanding of the true status of your interest property to create for you a good basis for negotiation.
                </li>
                <li style={{ color: 'white' }}> We deploy only qualified property professionals to handle our clients project so you have no fear of losses due to quackery.
                </li>
                <li style={{ color: 'white' }}> Everything is done on your behalf 100% .
                </li>
                <li style={{ color: 'white' }}>
                  We produce and execute the pre-purchase agreement and documentation.
                </li>
                <li style={{ color: 'white' }}>
                  We produce and execute all post-acquisition documentation to prevent any future losses.
                </li>
                <li style={{ color: 'white' }}>
                  You enjoy stress-free, great value for less stress and you have more time to focus on other things that matter to you.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <br /><br />
      <section className="schedule-section">
        <div className="anim-icons">
          <span className="icon icon-circle-4 wow zoomIn animated" style={{ visibility: 'visible', animationName: 'zoomIn' }} />
          <span className="icon icon-circle-3 wow zoomIn animated" style={{ visibility: 'visible', animationName: 'zoomIn' }} />
        </div>
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="title">HOW TO</span>
            <h2>Engage Our Verification Service</h2>
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

                      
                        <button className="btn theme-btn btn-style-three pop_up_form_simple"><span className="btn-title">Get Your Free Consultation</span></button>
                    
                      </div>
                    </div>
                  </div>
                  {/* schedule Block */}
                  <div className="schedule-block even">
                    <div className="inner-box">
                      <div className="inner">
                        <div className="date">2ND <br /> STEP</div>
                        {/* <h4>Payment</h4> */}
                        <div className="text" style={{ color: '#000000' }}>Make Payment.</div>
                      </div>
                    </div>
                  </div>
                  {/* schedule Block */}
                  <div className="schedule-block">
                    <div className="inner-box">
                      <div className="inner">
                        <div className="date">3RD <br /> STEP</div>
                        {/*    <h4>Service Information</h4> */}
                        {/*  <div class="text" style="color: #000000">Submit Service Information.</div> */}

                        <a className="btn theme-btn btn-style-three" href="https://docs.google.com/forms/d/e/1FAIpQLSc8rf7DAg4Wb4-ghqM-IVMXglwR-M_CwMjLd3d3_sdeGUaxKA/viewform" style={{ textDecoration: 'none' }}><span className="btn-title">Submit Service Information.</span></a>


                      </div>
                    </div>
                  </div>
                  {/* schedule Block */}
                  <div className="schedule-block even">
                    <div className="inner-box">
                      <div className="inner">
                        <div className="date">4TH <br /> STEP</div>
                        {/* <h4>Customer Care</h4> */}
                        <div className="text" style={{ color: '#000000' }}>
                          Connect with Your Personal Manager.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br /><br />
          <div class="row">

            <div class="container">

              <div class="text-center">

                <div class="btn-box"><a href="https://docs.google.com/forms/d/e/1FAIpQLSc8rf7DAg4Wb4-ghqM-IVMXglwR-M_CwMjLd3d3_sdeGUaxKA/viewform " class="theme-btn btn-style-three"><span class="btn-title">Engage Service</span></a></div>

              </div> <br /> <br />




            </div>

          </div>

          <div className="text-center">
            <h5 style={{ marginTop: '5px', color: '#3A005F !important' }}><b>NOW IT'S TIME TO TAKE YOUR FIRST STEP</b></h5>
            <div className="btn-box"><button id className="theme-btn btn-style-four pop_up_form_simple" style={{}}><span className="btn-title">CLICK HERE TO SCHEDULE YOUR 15 MINUTES FREE CONSULTATION NOW</span></button></div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="about-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="title">PROFESSIONAL FEE
            </span>
          </div>
          <div className="outer-box">
            {/* <figure id="verification-img-v" className="verification-img-v">
              <img src="_Price Table.png" alt="Professional Charge" width="100%" height="100%" />
            </figure> */}
            <div className="table-responsive" id="verification-table">
              <table className="table table-bordered table-center">
                <thead style={{ backgroundColor: '#448414', color: '#ffffff' }}>
                  <tr>
                    <th scope="col">Size</th>
                    <th scope="col">Service Charge</th>
                    <th scope="col">
                      VIP Charge
                    </th>
                    <th scope="col">
                      Legal Fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text">
                      1 Plot
                    </td>
                    <td className="text">
                      N150,000 / $400
                    </td>
                    <td className="text">N200,000 / $520</td>
                    <td className="text">
                      5% property purchase fee
                    </td>
                  </tr>
                  <tr>
                    <td className="text">
                      With Viable Structure
                    </td>
                    <td className="text">
                      +N50,000/building
                    </td>
                    <td className="text">
                      +N70,000/building
                    </td>
                    <td className="text" />
                  </tr>
                  <tr>
                    <td className="text">
                      Above 1 acre
                    </td>
                    <td className="text">
                      +N20,000/$55 Per Every Extra Acre
                    </td>
                    <td className="text">+N30,000/$80 Per Every Extra Acre</td>
                    <td className="text" />
                  </tr>
                </tbody>
              </table>
            </div>
            <ul style={{ margin: '0px 20px' }} className="list-style-two">
              <li>The legal fee is for vetting of closure documents, production of Deed of Transfer, execution of the deed, processing of the title document in client's name and monitoring it until eventually granted.
              </li>
              <li>Client pays all government statutory fees as well as other ancillary charges relating to Survey and documentation.
              </li>
            </ul>

            <br /><br />

            <div>
              <h5 style={{ color: '#541484 !important' }}><b>CONTACTS </b></h5>

              <p>
                Mail: hello.florahomesgc@gmail.com<br />
                Tel.: +234 809 444 2019<br />
                +234 802 442 1356<br />
              </p>

            </div>
            <br /><br />
            <hr style={{ border: '1px solid red', marginBottom: '10px !important' }} id="horizontal_line" />
            <div style={{}}>
              <h5 style={{ color: '#541484 !important' }}><b> WHO WE ARE</b></h5>
              <p>
                We are Nigeria's No. 1 Property Verification and Real Estate Investment company that gives professional end to end Real Estate and Property Development services across Nigeria through our experienced and ethical team of professionals which includes but not limited to; Land Surveyors, Estate Surveyors, Town Planners, Property Lawyers, Quantity Surveyors, Civil Engineers, Architects, Researchers. . .
              </p>
            </div>
            <br /><br />
            <div>
              <h5 style={{ color: '#541484 !important' }}><b> WE ARE KNOWN FOR:</b></h5>
              <ul className="list-style-two">
                <li>
                  Leading at providing the best real estate verification services across Nigeria that indemnifies buyers against both present and future losses of any kind.
                </li>
                <li>
                  Offering end to end 100% done-for-you real estate and property development services to existing and aspiring stakeholders be it individuals, developers, organisations, clubs, groups.
                </li>
                <li>
                  Delivering simplified quality information to the mobile phones of every property investor using technology.
                </li>
                <li>
                  Engaging in community and town planning that protect against life and property loss.
                </li>
                <li>
                  Engaging green architecture that revitalizes every soul occupying the space.
                </li>
                <li>
                  Ensuring all properties to be traded or to be developed go through a thorough Verification process so as to replace loss and fear with trust and peace in the minds of stakeholders.
                </li>
                <li>
                  Giving excellent service and quality of materials that ensure all investments are aimed at futuristic sustainability and not just for short term advantage.
                </li>
                <li>
                  Ensuring timely delivery that produces optimum return on fund input.
                </li>
                <li>
                  Delivering excellent physical equivalents in any of our models.
                </li>
                <li>
                  Ensuring confidentiality and security that protects us and our customers from danger through exposure.
                </li>
              </ul>
            </div>
            <br /><br />

          </div>
        </div>
      </section>
      {/*End Pricing Section */}
      {/*End Engage Process Section */}
    </div>
  );
}

export default Verification;
