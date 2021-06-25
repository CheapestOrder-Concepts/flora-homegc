/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
// import { Link } from 'react-router-dom';


import '../../css/Contact.css'
import PageTitle from '../layouts/PageTitle';
import LorR from './LorR';
const Contact = () => {
    return (
        <div>
        <PageTitle pageTitle="Contact Us" pageLink="contact"/>

 {/* Contact Page Section */}
 <section className="contact-page-section">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="contact-column col-lg-4 col-md-12 col-sm-12 order-2">
              <div className="inner-column">
                <div className="sec-title">
                  <h2>Contact Info</h2>
                </div>
                <ul className="contact-info">
                  <li>
                    <span className="icon fa fa-map-marker-alt" />
                    <p><strong>Suite 6, U-Mudi Filling Station, </strong></p>
                    <p>Lekki-Epe Express, Ibeju-Lekki, Lagos.</p>
                  </li>
                  <li>
                    <span className="icon fa fa-phone-volume" />
                    <p><strong>Call Us</strong></p>
                    <p>+234 809 444 2019</p>
                  </li>
                  <li>
                    <span className="icon fa fa-envelope" />
                    <p><strong>Mail Us</strong></p>
                    <p><a href="mailto:hello@florahomesgc.com">hello.florahomesgc@gmail.com</a></p>
                  </li>
                  <li>
                    <span className="icon fa fa-clock" />
                    <p><strong>Available 24/7 Online</strong></p>
                    <p>For Call: Mon - Sat (8am to 6pm)</p>
                  </li>
                </ul>
                
                <ul className="social-icon-two social-icon-colored">
                  <li><a href="https://www.facebook.com/florahomesgc" target="_blank"><i className="fab fa-facebook-f" style={{color:"#3C599F"}}/></a></li>
                  <li><a href="https://www.twitter.com/florahomesgc" target="_blank"><i className="fab fa-twitter"  style={{color:"#32CCFE"}}/></a></li>
                  <li><a href="https://www.instagram.com/florahomesgc" target="_blank"><i className="fab fa-instagram"  style={{color:"#A1755C"}}/></a></li>
                  <li><a href="https://youtube.com/channel/UCWnEctNYFxyXrzthXvsxizg" target="_blank"><i className="fab fa-youtube"  style={{color:"#C52F30"}}/></a></li>
                  <li><a href="https://www.linkedin.com/in/florahomesgc" target="_blank"><i className="fab fa-linkedin" style={{color:"#0085AE"}}/></a></li>
                </ul>
              </div>
            </div>
          
            <div className="form-column col-lg-8 col-md-12 col-sm-12">
              <div className="inner-column">
                 <LorR/>         
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End Contact Page Section */}


        </div>
    );
}

export default Contact;
