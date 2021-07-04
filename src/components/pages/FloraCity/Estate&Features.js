import React from 'react';
import ReadMoreReact from 'read-more-react';

import floracity_4 from "./FloraAssets/floracity_4.jpg"
import Card from './Card';
// import { handleReadMore } from './ReadMore';
const EstateAndflora  = () => {
    const handleReadMore = () => {
        let dots = document.getElementById("dots");
        let moreText = document.getElementById("more");
        let btnText = document.getElementById("myBtn");
    
        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
        }}
    const MainMessage = () =>{
        return (
            <>
            
            <ul className="flora ul">
            <li className=" flora li text-light"> Recreation area: Private Swimming pool, Snooker, basketball, etc.</li>
            <li className=" flora li text-light">  Each apartment with terrace and well ventilated rooms .</li>
            <li className=" flora li text-light"> Village Kitchen (to order freshly prepared food).</li>
            <span id="dots">...</span>
            <span style={{display:"none"}} id="more">
            <li className=" flora li text-light">  4 blocks of mezzanine luxury apartments.</li>
            <li className=" flora li text-light"> Mart (Mart, grocery and first aid) .</li>
            <li className=" flora li text-light">  24/7 Executive Security System.</li>
            <li className=" flora li text-light">  Gross Estate Area: 8000 sqm.</li>
            <li className=" flora li text-light">  24/7 data service.</li>
            <li className=" flora li text-light">  24/7 Electricity .</li>
            <li className=" flora li text-light">  Open sit-out.</li>
            <li className=" flora li text-light">  Gym.</li>
            <li className=" flora li text-light"> Sewage system.</li>
            <li className=" flora li text-light"> Fully fitted Kitchen.</li>
            <li className=" flora li text-light">  Central Water System.</li>
            <li className=" flora li text-light">  Central Car Parking area.</li>
            <li className=" flora li text-light"> Perimeter fence and gatehouse.</li>
            <li className=" flora li text-light"> Management/ Maintenance office.</li>
            <li className=" flora li text-light"> 4 blocks of mini-flats luxury apartments.</li>
            <li className=" flora li text-light"> Nature design Landscaping with palm trees .</li>
            <li className=" flora li text-light"> Affordable Luxury, smart & energy efficient homes.</li>
            <li className=" flora li text-light">  Fitted bathroom with modern bathtub, water heater and shower.</li>
</span>
        </ul>
        <button className=" text-light btn bn-lg" onClick={handleReadMore} id="myBtn">Read more</button> 
        </>
        )
            }
    return (
        <Card image={floracity_4} imageAlt="floracity_4" headline1="Estate flora ul and Facilities " MainMessage={MainMessage}/>
        // <div>
        //     <section className="sec1-main">
        //         <div className="container-fuid">
        //             <div className="flora row">
        //                 <div className="col-lg-7 image">
        //                     <img className="img-fluid" src={floracity_4} alt="img_4" />
        //                 </div>
        //                 <div className="col-lg-5 m-auto pl-5 pt-0 align-middle text-left text-tile">
        //                     <h2 className="text-light font-weight-bolder">Estate flora ul and Facilities </h2>
        //                     <br />
                        //    <ul className="flora ul">
                        //        <li className=" flora li text-light"> Recreation area: Private Swimming pool, Snooker, basketball, etc.</li>
                        //        <li className=" flora li text-light">  Each apartment with terrace and well ventilated rooms .</li>
                        //        <li className=" flora li text-light"> Village Kitchen (to order freshly prepared food).</li>
                        //        <li className=" flora li text-light">  4 blocks of mezzanine luxury apartments.</li>
                        //        <li className=" flora li text-light"> Mart (Mart, grocery and first aid) .</li>
                        //        <li className=" flora li text-light">  24/7 Executive Security System.</li>
                        //        <li className=" flora li text-light">  Gross Estate Area: 8000 sqm.</li>
                        //        <li className=" flora li text-light">  24/7 data service.</li>
                        //        <li className=" flora li text-light">  24/7 Electricity .</li>
                        //        <li className=" flora li text-light">  Open sit-out.</li>
                        //        <li className=" flora li text-light">  Gym.</li>
                        //        <li className=" flora li text-light"> Sewage system.</li>
                        //        <li className=" flora li text-light"> Fully fitted Kitchen.</li>
                        //        <li className=" flora li text-light">  Central Water System.</li>
                        //        <li className=" flora li text-light">  Central Car Parking area.</li>
                        //        <li className=" flora li text-light"> Perimeter fence and gatehouse.</li>
                        //        <li className=" flora li text-light"> Management/ Maintenance office.</li>
                        //        <li className=" flora li text-light"> 4 blocks of mini-flats luxury apartments.</li>
                        //        <li className=" flora li text-light"> Nature design Landscaping with palm trees .</li>
                        //        <li className=" flora li text-light"> Affordable Luxury, smart & energy efficient homes.</li>
                        //        <li className=" flora li text-light">  Fitted bathroom with modern bathtub, water heater and shower.</li>

                        //    </ul>
        //                     <br />
        //                     <br />

        //                 </div>

        //             </div>
        //         </div>

        //     </section>
        // </div>
    );
}

export default EstateAndflora ;
