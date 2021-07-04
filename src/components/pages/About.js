import React from 'react';

import "../../css/About.css"
import PageTitle from '../layouts/PageTitle';
import workers from "../assets/workers.jpg"
import mdspeech1 from "../assets/mdspeech1.jpg"

const About = () => {
    return (
        <div>
            <PageTitle pageTitle="About Us" pageLink="about" />

            {/* About company*/}
            <section className="about-section">
                <div className="anim-icons full-width">
                    <span className="icon icon-circle-blue wow fadeIn animated" style={{ visibility: 'visible', animationName: 'fa-spin' }} />
                    <span className="icon icon-dots wow fadeInleft animated" style={{ visibility: 'visible' }} />
                    <span className="icon icon-circle-1 wow zoomIn animated" style={{ visibility: 'visible', animationName: 'zoomIn' }} />
                </div>
                <div className="auto-container">
                    <div className="row">
                        {/* Content Column */}
                        <div className="content-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="title">FloraHomes Global Consult Limited</span>
                                    <h2>About the company</h2>
                                    <div className="text">
                                        FloraHomes Global Consult Limited is a property verification and real estate investment company with a mission
                                        to prevent real estate losses. Our team of professionals include; Land Surveyors, Estate Surveyors, Town
                                        Planners, Quantity Surveyors, Architects, Civil Engineers, Property Lawyers, Researchers, etc
                    </div>
                                    <div className="text">
                                        We provide specialized real estate and property development services including Verification, Negotiation,
                                        Property Purchase, Documentation, Survey, Valuation, Architectural Design, Building Construction, Property
                                        Management, Real Estate Investment Management as well as sales of its Estate properties throughout Nigeria.
                    </div>
                                    <div className="text">
                                        We are a private limited liability company with RC number 1536444, and we're insured with one of the top ten
                                        Nigeria Insurance Company. To know more about us
                    </div>
                                </div>
                                <div className="btn-box"><a href="https://drive.google.com/file/d/1cDpJe5b58-wujmhCfo_ZcoxEcWZNrxPu/view?usp=drivesdk" className="theme-btn btn-style-three"><span className="btn-title">Downlaod company profile</span></a></div>
                            </div>
                        </div>
                        {/* Image Column */}
                        <div className="image-column col-lg-6 col-md-12 col-sm-12 mt-5 pt-5 d-none d-sm-block">
                            <div className="image-box">
                                <figure className="image wow fadeIn animated" style={{ visibility: 'visible', animationName: 'fadeIn' }}><img src={workers} alt="" /></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end about company */}

            {/*End Story Section */}
            {/* Vision */}
            <section className="py-5 my-5">
                <div className="auto-container">
                    <div className="content-box text-center">
                        <h2 className="text-primary">Our Vision</h2>
                        <div className="text text-primary">The Focal Point of Secure, Sterling &amp; Seamless services in Real Estate and Property
                development.</div>
                    </div>
                </div>
            </section>
            {/* End Vision */}

            {/* Story Section */}
            <section className="story-section" style={{ backgroundImage: `url(${mdspeech1})` }}>
                <div className="auto-container">
                    <div className="content-box">
                        <h2>OUR STORY</h2>
                        <h5 className="text-white"><em>Message From Our MD:</em></h5>
                        <p className="text-white text-justify mt-3">
                            Some years back, I happened to be supervising a half project; half because I was only invited to complete the project
                            together with some other existing labourers on site after the owner of this project found out he had been duped
                            severely.
                            Contrary to my professional practice as a project manager as well as a Real Estate Surveyor and Valuer, I saw
                            labourers inflating the cost of materials, and even stealing from the materials supplied by the owner.
                            I would go to the market to negotiate and get the best price for my client, remitting all available excess funds. I
                            worked diligently to monitor and manage this project until completion.
                            When I wanted to hand over this project to the owner, I was shocked with his response when he was about to pay me…
                <a href="https://drive.google.com/file/d/1cDpJe5b58-wujmhCfo_ZcoxEcWZNrxPu/view?usp=drivesdk" className="text-warning">Download Our Profile</a> To Continue Reading and Know Why We Are Different Despite Many Fishes
                In The River
              </p>
                        <div className="btn-box"><a href="https://drive.google.com/file/d/1cDpJe5b58-wujmhCfo_ZcoxEcWZNrxPu/view?usp=drivesdk" className="theme-btn btn-style-three"><span className="btn-title">Downlaod company profile</span></a></div>
                    </div>
                </div>
            </section>



        </div>
    );
}

export default About;
