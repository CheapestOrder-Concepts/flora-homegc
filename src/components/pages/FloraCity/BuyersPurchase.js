import React from 'react';

import floracity_8 from "./FloraAssets/floracity_8.jpg"
import Card from './Card';
const BuyersPurchase = () => {
    const handleReadMore = () => {
        let dots = document.getElementById("buy-dots");
        let moreText = document.getElementById("buy-read-more");
        let btnText = document.getElementById("buy-btn");
    
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
            <ul className="flora ul" >
            <li className="flora li decimal">Sole Ownership: </li>
            <ol className="flora ul pl-4 ownership">
                <li className="flora li alpha" > Outright Payment: Pay fully for any of the apartments to own the
                    property for life with the title document in your name while you
                    decide whether to live-in, resell, short let, or give it out on annual
                    rental options.</li>
                <li className="flora li alpha"> Installment Payment: Make an initial deposit of N2.5m minimum
                    while spreading the balance over 12 months at zero interest. Once
                    your money is complete, you own the property for life with the title
                    document in your name while you decide whether to live-in, resell,
                    short let, or give it out on annual rental options just as the option a.
                    above. </li>
            </ol>  <span id="buy-dots">...</span>
            <span style={{display:"none"}} id="buy-read-more">
            <li className="flora li decimal">Own-Earner Partnership </li>
            <ol className="flora ul pl-4 ownership">
                <li className="flora li alpha">Make a one time payment of N2.5m minimum to co-own an
                    apartment and earn up to 25% annual rental income for life.</li>
                <li className="flora li alpha"> Make a one time payment of N500,000 minimum to co-own an
                    apartment and earn up to 30% one time reselling profit after project
                    completion.</li>

            </ol>
            </span>
        </ul>
            <button className=" text-light btn bn-lg" onClick={handleReadMore} id="buy-btn">Read more</button> 
            </>
        )
            }
    return (
        // <div>
            <Card  height={"250px"} image={floracity_8} imageAlt="buyers_purchase" headline1="BUYERS’ PURCHASE OPTIONS" MainMessage={MainMessage} />
        //     <section className="sec1-main">
        //         <div className="container-fuid">
        //             <div className="flora row">
        //                 <div className="col-lg-7 image">
        //                     <img className="img-fluid" src={floracity_7} alt="img_4" />
        //                 </div>
        //                 <div className="col-lg-5 m-auto pl-5 pr-5 pt-0 align-middle justify-center text-left text-tile">
        //                     <h2 className="text-light font-weight-bolder">BUYERS’ PURCHASE OPTIONS </h2>
        //                     <br />
        //                     <ul className="flora ul" >
        //                         <li className="flora li decimal">Sole Ownership: </li>
        //                         <ol className="flora ul pl-4 ownership">
        //                             <li className="flora li alpha" > Outright Payment: Pay fully for any of the apartments to own the
        //                                 property for life with the title document in your name while you
        //                                 decide whether to live-in, resell, short let, or give it out on annual
        //                                 rental options.</li>
        //                             <li className="flora li alpha"> Installment Payment: Make an initial deposit of N2.5m minimum
        //                                 while spreading the balance over 12 months at zero interest. Once
        //                                 your money is complete, you own the property for life with the title
        //                                 document in your name while you decide whether to live-in, resell,
        //                                 short let, or give it out on annual rental options just as the option a.
        //                                 above. </li>
        //                         </ol>
        //                         <li className="flora li decimal">Own-Earner Partnership </li>
        //                         <ol className="flora ul pl-4 ownership">
        //                             <li className="flora li alpha">Make a one time payment of N2.5m minimum to co-own an
        //                                 apartment and earn up to 25% annual rental income for life.</li>
        //                             <li className="flora li alpha"> Make a one time payment of N500,000 minimum to co-own an
        //                                 apartment and earn up to 30% one time reselling profit after project
        //                                 completion.</li>

        //                         </ol>
        //                     </ul>

        //                     <br />
        //                     <br />

        //                 </div>

        //             </div>
        //         </div>

        //     </section>
        // </div>
    );
}

export default BuyersPurchase;
