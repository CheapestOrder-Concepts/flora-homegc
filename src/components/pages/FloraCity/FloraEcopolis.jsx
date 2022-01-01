/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";

import Optin_Trigger from "./Optin_Trigger";
import "./flora.css";
import miniFlat from "../../assets/flora-images/FLA.jpg";
import mezzazine from "../../assets/flora-images/FLB.jpg";
import two_bed from "../../assets/flora-images/FLC.jpg";
import two_bed_duplex from "../../assets/flora-images/FLD.jpg";
import three_bed_flat from "../../assets/flora-images/FLE.jpg";
import three_bed_duplex from "../../assets/flora-images/FLF.jpg";
import header from "../../assets/flora-images/header.jpg";
import rocket from "../../assets/rocket.svg";
import background from "../../assets/background.jpg";
// import gal1 from "../../assets/flora-images/flora-gal1.jpg";
// import gal2 from "../../assets/flora-images/flora-gal2.jpg";
// import gal3 from "../../assets/flora-images/flora-gal3.jpg";
// import gal4 from "../../assets/flora-images/flora-gal4.jpg";
import PaymentDetails from "../../SharedComponents/PaymentDetails";
import OptinModal from "../../SharedComponents/OptinModal";
import OptinForm from "../../SharedComponents/OptinForm";

const FloraEcopolis = () => {
  const [bookingDetail, setbookingDetail] = useState({});

  const EstateListing = ({
    est_img,
    est_title,
    est_sub,
    est_desc,
    feature1,
    feature2,
    feature3,
    feature4,
    feature5,
    feature6,
  }) => (
    <div className="outer-box">
      <div className="estate-contaner">
        <img src={est_img} alt="" />
        <h4 className="estate-title">{est_title}</h4>
        {/* <hr className="estate-rule" /> */}
        <h6 className="estate-sub-title">{est_sub}</h6>
        <p className="estate-desc">{est_desc}</p>
        <ul className="estate-ul">
          <li className="estate-features">{feature1} </li>
          <li className="estate-features" style={{ fontWeight: "bold" }}>
            {feature2}
          </li>
          <li className="estate-features">{feature3}</li>
          <li className="estate-features">{feature4}</li>
          <li className="estate-features">{feature5}</li>
          <li className="estate-features">{feature6}</li>
        </ul>
        <hr className="estate-rule" />
      </div>
    </div>
  );
  return (
    <>
      <section className="banner-meetup">
        <div
          className="bg-pattern"
          style={{ backgroundImage: `url(${header})` }}
        />
        <div className="layer-outer">
          <div className="gradient-layer" />
        </div>
        <div className="auto-container">
          <div className="content-box">
            <div className="address">
              <span className="icon fa fa-map-marker-alt" />
              Switch your living style to this{" "}
            </div>
            <h2>
              <font color="green">Green</font>
              <font color="white">City</font>
            </h2>
            <div className="address">
              {" "}
              with 24/7 zero-combustion electrified luxury smarthomes.{" "}
            </div>
          </div>
          <div className="btn-box">
            <button
              data-toggle="modal"
              data-target="#optinForm"
              className="theme-btn btn-style-two"
            >
              <span className="btn-title">Make Your Reservation Now</span>
            </button>
          </div>
          {/* <div>
            <a
              href="tel:+2348024421356 "
              className="call-enquiry call-link-two"
              style={{ fontSize: "25px" }}
            >
              <h3 className="text-center call-link-one">
                {" "}
                OR CLICK HERE TO CALL +2348024421356
              </h3>
            </a>
          </div> */}
        </div>
      </section>

      <section
        className="welcome mb-5"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="center text-center mt-5">
          {/* <h2>Welcome message </h2> */}
          <div className="content p-3">
            <p className="text-light" style={{ lineHeight: "40px" }}>
              Promoting happiness, resilience and longevity through eco and
              communal living. <br /> Socialise with class and enjoy Green
              Living.
              <br />
              Be part of this{" "}
              <span
                style={{
                  textDecoration: "underline",
                  fontWeight: "400",
                  fontSize: "18px",
                }}
              >
                {" "}
                premium-secured, luxury, energy-efficient, serviced and smart{" "}
              </span>
              Ecopolis. <br /> It’s perfect for live-in, home-away-from-home
              relaxation, and for rentals with up to 25% annual income for
              Nigerians at home and in diaspora.
            </p>
          </div>
        </div>
      </section>
      <div className="vidBox">
        <video width="100%" loop="true" autoPlay="autoplay" controls muted>
          <source
            src="https://flora-media.s3.us-east-2.amazonaws.com/FloraCityvideo.mp4"
            type="video/mp4"
          />
        </video>
      </div>

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
          <div className="row">
            {/* Content Column */}
            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
              <div className="inner-column">
                <div
                  className="sec-title"
                  style={{
                    marginTop: "120px",
                  }}
                >
                  <span className="title">Description</span>
                  {/* <h2>Ultra-Modern Estate <br />in the Heart of Ibeju-Lekki</h2> */}
                  <p className="font-weight-bold">
                    The FloraCity is a luxury residential estate conceptualized
                    to provide homeliness, technology, energy efficiency, class,
                    executive security, recreation, daily needs, and social
                    lives enhanced by community living in a natural ambiance for
                    its occupants.
                  </p>
                </div>

                {/* <div className="btn-box"><a href="https://docs.google.com/forms/d/e/1FAIpQLSe9tp_xEJnKY2yitoCzRp7t6oj9yKF_Y2M6uzQ7nvoFzu6GHw/viewform" className="theme-btn btn-style-three"><span className="btn-title">Download  Our ebrochure here</span></a></div> */}
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="image-box">
                <figure
                  className="image wow fadeIn animated"
                  style={{ visibility: "visible", animationName: "fadeIn" }}
                >
                  <img src={header} alt="Overview" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="subplan-section">
        <div className="auto-container">
          <div className="sec-title mb-4  text-center">
            <h2>Apartment Options With Prices </h2>
          </div>
          <EstateListing
            est_img={miniFlat}
            est_title="A. Mini Apartment"
            est_sub="1 Bedroom Luxury-Finished Apartment"
            est_desc=" A finely balanced and spacious home , this mini apartment features a
          living room, guest wc, a balcony, an open and fully fitted kitchen, a
          bedroom and a well equipped bathroom."
            feature1="• Upper floor: N500,000 extra."
            feature2="● Price: N17.5m"
            feature3="• Legal Documentation: 5% "
          />
          <EstateListing
            est_img={mezzazine}
            est_title="B. Mezzanine Apartment"
            est_sub="  1 Bedroom Mezzanine Luxury-finished Apartment"
            est_desc=" Truly stunning to behold, this mezzanine home features a living room, guest wc, an open 
            and fitted Kitchen, backyard terrace and garden, a private open sit-out, a first floor balcony 
            and a suspended-floor ventilated bedroom with a well equipped bathroom.
            "
            feature1="• Corner piece: N1000,000 extra.
            "
            feature2="• Price: N23m"
            feature3="• Legal Documentation: 5% "
          />
          <EstateListing
            est_img={two_bed}
            est_title="C. 2 Bedroom Flat"
            est_sub="   2 Bedrooms Luxury-finished Apartment"
            est_desc=" You see this right here? It is the definition of beauty and eco lifestyle. It features a ventilated 
            living room with terrace, guest wc, an open and fully fitted Kitchen, 2 spacious and well 
            ventilated rooms with their individual fitted bath and wardrobe.
            
            "
            feature1="• Upper floor: N500,000 extra.

            "
            feature2="• Price: N27m "
            feature3="• Legal Documentation: 5% "
          />
          <EstateListing
            est_img={two_bed_duplex}
            est_title="D. 2 Bedrooms Duplex"
            est_sub="   2 Bedrooms Luxury-finished Duplex"
            est_desc=" Breathtaking is it right? This stunning 2 bedrooms duplex features a well ventilated living room with 
            balcony, a study, guest wc, an open and fully fitted Kitchen, backyard garden, a private open sit-out, 2 
            spacious bedrooms with their respective fully fitted bathrooms, balconies, and wardrobes. 
            
            "
            feature1="• Corner piece: N1,000,000 extra.


            "
            feature2="• Price: N33m    "
            feature3="• Legal Documentation: 5% "
          />
          <EstateListing
            est_title={"E. 3 Bedroom Flat"}
            est_sub={"3 Bedrooms Luxury-finished Apartment"}
            est_img={three_bed_flat}
            est_desc="What you see right here is the definition of beauty, luxury and a green lifestyle with trees
            planted at different positions to maximise air circulation. It features a ventilated living room with
            terrace, guest wc, an open and fully fitted Kitchen, 3 spacious and well ventilated rooms with
            their individual fitted bath and wardrobe."
            feature1={"• Upper floor: N500,000 extra."}
            feature2={"• Price: N37m "}
            feature3={"• Legal Documentation: 5%             "}
          />
          <EstateListing
            est_title={"F. 3 Bedrooms Duplex "}
            est_sub={
              "3 Bedroom fully finished luxury terrace duplex with a study."
            }
            est_img={three_bed_duplex}
            est_desc="We're actually short of words to describe this state of the heart massive 3 bedrooms duplex featuring
            a well ventilated living room with balcony, a spacious BQ, a study, guest wc, an open and fully fitted
            Kitchen, backyard garden, a private open sit-out, 3 spacious bedrooms with their respective fully
            fitted bathrooms, balconies, and wardrobes."
            feature1="• Corner piece: N1,000,000 extra.
            "
            feature2={"• Price: N43m "}
            feature3="• Legal Documentation: 5% 
            "
          />
          <EstateListing
            est_title={"G. Ecopolis Serviced Plots  "}
            feature1={"• Size: 450sqm"}
            feature2={"• Price: N10m "}
            feature3={"• Initial Deposit: N2.5m"}
            feature4={"• Payment Plan: N625,000 monthly"}
            feature5={"• Payment Duration: 12 months"}
            feature6={"• Documentation fee: N1,000,000"}
          />
        </div>
      </section>

      <section className="features-section-three no-pd-top">
        <div className="auto-container">
          <div className="row">
            {/* Content Column */}
            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="title">FEATURES AND FACILITIES</span>
                  {/* <h2>Why Buy Property in The Fern Island?</h2> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Feature Block */}
            <div className="feature-block-three col-lg-6 col-md-12 col-sm-12">
              <ul className="list-style-one">
                <li>
                  Recreation area: Private Swimming pool, Snooker, table-tennis
                  etc.
                </li>
                <li>Each apartment with terrace and well ventilated rooms .</li>
                <li>Village Kitchen (to order freshly prepared food).</li>
                <li>Mart (Mart, grocery and first aid) .</li>
                <li>24/7 Executive Security System.</li>
                <li>24/7 data service.</li>
                <li>Sewage system.</li>
                <li>Open sit-out.</li>
                <li>Gym.</li>
                <li>Crèche.</li>
                <li>Children library.</li>
              </ul>
            </div>
            {/* Feature Block */}
            <div className="feature-block-three col-lg-6 col-md-12 col-sm-12">
              <ul className="list-style-one">
                <li>Children play area.</li>
                <li>Fully fitted Kitchen.</li>
                <li>Central Water System.</li>
                <li>Central Car Parking area.</li>
                <li>Perimeter fence and gatehouse.</li>
                <li>Management/ Maintenance office.</li>
                <li>24/7 Zero-combustion Electricity Supply.</li>
                <li>Nature design Landscaping with palm trees .</li>
                <li>Affordable Luxury, smart & energy efficient homes.</li>
                <li>
                  Fitted bathroom with modern bathtub, water heater and shower.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="register-section" id="reserve">
        <div className="auto-container">
          <div className="anim-icons full-width">
            <span
              className="icon icon-circle-3 wow zoomIn animated animated"
              style={{ visibility: "visible", animationName: "zoomIn" }}
            />
          </div>
          <div className="outer-box">
            <div className="row no-gutters align-items-center">
              <div className="title-column col-lg-4 col-md-6 col-sm-12">
                <div className="inner">
                  <div className="sec-title light">
                    <div className="icon-box">
                      {/* <span className="icon flaticon-rocket-ship" /> */}
                      <figure>
                        <img
                          style={{ objectFit: "contain", width: "100px" }}
                          src={rocket}
                          alt=""
                        />
                      </figure>
                    </div>
                    <span className="title">Few Space Remaining...</span>
                    <h2>Reserve Now!!!</h2>
                    <div className="text">
                      Fill and Submit the form to reserve plot(s) of land or
                      building.
                    </div>
                  </div>
                </div>
              </div>
              {/*Register Form*/}
              <div className="register-form col-lg-8 col-md-6 col-sm-12">
                <div className="form-inner text-center">
                  <Optin_Trigger onSubmit={""} />
                  {/* <a
                    href="tel:+2348024421356 "
                    className="call-enquiry call-link-three"
                    style={{ fontSize: "25px" }}
                  >
                    {" "}
                    OR CLICK HERE TO CALL +2348024421356{" "}
                  </a> */}
                  {/* <div class="btn-box ml-3"></div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <OptinModal
        bookingDetail={bookingDetail}
        setbookingDetail={setbookingDetail}
        componentId="optinForm"
        title="PLEASE ENTER YOUR CORRECT DETAIL AND YOU'LL BE CONTACTED"
        component={<OptinForm />}
      />
      <PaymentDetails />
      {/* <Footer/> */}
    </>
  );
};

export default FloraEcopolis;
