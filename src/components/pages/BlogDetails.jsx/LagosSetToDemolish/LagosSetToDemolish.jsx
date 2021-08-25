import React from 'react';
import { Link } from 'react-router-dom';

import blog1 from "../../../assets/blog1.jpg"
import blogheader from "../../../assets/blogheader.png"
import Comment from '../Comments/Comment';
import CommentForm from '../Comments/CommentForm';
import Sidebar from '../Sidebar/Sidebar';
const LagosSetToDemolish = () => {
    return (
        <>
            <section className="page-title" style={{ backgroundImage: `url(${blogheader})` }}>
                <div className="auto-container"><br /><br /><br />
                    <h1>Blog Single</h1>
                    <ul className="bread-crumb clearfix">
                        <li><Link to="/">Home</Link></li>
                        <li>Blog Single</li>
                    </ul>
                </div>
            </section>
            {/*End Page Title*/}

            {/*Sidebar Page Container*/}
            <div className="sidebar-page-container">
                <div className="auto-container">
                    <div className="row clearfix">
                        {/*Content Side / Blog Sidebar*/}
                        <div className="content-side col-lg-8 col-md-12 col-sm-12">
                            <div className="blog-single">
                                {/* News Block Three */}
                                <div className="news-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src={blog1} alt="" /></figure>
                                        </div>
                                        <div className="lower-content">
                                            <ul className="post-info">
                                                <li><span className="far fa-user" />
                                                    FLORAHOMES ADMIN
                                                </li>
                                                <li><span className="far fa-comments" /> Comments</li>
                                            </ul>
                                            <h1 style={{ textAlign: 'left', color: 'black' }}>
                                                <b>Lagos Set To Go Digital in Land Related Services Come 2021</b>
                                            </h1>
                                            <p style={{ color: 'gray', textAlign: 'left' }}>
                                                by FlorahomesGC | Real Esate - Real Story
                                            </p>
                                            <p style={{ textAlign: 'left' }}>Posted On: May 20, 2019</p>
                                            <br />
                                            <p style={{ color: 'black', textAlign: 'justify' }}>
                                                Governor Babajide Sanwo-Olu, on Wednesday at the opening ceremony of the maiden edition of Real Estate Marketplace Conference and Exhibition, which took place at Eko Hotel and Suites, Victoria Island, said that Land transactions including application and payment for C of O and Planning Permits would now be available online.
                                                He expressed his belief that the automation of Land-related services would hasten the approval process while enhancing Investors’ confidence.

                                            </p>

                                            <p style={{ color: 'black', textAlign: 'justify' }}>
                                                He mentioned that the Land Bureau has concluded plans for migrating from the present traditional mode of operation to a digital platform and when the web-based platform becomes operational, there would be no need for stakeholders seeking Certificate of Occupancy, Survey registration, or Building plan approval to appear physically at the Physical Planning Office for document submission but could get all that done at the comfort of their homes.

                                            </p>

                                            <p style={{ color: 'black', textAlign: 'left' }}>
                                                “Real Estate and Property Development has become a strong enabler that can help us transform the GDP of the State and by extension the Country. The Real Estate economy and its opportunity in Lagos are boundless but everything is just an opportunity waiting to be exploited if we don’t sit together and create a bucket in which we realize that different people have different roles to play.”

                                            </p>
                                            <p style={{ color: 'black', textAlign: 'justify' }}>

                                                “We need to do a better job of Physical Planning, we need to do a better job of LASBCA and we need to do a quick turnaround in our Land departments”.


                                            </p>

                                            <p style={{ color: 'black', textAlign: 'justify' }}>
                                                “We have started it, we have a solution on this GIS for a while, and it’s a project we are desirous to live on. Once it kick-starts, what it means is that it’s a one-stop shop. With it, you will be able to get your governor’s consent, approval, and Certificate of Occupancy (C of O) on time, as well as all of the documentation for a subsequent transaction.” He said.

                                                The Governor emphasized that his administration is committed to mass housing through a partnership with private investors.
                                            </p>
                                            <p style={{ color: 'black', textAlign: 'left' }}>
                                                “We have given our commitment to this, because of the need to improve the turnaround time from when people submit their requests for approval and the time the authorization is completed. We cannot afford to disappoint private investors and applicants seeking real-time approval. We are raising our capacity so that we respond to requests and discharge them.”

                                            </p>

                                            <p style={{ color: 'black', textAlign: 'justify' }}>
                                                Furthermore, he charged real estate investors to consider investing on the mainland and not just Ibeju-Lekki, so as to redistribute wealth and create opportunities for Citizens. He also warned against unscrupulous practices in the Land Bureau Departments.

                                            </p>
                                            <p style={{ color: 'black', textAlign: 'left' }}>
                                                As a property verification and Real Estate Investment Company, FloraHomesGC would continue to work assiduously with Lagos State Government, Land Bureau, and other Property-related Ministries to ensure that investors and buyers get secure, sterling, and seamless services in Real Estate and Property Development across the mainland axis too by 2021. This is what we are committed to delivering to ensure profitable and loss-free investments not just on the Island, but to every location within and beyond Lagos state.


                                            </p>
                                        </div>
                                        <div className="content">
                                            <hr className="bg-primary pt-1" />
                                            <h2 className="mt-3" style={{ color: '#551584' }}>WHO WE ARE AND SERVICES WE OFFER!</h2>
                                            <p style={{ color: 'black' }}>
                                                We are FloraHomes Global Consult Ltd., a Property Verification and Real Estate Investment company that gives professional end
                                                to end Real Estate and Property Development services as seen below. Our team include but not limited to; Land Surveyors,
                                                Estate Surveyors, Town Planners, Property Lawyers, Quantity Surveyors, Civil Engineers, Architects . . .
                                            </p>
                                            <Link  to ="/about" type="button" className="theme-btn btn-style-four mt-3 investment_modal_btn mb-4"> <span className="btn-title">To know more about us, continue reading</span> </Link>
                                            <hr className="bg-primary" />

                                            {/* point 10 */}
                                            <div className="our-servies mt-1 pb-4">
                                                <div className="sec-title py-3">
                                                    <h2 style={{ marginBottom: '0px' }}>ARE YOU READY TO GET OUR SERVICE? </h2>
                                                </div>
                                                <ul className="list-style-one">
                                                    <p className="text" style={{ marginLeft: '10px' }}>
                                                        If you would like to talk to us online or book a physical meeting appointment based on any of our product options
                                                        available OR PERHAPS you have a customized service request, fill in the short brief below to allow our team to contact you
                                                        for further discussion.
                                                    </p>
                                                    <br />
                                                    <a style={{ marginLeft: '10px' }} className="btn-hover color-6" href="https://docs.google.com/forms/d/e/1FAIpQLSc8rf7DAg4Wb4-ghqM-IVMXglwR-M_CwMjLd3d3_sdeGUaxKA/viewform?usp=pp_url">Custom
                                                        service request</a>
                                                    <br />
                                                    <blockquote className="newbq" style={{ marginLeft: '10px' }}>
                                                        We will listen to your brief and let you access the best property service care you can get.
                                                        <br />
                                                        Click the link below to book a call/meeting and we will be right with you within a short period.
                                                    </blockquote>
                                                    <br />
                                                    <a style={{ marginLeft: '10px' }} className="btn-hover color-6" href="https://docs.google.com/forms/d/e/1FAIpQLSc8rf7DAg4Wb4-ghqM-IVMXglwR-M_CwMjLd3d3_sdeGUaxKA/viewform?usp=pp_url">Book
                                                        a call/meeting</a>
                                                </ul>
                                            </div>
                                        </div>
                                        <hr className="bg-primary" />
                                        <div className="mt-4">
                                            <div className="card mb-4">
                                                <div className="card-header border-0">
                                                    <h6>DISCLAIMER</h6>
                                                </div>
                                                <div className="card-body">
                                                    <p className="text">This information is part of the "Preventing Real Estate Losses" project By FloraHomes Global Consult Limited
                                                        professional team. <br />They're reliable and very valuable, created with utmost simplicity to educate and enlighten the
                                                        public on how not to fall into property loss of any kind. We specifically disclaim any liability that is incurred from the
                                                        misuse, misinterpretation or wrong application of this content and any other information found on this platform.<br />Also,
                                                        comments expressed here do not reflect the opinions of FloraHomesGC.com or any employee thereof.</p>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header border-0">
                                                    <h6>COPYRIGHT</h6>
                                                </div>
                                                <div className="card-body">
                                                    <p className="text">We highly encourage sharing and educating others with this content. However, you must do so by always giving
                                                        copyright ownership to FloraHomesGC.com </p>
                                                    <p className="text">ALL RIGHTS RESERVED. THIS CONTENT AND ANY OTHERS ON THIS PLATFORM SHOULD NOT BE PLAGIARIZED, WHETHER PARTLY,
                                                        WHOLLY, LINES, PHRASES, PARAGRAPHS… DIGITALLY, PRINT OR IN ANY FORM, EXCEPT BY ACCREDITING THE COPYRIGHT TO
                                                        FLORAHOMESGC.COM</p>
                                                </div>
                                            </div>
                                        </div>                          </div>
                                </div>
                                <div className="comments-area" id="comment-view">
        <div className="comment-form my-4">
          <div className="group-title">
            <h3>Leave a comment</h3>
          </div>
                                <Comment user="layinton" message="nice one"/>
                            <CommentForm/>
                            </div>{/* /.comment-section */}
      </div>
                            </div>
                        </div>

                       <Sidebar/>
                    </div></div></div>

                    

        </>
    );
}

export default LagosSetToDemolish;
