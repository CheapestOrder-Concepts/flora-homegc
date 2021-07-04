import React from 'react';
import { Link } from 'react-router-dom';

import "./Styles.css"
import floracity_6 from "./FloraAssets/floracity_6.jpg"

import Section1 from './Section1';
import Description from './Description&Location';
import EstateAndFeatures from './Estate&Features';
import PriceOffer from './PriceOffer';
import MezzanineApartment from './MezzanineApartment';
import MiniApartment from './MiniApartment';
import BuyersPurchase from './BuyersPurchase';
import HowToOwnOne from './HowToOwnOne';
import ContactUS from './ContactUs';
import UPS from './UPS';
import PercentageRentals from './PercentageRental';
import PercentageRentalB from './PercentageRentalB';
import FAQ from './Faqs/FAQs';
import GroundFloor from './GroundFloor';
import FloraMap from './FloraMap';
import FirstFloor from './FirstFloor';
import TypicalFloorMiniFlat from './TypicalFloorMiniFlat';
import ImageCarousel from './ImageCarousel';
import ThankYou from './ThankYou';
const FloraCity = () => {
    return (
        <>
            {/* <PageTitle pageTitle="Floracity" /> */}

            <section className="page-title" style={{ backgroundImage: `url(${floracity_6})` }}>
                <div className="auto-container">
                    <h1>FloraCity</h1>
                    <ul className="bread-crumb clearfix">
                        <li><Link to="/">home</Link></li>
                        <li><Link to="/flora">flora</Link></li>
                    </ul>
                </div>
            </section>
            <br />
            <hr />
            <br />

            <div className="outer-box">
                <div className="row">

              
          
                <Section1 />
           
             <br/>
                <Description />
                <br/>
                <FloraMap/>
                <br/>
                <EstateAndFeatures/>
                <br/>
                <PriceOffer/>
              
                <br/>
            <MezzanineApartment/>
            <br/>
                <MiniApartment/>
                <br/>
                <BuyersPurchase/>
                <br/>
                <HowToOwnOne/>
                <br/>
                <ContactUS/>
                <br/>
                <UPS/>
                <br/>
                <PercentageRentals/>
                <br/>
                <PercentageRentalB/>
                <br/>
                <FAQ/>
                <br/>
                <GroundFloor/>
                <br/>
                <FirstFloor/>
                <br/>
                <TypicalFloorMiniFlat/>
                <br/>
                <ImageCarousel/>
                <br/>
                <ThankYou/>
                </div>
            </div>
         
            
        </>
    );
}

export default FloraCity;
