import React, { useEffect, useState } from "react";
import tawkTo from "tawkto-react";
import "./style.css";
import partner from "../../assets/partner2.jpg";
import price from "../../assets/update_img.jpeg";
import PaymentDetails from "../../SharedComponents/PaymentDetails";
import LandingPageOptinForm from "../../SharedComponents/LandingPageOptinForm";
import EngageInService from "../../SharedComponents/EngageInService";
import { useDispatch } from "react-redux";
import makeConsultation from "../../../actions/verificationConsultation";
import { useSelector } from "react-redux";

const Verification = () => {
  const tawkToPropertyId = "5a9e51824b401e45400d70e9";

  // Direct Chat Link
  // https://tawk.to/chat/tawkToPropertyId/tawkToKey

  const tawkToKey = "1cit1c3m8";

  useEffect(() => {
    tawkTo(tawkToPropertyId, tawkToKey);
  }, []);

  const [consultationDetails, setconsultationDetails] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    whatsaap_number: "",
    category: "",
    est_of_interest: "",
    contact_me: "",
    message: "",
    how_you_hear_about_us: "",
  });
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state) => state.verificationConsultation
  );

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(makeConsultation(consultationDetails));
    setconsultationDetails({
      full_name: "",
      email: "",
      phone_number: "",
      whatsaap_number: "",
      category: "",
      est_of_interest: "",
      contact_me: "",
      message: "",
      how_you_hear_about_us: "",
    });
  };

  return (
    <>
      <section style={{ background: "#541484" }}>
        <div className="auto-container">
          <div className="heading-container">
            <h1>
              Don't Lose Your Money, Let Us Help You Verify Your Real Estate
              Investment.
            </h1>
          </div>
          <div className="heading-paragraph">
            <p>
              {" "}
              We would be responsible for any demolition issues, fake estate
              developers, Omo-Onile wahala, government acquisition, structural
              defects or potential scams of your investments for the next{" "}
              <span style={{ fontWeight: "bold" }}> 50years.</span>
            </p>
          </div>
          <div
            class="btn-box veriff-first"
            style={{
              display: "block",
              // marginRight: "10px",
              textAlign: "center",
            }}
          >
            <button
              data-toggle="modal"
              data-target="#landingModal"
              class="theme-btn btn-style-four mb-4 mt-3"
            >
              <span class="btn-title">CONTACT US NOW</span>
            </button>
          </div>
          {/* <div
          className="phone-number"
          style={{
            textAlign: "center",
            display: "block",
          }}
        >
          <a href="tel:+2348094442019 " className="call-link-one">
            {" "}
            CLICK HERE TO CALL{" "}
          </a>
        </div> */}
          {/* <div className="img verification"> */}
          {/* <h4
          className="text-center"
          style={{ marginBottom: "20px", color: "white" }}
        >
          Affiliated Professional Bodies
        </h4> */}
          <img
            id="firstP"
            style={{ top: "-20px" }}
            className="mt-4"
            src={partner}
            alt="partners"
          />
          {/* </div> */}
        </div>
      </section>
      <section>
        <div className="auto-container">
          <div className=" content-column col-lg-12">
            <p>How it works</p>
            <ul className="list-style-decimal">
              <li>
                Our verification team made up of professionals: Estate
                Surveyors, Land Surveyors, Property Lawyers, Town Planners,
                Civil Engineers, Investigative Journalist, Architects, Builders,
                Quantity Surveyors, etc are set to help individuals and
                corporate investors to verify their land and building of
                interest before making payment for it.{" "}
              </li>
              <li>
                When you allow us to carry out your Real Estate verification,
                you have our assurance for the next 50 years. And, if there is
                any matter that arises after our verification between this
                period. We would refund your investment capital.
              </li>
              <li>
                <div
                  class="btn-box"
                  style={{ display: "inline", marginRight: "10px" }}
                >
                  <button
                    data-toggle="modal"
                    data-target="#landingModal"
                    class="theme-btn btn-style-four mb-4 mt-3"
                  >
                    <span class="btn-title">REQUEST A CALL-BACK NOW</span>
                  </button>
                </div>
                {/* <div className="phone-number">
                <a href="tel:+2348094442019 " className="call-link-two">
                  {" "}
                  OR CLICK HERE TO CALL{" "}
                </a>
              </div> */}
              </li>
            </ul>

            {/* <p style={{ fontWeight: 'bold' }}>
                So how exactly do you know the genuinity of a property?
              </p> */}
          </div>
        </div>
      </section>

      <section className="" style={{ background: "#541484" }}>
        <div className="auto-container">
          <p
            style={{
              fontWeight: "bold",
              color: "#ed6c11",
              fontSize: "20px",
              paddingTop: "30px",
            }}
          >
            Our property verification includes but not limited to the following:
          </p>

          <ul
            className="list-style-two ul-text-white"
            style={{ color: "white" }}
          >
            <li>
              Physical land inspection with our land experts for picking
              Coordinates, and engaging in other field research.
            </li>
            <li>
              Correlating the document data with the actual site location data
              and determining the actual status of the land.
            </li>
            <li>Competitive analysis of similar adjoining Properties.</li>
            <li>
              Coordinate Charting at Surveyor General's office for updated
              information.
            </li>
            <li>A comprehensive examination of all documents.</li>
            <li>Confirming other government Property requirements.</li>
            <li>Authentication of the claimed title.</li>
            <li>Authenticating the property ownership.</li>
            <li>Unveiling any possible third-party ownership claims.</li>
            <li>Unraveling the property history.</li>
            <li>Root of title research.</li>
            <li>Checking of taxes or collateral issues.</li>
            <li>Checking any internal dispute.</li>
            <li>
              Examining both the major structural status as well as any minor
              defects within the subject building.
            </li>
            <li>Flooding susceptibility check.</li>
            <li>
              Confirming and correlating all documents in relation to the
              structure.
            </li>
            <li>Ensure interest land use tally with masterplan use</li>
            <li>
              Confirming the existing building plan is in conformity with
              approved plan.
            </li>
            <li>
              Confirming that all site planning tallies with any existing layout
              plan and/or the state masterplan.
            </li>
            <li>
              Measuring the sizes of the land, site, rooms and all spaces within
              the property.
            </li>
            <li>Determine the option of values as a basis for negotiation.</li>
            <li>General environmental assessment of the property.</li>
            <li>
              Road Encroachment/setback checks and conformity through both
              states and federal masterplan.
            </li>
            <li>Negotiations</li>
            <li>
              Authentication of closure documents in the required offices.
            </li>
            <li>
              Production and execution of all contractual documents including
              deed of assignment, contract of sale, meeting agreement etc.
            </li>
            <li>
              Perfection of title document after the completion of transactions.
            </li>
            <li>And much more...</li>
          </ul>

          <div
            class="btn-box"
            style={{ display: "inline", marginRight: "10px" }}
          >
            <button
              data-toggle="modal"
              data-target="#landingModal"
              class="theme-btn btn-style-four mb-4 mt-3"
            >
              <span class="btn-title">CONTACT US NOW</span>
            </button>
          </div>
          {/* <div className="phone-number">
            <a href="tel:+2348094442019 " className="call-link-one">
              {" "}
              OR CLICK HERE TO CALL{" "}
            </a>
          </div> */}

          {/* <div className="content-column">
            <div className="inner-column">
              <div className="row">
                a comment: Bullet Listing Column 
                <div className="affiliate-block col-lg-12 col-md-12">
                  <div className="sec-title">
                    <h2 className="text text-light">ONLY WHEN EVERY REQUIRED LANDED PROPERTY PROFESSIONALS COME TOGETHER TO TAKE EVERY SINGLE PROPERTY THROUGH PROPER VERIFICATION PROCESSES…
                    </h2>
                    <h2 className="text text-light">
                      But Wait, Who are these professionals and What does the process entail?
                    </h2>
                  </div>
                </div>
              </div>
             a coment start: <div class="row">

                            <div class="container">

                                <div class="text-center">

                                    <div class="btn-box"><a href="https://docs.google.com/forms/d/e/1FAIpQLSc8rf7DAg4Wb4-ghqM-IVMXglwR-M_CwMjLd3d3_sdeGUaxKA/viewform" class="theme-btn btn-style-four"><span class="btn-title">Engage Service</span></a></div>

                                </div>

                            </div>

                       ends: </div>

            </div>
          </div> */}
        </div>
      </section>
      {/*       
      <section>
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-12 mt-5 mb-5">
              comment: sana 
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
      </section> */}

      {/* <section style={{ backgroundImage: `url(${background})` }}> */}
      <section>
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-12 pt-5 pb-5 text-white">
              {/* <p style={{ color: 'white' }}> You're still waiting…
              </p> */}
              {/* <p style={{ color: 'white' }}>
                We say
                Don't be a victim of fake C of O, fake Excision, fake Allocation, encumbered property, internal and external disputes, committed acquisition, property encroaching road, wrong uses, incomplete documentation, fake "title under processing", price extortion, building with defective structure, property that is susceptible to flooding, untruthful professionals, dubious agents, dubious developers, greedy Omo-Onile, property with multiple owners and many other issues…
              </p> */}
              <h5 style={{ color: "black" }}>
                <b>Benefits and pricing:</b>
              </h5>
              <br />
              <ul className="list-style-two ul-text-dark">
                <li>
                  It protects you against scam, eviction, encumbrance,
                  demolition or any kind of property losses.
                </li>
                <li>
                  You get peace of mind on your property as you do not stand any
                  risk of property losses.
                </li>
                <li>
                  Services are executed and delivered between 5-10 working days
                  from the day of payment.
                </li>
                <li>
                  We deploy only qualified property professionals to handle our
                  clients' projects so you have no fear of losses due to
                  quackery.
                </li>
                <li>Everything is done on your behalf 100%</li>
                <li>
                  We produce and execute the pre-purchase agreement and
                  documentation.
                </li>
                <li>
                  You enjoy stress-free, great value for less stress and you
                  have more time to focus on other things that matter to you.
                </li>
                <li>
                  We give you a perfect understanding of the true status of your
                  interest property to create for you a good basis for
                  negotiation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="about-section"> */}
      {/* <div className="auto-container"> */}
      {/* <section className="schedule-section">
            <div className="anim-icons">
              <span className="icon icon-circle-4 wow zoomIn animated animated" style={{ visibility: 'visible', animationName: 'zoomIn' }} />
              <span className="icon icon-circle-3 wow zoomIn animated animated" style={{ visibility: 'visible', animationName: 'zoomIn' }} />
            </div>
            <div className="auto-container" style={{ overflowX: 'visible !important' }}>
              <div className="sec-title text-center" style={{ overflowX: "visible !important" }}>
                <span className="title">HOW TO</span>
                <h2>Engage Our Verification Service</h2>
              </div>
              <div className="schedule-tabs tabs-box" style={{ overflowX: "visible !important" }}>
                <div className="tabs-content" style={{ overflowX: "visible !important" }}>
                  {Tab}
                  <div className="tab active-tab" id="tab-1" style={{ overflowX: "visible !important" }}>
                    <div className="schedule-timeline" style={{ overflowX: "visible !important" }}>
                      { schedule Block }
                      <div className="schedule-block" style={{ overflowX: "visible !important" }}>
                        <div className="inner-box" style={{ overflowX: "visible !important" }}>
                          <div className="inner" style={{ overflowX: "visible !important" }}>
                            <div className="date" style={{ overflowX: "visible !important" }}>1ST <br /> STEP</div>
                            {   <h4>Click Button</h4> }
                            {   <div class="text" style="color: #000000">Enter your correct information <a href="https://docs.google.com/forms/d/e/1FAIpQLSc8rf7DAg4Wb4-ghqM-IVMXglwR-M_CwMjLd3d3_sdeGUaxKA/viewform" style="text-decoration: underline;">here</a> with all the necessary documents

                                            </div> }
                            <button className="theme-btn btn-style-three"><span className="btn-title">Get Your Free Consultation</span></button>
                            {  <div class="text" style="color: #000000; cursor: pointer !important;" ><strong id="form_caller">Get Your Free Consultation</strong>
                                            </div> }
                          </div>
                        </div>
                      </div>
                      schedule Block 
                      <div className="schedule-block even">
                        <div className="inner-box">
                          <div className="inner">
                            <div className="date">2ND <br /> STEP</div>
                           <h4>Payment</h4> 
                            <div className="text" style={{ color: '#000000' }}>Make Payment.</div>
                          </div>
                        </div>
                      </div>
                    schedule are comment ...schedule Block 
                      <div className="schedule-block">
                        <div className="inner-box">
                          <div className="inner">
                            <div className="date">3RD <br /> STEP</div>
                              comment starts... <h4>Service Information</h4>
                           <div class="text" style="color: #000000">Submit Service Information.</div>... comment ends
                            <a className="theme-btn btn-style-three" href="https://docs.google.com/forms/d/e/1FAIpQLSc8rf7DAg4Wb4-ghqM-IVMXglwR-M_CwMjLd3d3_sdeGUaxKA/viewform" style={{ textDecoration: 'none' }}><span className="btn-title">Submit Service Information.</span></a>
                          </div>
                        </div>
                      </div>
                      schedule Block= a comment
                      <div className="schedule-block even">
                        <div className="inner-box">
                          <div className="inner">
                            <div className="date">4TH <br /> STEP</div>
                             comment...<h4>Customer Care</h4> 
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
              *comment start here...<br><br> 
              <div class="row">

                    <div class="container">

                        <div class="text-center">

                            <div class="btn-box"><a href="https://docs.google.com/forms/d/e/1FAIpQLSc8rf7DAg4Wb4-ghqM-IVMXglwR-M_CwMjLd3d3_sdeGUaxKA/viewform " class="theme-btn btn-style-three"><span class="btn-title">Engage Service</span></a></div>

                        </div> <br> <br>




                    </div>

                </div>
 *comment ends
              <div className="text-center">
                <h5 style={{ marginTop: '5px', color: '#3A005F !important' }}><b>NOW IT'S TIME TO TAKE YOUR FIRST STEP</b></h5>
                <div className="btn-box"><button id className="theme-btn btn-style-four pop_up_form_simple" style={{}}><span className="btn-title">CLICK HERE TO SCHEDULE YOUR 15 MINUTES FREE CONSULTATION NOW</span></button></div>
              </div>
            </div>
          </section> */}

      <section className>
        <div className="auto-container">
          <h5 style={{ color: "black", fontSize: "30px" }}>
            <b>
              Half done verification or No verification is usually a disaster.
            </b>
          </h5>
          <p
            style={{
              fontWeight: "bold",
              color: "black",
              fontSize: "20px",
              marginTop: "20px",
            }}
          >
            Verification is not just about
          </p>
          <ul
            className="list-style-two ul-text-dark"
            style={{ color: "white" }}
          >
            <li>Taking a surveyor to the land.</li>
            <li>Sending documents to a lawyer.</li>
            <li>
              Seeing several developments and buildings around the property.
            </li>
            <li>The fence and beautiful gatehouse on the estate.</li>
            <li>The promises of good returns</li>
            <li>
              The property has C of O, Gazette or Governor's Consent as a title.
            </li>
            <li>The house is beautiful.</li>
            <li>
              Being scared of land and so deciding on just buying buildings.
            </li>
          </ul>
          <br />
          <p style={{ fontWeight: "bold", fontSize: "18px" }}>
            Don't be a victim of fake C of O, fake Excision, fake Allocation,
            encumbered property, internal and external disputes, committed
            acquisition, property encroaching road, wrong uses, incomplete
            documentation, fake "title under processing", price extortion,
            building with defective structure, property that is susceptible to
            flooding, untruthful professionals, dubious agents, dubious
            developers, greedy Omo-Onile, property with multiple owners and many
            other issues…
          </p>
          <br />
          <p style={{ fontWeight: "bold", fontSize: "18px" }}>
            Let us run a complete property verification for your Real Estate
            Investments irrespective of your location and get up to 50 years
            warranty for your property.
          </p>
          <br />
          <p
            style={{
              fontWeight: "bold",
              color: "black",
              fontSize: "20px",
              marginTop: "20px",
            }}
          >
            Period of engagement
          </p>
          <ul
            className="ul-text-dark"
            style={{ color: "white", marginLeft: "20px" }}
          >
            <li style={{ listStyleType: "decimal", marginBottom: "10px" }}>
              The Verification Service shall be executed and delivered between
              14 - 21 working days from the day of payment.
            </li>
            <li style={{ listStyleType: "decimal" }}>
              VIP delivery of 5 - 10 working days from the day of payment.
            </li>
          </ul>
          {/* <div className="content-column">
            <div className="inner-column">
              <div className="row">
                a comment: Bullet Listing Column 
                <div className="affiliate-block col-lg-12 col-md-12">
                  <div className="sec-title">
                    <h2 className="text text-light">ONLY WHEN EVERY REQUIRED LANDED PROPERTY PROFESSIONALS COME TOGETHER TO TAKE EVERY SINGLE PROPERTY THROUGH PROPER VERIFICATION PROCESSES…
                    </h2>
                    <h2 className="text text-light">
                      But Wait, Who are these professionals and What does the process entail?
                    </h2>
                  </div>
                </div>
              </div>
             a coment start: <div class="row">

                            <div class="container">

                                <div class="text-center">

                                    <div class="btn-box"><a href="https://docs.google.com/forms/d/e/1FAIpQLSc8rf7DAg4Wb4-ghqM-IVMXglwR-M_CwMjLd3d3_sdeGUaxKA/viewform" class="theme-btn btn-style-four"><span class="btn-title">Engage Service</span></a></div>

                                </div>

                            </div>

                       ends: </div>

            </div>
          </div> */}
        </div>
      </section>

      <section className="about-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="title">Professional fee</span>
          </div>
          <div className="outer-box">
            <figure id="verification-img-v" className="verification-img-v">
              <img
                src={price}
                alt="Professional Charge"
                width="100%"
                height="100%"
              />
            </figure>
            <div className="table-responsive" id="verification-table">
              <table className="table table-bordered table-center">
                <thead style={{ backgroundColor: "#448414", color: "#ffffff" }}>
                  <tr>
                    <th scope="col">Size</th>
                    <th scope="col">Service Charge</th>
                    <th scope="col">VIP Charge</th>
                    <th scope="col">Legal Fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text">1 Plot</td>
                    <td className="text">N250,000 / $650</td>
                    <td className="text">N350,000 / $900</td>
                    <td className="text">10% property fair market value</td>
                  </tr>
                  <tr>
                    <td className="text">With Viable Structure</td>
                    <td className="text">+N50,000/$135 per building</td>
                    <td className="text">+N70,000/$190 per building</td>
                    <td className="text" />
                  </tr>
                  <tr>
                    <td className="text">Above 1 acre</td>
                    <td className="text">+N50,000 Per Every Extra Acre</td>
                    <td className="text">+N70,000 Per Every Extra Acre</td>
                    <td className="text" />
                  </tr>
                </tbody>
              </table>
            </div>
            <ul style={{ margin: "0px 20px" }} className="list-style-two">
              <li>
                Client pays all statutory fees as well as other ancillary
                expenses relating to taking property possession, Survey and
                title perfection, etc.
              </li>
            </ul>

            <EngageInService
              first_step="Enter Your Detail Now To Request A Call-Back"
              second_step="  Make Payment."
              third_step="    Submit Service Information."
              fourth_step=" Connect with Your Personal Manager."
              call_to_action={
                <div
                  class="btn-box"
                  style={{
                    display: "block",
                    marginRight: "10px",
                    textAlign: "center",
                  }}
                >
                  <button
                    data-toggle="modal"
                    data-target="#landingModal"
                    class="theme-btn btn-style-three mb-4 mt-3"
                  >
                    <span class="btn-title">REQUEST A CALL-BACK NOW</span>
                  </button>
                </div>
              }
              // call_to_action2={
              //   <div
              //     className="phone-number"
              //     style={{
              //       color: "#ed6c11",
              //       textAlign: "center",
              //       display: "block",
              //     }}
              //   >
              //     <a href="tel:+2348094442019 " className="call-link-two">
              //       {" "}
              //       OR CLICK HERE TO CALL{" "}
              //     </a>
              //   </div>
              // }
            />

            {/*    <br><br> */}
            {/* 
                    <div>
                        <h5 style="color: #541484 !important;"><b>CONTACTS </b></h5>
                        <p>
                            Mail: hello.florahomesgc@gmail.com<br>
                            Tel.: +234 809 444 2019<br>
                            +234 802 442 1356<br>
                        </p>

                    </div> */}
            {/*  <br><br> */}
            <br />

            <br />
            <hr
              style={{
                border: "1px solid red",
                marginBottom: "10px !important",
              }}
              id="horizontal_line"
            />
            <div style={{}}>
              <h5 style={{ color: "#541484 !important" }}>
                <b> WHO WE ARE</b>
              </h5>
              <p>
                We are Nigeria's No. 1 Property Verification and Real Estate
                Investment company that gives professional end to end Real
                Estate and Property Development services across Nigeria through
                our experienced and ethical team of professionals which includes
                but not limited to; Land Surveyors, Estate Surveyors, Town
                Planners, Property Lawyers, Quantity Surveyors, Civil Engineers,
                Architects, Researchers. . .
              </p>
            </div>
            <br />
            <br />
            <div>
              <h5 style={{ color: "#541484 !important" }}>
                <b> WE ARE KNOWN FOR:</b>
              </h5>
              <ul className="list-style-two">
                <li>
                  Leading at providing the best real estate verification
                  services across Nigeria that indemnifies buyers against both
                  present and future losses of any kind.
                </li>
                <li>
                  Offering end to end 100% done-for-you real estate and property
                  development services to existing and aspiring stakeholders be
                  it individuals, developers, organisations, clubs, groups.
                </li>
                <li>
                  Delivering simplified quality information to the mobile phones
                  of every property investor using technology.
                </li>
                <li>
                  Engaging in community and town planning that protect against
                  life and property loss.
                </li>
                <li>
                  Engaging green architecture that revitalizes every soul
                  occupying the space.
                </li>
                <li>
                  Ensuring all properties to be traded or to be developed go
                  through a thorough Verification process so as to replace loss
                  and fear with trust and peace in the minds of stakeholders.
                </li>
                <li>
                  Giving excellent service and quality of materials that ensure
                  all investments are aimed at futuristic sustainability and not
                  just for short term advantage.
                </li>
                <li>
                  Ensuring timely delivery that produces optimum return on fund
                  input.
                </li>
                <li>
                  Delivering excellent physical equivalents in any of our
                  models.
                </li>
                <li>
                  Ensuring confidentiality and security that protects us and our
                  customers from danger through exposure.
                </li>
              </ul>
            </div>
            <br />
            <br />
            {/*   <div class="row">



                        <div class="container">

                            <div class="text-center">

                                <div class="btn-box"><a href="https://docs.google.com/forms/d/e/1FAIpQLSc8rf7DAg4Wb4-ghqM-IVMXglwR-M_CwMjLd3d3_sdeGUaxKA/viewform " class="theme-btn btn-style-three"><span class="btn-title">Engage Service</span></a></div>

                            </div> <br> <br>




                        </div>

                    </div>
 */}
          </div>
        </div>
      </section>
      <PaymentDetails />
      <LandingPageOptinForm
        onSubmit={onSubmit}
        consultationDetails={consultationDetails}
        setconsultationDetails={setconsultationDetails}
        data={data}
        loading={loading}
        error={error}
      />
      {/* <Footer/> */}
    </>
  );
};

export default Verification;
