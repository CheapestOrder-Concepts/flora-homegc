import React, { useEffect, useState } from "react";
import tawkTo from "tawkto-react";
import { useDispatch, useSelector } from "react-redux";
import makeConsultation from "../../../actions/verificationConsultation";
import EngageInService from "../../SharedComponents/EngageInService";
import LandingPageOptinForm from "../../SharedComponents/LandingPageOptinForm";
import PaymentDetails from "../../SharedComponents/PaymentDetails";
import partner from "../../assets/partner2.jpg";
import price from "../../assets/price.png";
const ProfessionalAdvisory = () => {
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
        <div className="heading-container">
          <h1>
            Do you have any real estate related matters you'd like to get
            clarification, advice, guidance, resolution or rectification?
          </h1>
        </div>
        <div className="heading-paragraph">
          <p>
            {" "}
            For any matter relating to landed properties either for the purpose
            of getting a safe and high yield profitable real estate related
            investments or to clear any subject property against government
            acquisition, title issues, ownership issues, Omo-Onile wahala, uses
            issues, dispute, third party claimants, structural defects etc, we
            affirm our capacity to objectively and professionally advise, guide,
            resolve and rectify any of these matters for you either you're an
            existing or an aspiring real estate investor.
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
        <div
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
        </div>

        <img
          id="firstP"
          style={{ top: "-20px" }}
          className="mt-4"
          src={partner}
          alt="partners"
        />
        {/* </div> */}
        <div className="heading-paragraph">
          <p>
            Whether you are an individual, group, developer company, clubs,
            religious organizations, NGOs or corporate organisation… as long as
            the theme is real estate investments and property developments
            related, let our certified property investment professionals help
            you through
          </p>
        </div>
        <ul className="list-style-decimal">
          <li>One on one online calls</li>
          <li>Physical meetings</li>
          <li>Legal resolutions</li>
          <li>Group advisory/presentation. </li>
          <li>Others </li>
        </ul>
      </section>
      <section>
        <div className=" content-column col-lg-12">
          <p>How it works</p>
          <ul className="list-style-decimal">
            <li>
              Our verification team made up of professionals: Estate Surveyors,
              Land Surveyors, Property Lawyers, Town Planners, Civil Engineers,
              Investigative Journalist, Architects, Builders, Quantity
              Surveyors, etc are set to help individuals and corporate investors
              to verify their land and building of interest before making
              payment for it.{" "}
            </li>
            <li>
              When you allow us to carry out your Real Estate verification, you
              have our assurance for the next 50 years. And, if there is any
              matter that arises after our verification between this period. We
              would refund your investment capital.
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
              <div className="phone-number">
                <a href="tel:+2348094442019 " className="call-link-two">
                  {" "}
                  OR CLICK HERE TO CALL{" "}
                </a>
              </div>
            </li>
          </ul>

          {/* <p style={{ fontWeight: 'bold' }}>
              So how exactly do you know the genuinity of a property?
            </p> */}
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
            <li>A comprehensive examination of all documents</li>
            <li>Confirming other government Property requirements</li>
            <li>Authentication of the claimed title.</li>
            <li>Authenticating the property ownership</li>
            <li>Unveiling any possible third-party ownership claims.</li>
            <li>Unraveling the property history.</li>
            <li>Root of title research</li>
            <li>Checking of taxes or collateral issues</li>
            <li>Checking any internal dispute.</li>
            <li>Examining the Structural state of the interest building.</li>
            <li>Flooding susceptibility check.</li>
            <li>Confirming all documents in relation to the structure.</li>
            <li>Ensure interest land use tally with existing use</li>
            <li>
              Confirming the site plan is in conformity with approved layout
              plan
            </li>
            <li>Confirming all planning tallies with the state master plan.</li>
            <li>Etc</li>
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
          <div className="phone-number">
            <a href="tel:+2348094442019 " className="call-link-one">
              {" "}
              OR CLICK HERE TO CALL{" "}
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-12 pt-5 pb-5 text-white">
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
                  and hence enabling you to make your transaction decisions on
                  time.
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
              14 - 21 working days of physical site inspection with client or
              client's representative.
            </li>
            <li style={{ listStyleType: "decimal" }}>
              VIP delivery of 5 - 10 working days of physical site inspection
              with client or client's representative.
            </li>
          </ul>
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
                    <td className="text">N150,000 / $400</td>
                    <td className="text">N200,000 / $520</td>
                    <td className="text">5% property purchase fee</td>
                  </tr>
                  <tr>
                    <td className="text">With Viable Structure</td>
                    <td className="text">+N50,000/building</td>
                    <td className="text">+N70,000/building</td>
                    <td className="text" />
                  </tr>
                  <tr>
                    <td className="text">Above 1 acre</td>
                    <td className="text">+N20,000/$55 Per Every Extra Acre</td>
                    <td className="text">+N30,000/$80 Per Every Extra Acre</td>
                    <td className="text" />
                  </tr>
                </tbody>
              </table>
            </div>
            <ul style={{ margin: "0px 20px" }} className="list-style-two">
              <li>
                The legal fee is for vetting of closure documents, production of
                Deed of Transfer, execution of the deed, processing of the title
                document in client's name and monitoring it until eventually
                granted.
              </li>
              <li>
                Client pays all government statutory fees as well as other
                ancillary charges relating to Survey and documentation.
              </li>
            </ul>

            <EngageInService />

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

export default ProfessionalAdvisory;
