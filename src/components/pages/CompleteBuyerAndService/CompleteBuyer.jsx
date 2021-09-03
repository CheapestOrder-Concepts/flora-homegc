import React from "react";

// import cpbs from "../../assets/productAssets/cpbs.png";
import background from "../../assets/background.jpg";
import price_table from "../../assets/price_table.png";
import PaymentDetails from "../../SharedComponents/PaymentDetails";
import LandingPageOptinForm from "../../SharedComponents/LandingPageOptinForm";

const CompleteBuyer = () => {
  return (
    <>
      {/* <section className="banner-meetup">
        <div className="bg-pattern" style={{backgroundImage: `url(${cpbs})`}} />
        <div className="layer-outer">
          <div className="gradient-layer" />
        </div>
        <div className="auto-container">
          <div className="content-box">
            <div className="address" />
            <h2>COMPLETE PROPERTY BUYER SERVICE
            </h2>
          </div>
          <div className="btn-box" style={{display: 'none'}}>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc8rf7DAg4Wb4-ghqM-IVMXglwR-M_CwMjLd3d3_sdeGUaxKA/viewform" className="theme-btn btn-style-two"><span className="btn-title">Engage service</span></a>
          </div>
        </div>
      </section> */}

      <section className="about-section-two">
        <div className="anim-icons full-width">
          <span
            className="icon icon-circle-blue wow fadeIn animated"
            style={{ visibility: "visible", animationName: "fa-spin" }}
          />
          <span
            className="icon icon-dots wow fadeInleft animated"
            style={{ visibility: "visible" }}
          />
          <span
            className="icon icon-circle-1 wow zoomIn animated"
            style={{ visibility: "visible", animationName: "zoomIn" }}
          />
        </div>
        <div className="auto-container">
          <h2>
            <b>
              Before You Pay For Your Next Property, Let's show you what you can
              do to avoid any real estate gory story.
            </b>
          </h2>
          <br />
          <br />
          <h4>
            Are you an Individual property investor, Estate developer,
            Organisation, off takers and you're ready to do another real estate
            transaction?
          </h4>
          <br />
          <h4>Silently answer this.</h4>
          <br />
          <ul className="list-style-two">
            <li>
              Do you even know the kind of lawyers to consult for your property
              or do you think any lawyer can give you the right landed property
              search and advice?
            </li>
            <li>
              Do you know that it's not every "surveyor" that knows about
              correlating the site with its documents?
            </li>
            <li>
              Do you know that aside from getting the right lawyer and the right
              surveyor, there are other professionals that must also check
              before you pay?
            </li>
            <li>How do you get the right agent that won't extort you?</li>
            <li>
              How do you know the right developer that will guarantee your
              investments?
            </li>
            <li>
              Or do you assume that once you're buying from an Estate, you gat
              no issue?
            </li>
            <li>
              How about knowing how you'll get a competent and truthful
              professional that will assure you of buying right…
            </li>
            <li>
              How about the stress of going for many inspections, the worries of
              getting a trusted and ethical professional to represent you
              without their personal greed, the headache of the humongous
              documentation processes, the panic of transferring money to the
              wrong account especially now that property impersonation is on the
              rise?
            </li>
          </ul>
          <br />
          <p>
            This is why there's Complete Property Buyer Service which involves
            full execution of the buyer task through all the 7 stages of
            property purchase: Sourcing, Verification, Valuation, Negotiation,
            Payment, Survey, and Documentation… all done at 100% on behalf of
            the client.
          </p>
          {/* <ul className="list-style-two">
            <li>Getting the right agent that won't extort you…</li>
            <li>Ensuring you're not scammed is a hard task…</li>
            <li>Buying from the right developer or individual that will guarantee your investments...</li>
            <li>Knowing how you'll get a competent and truthful professional that will assure you of buying right…</li>
            <li>Do you even know the kind of lawyers to consult for your property or do you think any lawyer can give you the right landed property search and advice?</li>
            <li>Do you know that it's not every "surveyor" that knows about correlating the site with its documents?</li>
            <li>Do you know that aside from getting the right lawyer and the right surveyor, there are other professionals that must also check before you pay?</li>
            <li>How about the stress of going for many inspections, the worries of getting a trusted and ethical professional to represent you without their personal greed, the headache of the humongous documentation processes, the panic of transferring money to the wrong account especially now that property impersonation is on the rise.</li>
          </ul> */}
          <br />
          {/* <h4><b>This is why we are</b></h4> */}
        </div>
      </section>

      <h4 align="center">
        <b>DIRECT AGENT Vs COMPLETE PROPERTY BUYER SERVICE.</b>
      </h4>
      <br />
      <section style={{ backgroundImage: `url(${background})` }}>
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-12 pt-5 pb-5 text-white">
              <br />
              <div
                className="table-responsive"
                id="verification-table"
                style={{ display: "block" }}
              >
                <table className="table table-bordered table-center">
                  <thead style={{ backgroundColor: "#fff", color: "#3A005F" }}>
                    <tr>
                      <th scope="col" />
                      <th scope="col">Agent</th>
                      <th scope="col">Complete Property Buyer Service </th>
                    </tr>
                  </thead>
                  <tbody style={{ color: "white" }}>
                    <tr>
                      <td>1</td>
                      <td>
                        Agents inform you of all the property sourced even if
                        they are 20 in number.
                      </td>
                      <td>
                        Agents inform us of all the property sourced, we carry
                        out our first level verification on them and send you a
                        report for only the verified shortlist.
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>You visit all sites with the agents.</td>
                      <td>
                        We first send you exterior drone-shot and interior
                        videos of the verified properties and you can decide
                        which one you want to visit or if we should go ahead
                        with the next level verification.
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>You receive your reports verbally</td>
                      <td>
                        You receive your reports as written, pictorial and video
                        format with professional advice on the advantages and
                        disadvantages of each of the properties.
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        You struggle to get either a competent surveyor and/or
                        lawyer for your verification after getting the property
                        you want.
                      </td>
                      <td>
                        We take the stress off you and we engage not just a land
                        surveyor and a lawyer, we engage experienced property
                        professionals such as Estate Surveyors, Land Surveyors,
                        Property Lawyers, Town-Planners, Researchers, Civil
                        Engineers, Investigative Journalists etc in order to
                        ensure that nothing is left unchecked that could lead to
                        unexpected losses.
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>You pay your agent after closing</td>
                      <td>
                        You pay a one time fee to us and we pay every agent we
                        engage for the property sourcing.
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>
                        Structural defects and flooding susceptibility not
                        usually checked
                      </td>
                      <td>
                        All quality checks carried out by construction
                        professionals at no extra cost.
                      </td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>You pay every other professionals</td>
                      <td>
                        We take care of all our professionals through the same
                        one time payment{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>
                        You can only make your final decision when you visit
                        site
                      </td>
                      <td>
                        You have the opportunity to make your final decision in
                        any location you might be.
                      </td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>
                        You might face price extortion even through your most
                        trusted people.
                      </td>
                      <td>
                        There's no such thing happening as we carry out
                        valuation and also meet directly with all who are
                        involved to dig the truth and get the best price from
                        the seller.
                      </td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>
                        Your agent do not engage property value assessment nor
                        negotiate on your behalf
                      </td>
                      <td>
                        We do all these and more and we even refund change to
                        our clients when there's extra.
                      </td>
                    </tr>
                    <tr>
                      <td>11</td>
                      <td>
                        You'll be looking for another lawyer to be drafting and
                        executing your deed.
                      </td>
                      <td>
                        Our experienced property lawyers will do that under our
                        supervision without you saying anything and without any
                        extra aside from how it's spelt out on this page.
                      </td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>
                        You'll be looking for a qualified surveyor to do your
                        survey.
                      </td>
                      <td>
                        We already got you covered at 100% without stress.
                      </td>
                    </tr>
                    <tr>
                      <td>13</td>
                      <td>You'll be concerned on how to perfect your title.</td>
                      <td>
                        We'll get all these done for you because it's part of
                        the complete service.
                      </td>
                    </tr>
                    <tr>
                      <td>14</td>
                      <td>You may worry about getting all your documents.</td>
                      <td>
                        We use DHL as a means of conveyance between us and you.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <section style={{ backgroundImage: `url(${background})` }}>
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-12 pt-5 pb-5 text-white">
              <br />
              {/* <h3 style={{color: 'white'}}><b>INTRODUCING THE COMPLETE PROPERTY BUYER SERVICE (CPBS)</b></h3><br /> */}
              <p style={{ color: "white" }}>
                At FloraHomes Global Consult Limited, we affirm our capacity to
                handle your property purchase transactions based on your
                specific needs at 100% fully strategized and executed on your
                behalf. Our property acquisition team is always available and
                ready to help prospective property buyers handle their property
                purchase from start to finish either land or building, within
                Estate or with Omo-Onile, for individual, estate developers or
                corporate large expanse rendered across different states in
                Nigeria.
              </p>
              <br />
            </div>
          </div>
        </div>
        <div className="row" style={{ display: "none" }}>
          <div className="container">
            <div className="text-center">
              <div className="btn-box">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc8rf7DAg4Wb4-ghqM-IVMXglwR-M_CwMjLd3d3_sdeGUaxKA/viewform"
                  className="theme-btn btn-style-four"
                >
                  <span className="btn-title">Engage Service</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </section>
      <br />
      <div className="auto-container">
        <h4>
          <b>BENEFITS</b>
        </h4>
        <ul className="list-style-one">
          <li>
            Our sourcing process involves detailed consideration of the
            investment purpose, location, landmarks, futuristic assessment while
            considering the client's needs.
          </li>
          <li>
            We ensure that any property to be purchased has a perfect title that
            can be easily processed and perfected to our client's credentials at
            the appropriate ministry to prevent any 3rd party claimants,
            disputes, eviction, or any other related losses.
          </li>
          <li>
            There's no price extortion as we close all loopholes between agents
            and their sellers.
          </li>
          <li>The verification exercise will include but not limited to; </li>
          <ul className="list-style-two" style={{ marginLeft: "40px" }}>
            <li>
              The site and surveyor general statuses of any property to be
              purchased.
            </li>
            <li>
              Dispute and encumbrance check: both field and desk checks at the
              appropriate ministries.
            </li>
            <li>Document checks: for fake, incomplete or original document</li>
            <li>Ownership authentication </li>
            <li>
              Road setback conformity through both states and federal
              masterplan.
            </li>
            <li>Government-approved uses versus buyer's intending uses.</li>
            <li>Flooding susceptibility, and Structural defects </li>
          </ul>
          <li>
            Client gets detailed reports at different stages of the service for
            client’s review and approval
          </li>
          <li>
            Our client's deed of assignment is prepared with such detail to
            indemnify such client.
          </li>
          <li>
            Site and documents assessment by the company Valuer as a basis for
            Negotiation{" "}
          </li>
          <li>Services executed and delivered between 20- 30 working days</li>
          <li>VIP delivery of 7 -14 days</li>
          <li>We engage video inspections for client's convenience.</li>
          <li>
            After closing, we execute the survey and begin full documentation to
            prevent any after purchase claimants.
          </li>
          <li>
            We deploy only qualified property professionals to handle our
            clients' projects.
          </li>
          <li>
            Everything is done for you 100% according to specification, taste
            and budget.
          </li>
          <li>
            It is stress free, great value for less stress and you have more
            time to focus on other things that matter to you.
          </li>
          <li>
            You have the opportunity to always receive our first hand
            information about our newly released verified and well negotiated
            deals direct from our property owner/Omo-Onile partners.
          </li>
          <li>You have a dedicated personal customer care personnel. </li>
        </ul>
        <br />
      </div>

      <br />
      <div className="auto-container">
        <lable>
          <b>
            Can you see how you'll experience a 100% service delivery with just
            a 1 time payment of the professional fees that will be paid after
            the service is fully delivered?
          </b>
        </lable>
        <br />
        {/* <br><br> */}
        <br />
        <h4>
          <b>PROFESSIONAL FEES</b>
        </h4>
        <br />
      </div>
      <br />
      <img src={price_table} width="100%" className="P2" alt="price_table" />
      <br />
      <section style={{ backgroundImage: `url(${background})` }} className="P1">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-12 pt-5 pb-5 text-white">
              <div className="table-responsive" id="verification-table">
                <table className="table table-bordered table-center">
                  <thead style={{ backgroundColor: "#fff", color: "#3A005F" }}>
                    <tr>
                      <th scope="col">Property Worth (Naira)</th>
                      <th scope="col">Service Charge</th>
                      <th scope="col">VIP Charge</th>
                      <th scope="col">
                        Bulk property purchasers and Off takers
                      </th>
                      <th>Legal</th>
                    </tr>
                  </thead>
                  <tbody style={{ color: "white" }}>
                    <tr>
                      <td>Less or equal to 500m</td>
                      <td>10% purchase price</td>
                      <td>15% purchase price</td>
                      <td rowSpan={4}>
                        <br />
                        <br />
                        <br />
                        Service Charge open for negotiation.
                      </td>
                      <td rowSpan={4}>
                        <br />
                        <br />
                        <br />
                        5% overall purchase{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>500m - 1b</td>
                      <td>9% purchase price</td>
                      <td>13% purchase price</td>
                    </tr>
                    <tr>
                      <td>1b - 5b</td>
                      <td>8% purchase price</td>
                      <td>10% purchase price</td>
                    </tr>
                    <tr>
                      <td>Above 5b</td>
                      <td>7%</td>
                      <td>8%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <div className="auto-container">
        <ul className="list-style-two">
          <li>
            The service charge covers for every task except documentation.
          </li>
          <li>
            The legal fee is for vetting of closure documents, production of
            Deed of Transfer, execution of the deed, processing of the title
            document in client's name and monitoring it until eventually
            granted.
          </li>
          <li>
            Client pays all government statutory fees as well as other ancillary
            charges relating to Survey and documentation.
          </li>
        </ul>
        <br />
        <div className="auto-container mb-3">
          <div className="sec-title text-center">
            <span className="title">HOW TO</span>
            <h2>ENGAGE THIS SERVICE </h2>
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
                        <div className="date">
                          1ST <br /> STEP
                        </div>
                        {/* <h4>Click Button</h4> */}
                        {/* <div className="text" style={{color: '#000000', display: 'none'}}>Enter your correct information <a href="https://docs.google.com/forms/d/e/1FAIpQLSc8rf7DAg4Wb4-ghqM-IVMXglwR-M_CwMjLd3d3_sdeGUaxKA/viewform" style={{textDecoration: 'underline'}}>here</a> with all the necessary documents
                        </div> */}
                        <button
                          className="theme-btn btn-style-three"
                          data-toggle="modal"
                          data-target="#landingModal"
                          id="form_caller"
                        >
                          <span className="btn-title">
                            Get Your Free Consultation
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* schedule Block */}
                  <div className="schedule-block even">
                    <div className="inner-box">
                      <div className="inner">
                        <div className="date">
                          2ND <br /> STEP
                        </div>
                        {/* <h4>Review</h4> */}
                        <div className="text" style={{ color: "#000000" }}>
                          Make Payment.
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* schedule Block */}
                  <div className="schedule-block">
                    <div className="inner-box">
                      <div className="inner">
                        <div className="date">
                          3RD <br /> STEP
                        </div>
                        {/* <h4>Payment</h4> */}
                        {/* <div class="text" style="color: #000000">Submit Service Information.</div> */}
                        <a
                          className="theme-btn btn-style-three"
                          href="https://docs.google.com/forms/d/e/1FAIpQLSc8rf7DAg4Wb4-ghqM-IVMXglwR-M_CwMjLd3d3_sdeGUaxKA/viewform"
                          style={{ textDecoration: "none" }}
                        >
                          <span className="btn-title">
                            Submit Service Information.
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="schedule-block even">
                    <div className="inner-box">
                      <div className="inner">
                        <div className="date">
                          4TH <br /> STEP
                        </div>
                        {/* <h4>Customer Care</h4> */}
                        <div className="text" style={{ color: "#000000" }}>
                          Connect with Your Personal Manager.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center" style={{ marginTop: "10px" }}>
                    <h5
                      style={{ marginTop: "5px", color: "#3A005F !important" }}
                    >
                      <b>NOW IT'S TIME TO TAKE YOUR FIRST STEP</b>
                    </h5>
                    <div className="btn-box">
                      <button
                        id
                        className="theme-btn btn-style-four pop_up_form_simple"
                        data-toggle="modal"
                        data-target="#landingModal"
                      >
                        <span className="btn-title">
                          CLICK HERE TO SCHEDULE YOUR 15 MINUTES FREE
                          CONSULTATION NOW
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr
          style={{
            border: "1px solid red",
            marginBottom: "10px !important",
            marginTop: "15px !important",
          }}
          id="horizontal_line"
        />
        {/*  <h5><b>CONTACTS:</b></h5><br>
                    <p>Mail: hello.florahomesgc@gmail.com Number: +234 809 444 2019, +234 802 442 1356</p><br> */}
        <h5 style={{ marginTop: "13px" }}>
          <b>WHO WE ARE:</b>
        </h5>
        <p>
          We are Nigeria's No. 1 Property Verification and Real Estate
          Investment company that gives professional end to end Real Estate and
          Property Development services across Nigeria through our experienced
          and ethical team of professionals which includes but not limited to;
          Land Surveyors, Estate Surveyors, Town Planners, Property Lawyers,
          Quantity Surveyors, Civil Engineers, Architects, Researchers. . .{" "}
        </p>
        <br />
        <br />
        <h5>
          <b>WE ARE KNOWN FOR:</b>
        </h5>
        <ul className="list-style-one">
          <li>
            Leading at providing the best real estate verification services
            across Nigeria that indemnifies buyers against both present and
            future losses of any kind.
          </li>
          <li>
            Offering end to end 100% done-for-you real estate and property
            development services to existing and aspiring stakeholders be it
            individuals, developers, organisations, clubs, groups.
          </li>
          <li>
            Delivering simplified quality information to the mobile phones of
            every property investor using technology.
          </li>
          <li>
            Engaging in community and town planning that protect against life
            and property loss.
          </li>
          <li>
            Engaging green architecture that revitalizes every soul occupying
            the space.
          </li>
          <li>
            Ensuring all properties to be traded or to be developed go through a
            thorough Verification process so as to replace loss and fear with
            trust and peace in the minds of stakeholders.{" "}
          </li>
          <li>
            Giving excellent service and quality of materials that ensure all
            investments are aimed at futuristic sustainability and not just for
            short term advantage.
          </li>
          <li>
            Ensuring timely delivery that produces optimum return on fund input.
          </li>
          <li>
            Delivering excellent physical equivalents in any of our models.
          </li>
          <li>
            Ensuring confidentiality and security that protects us and our
            customers from danger through exposure.
          </li>
        </ul>
      </div>
      <PaymentDetails />
      <LandingPageOptinForm />
    </>
  );
};

export default CompleteBuyer;
