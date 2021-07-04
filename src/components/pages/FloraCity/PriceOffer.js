import React from 'react';

import floracity_4 from "./FloraAssets/floracity_4.jpg"
import Card from './Card';
const PriceOffer = () => {
    const MainMessage = () =>{
        return (
            <ul className="flora ul">
            <li className="flora li text-light"> Payment duration for the normal price: 1 - 12 months. </li>
            <li className="flora li text-light">  Off Plan offer closes by July 30th, 2021.</li>
            <li className="flora li text-light"> The Off Plan prices as seen here are only valid for the
                first 10 subscribers. Once the construction has
                commenced, prices will be upwardly reviewed to the
                market price. </li>
           
        </ul>
        )
            }
    return (
        <Card image={floracity_4} headline1="Price Offer"  MainMessage={MainMessage}/>
        // <div>
        //     <section className="sec1-main">
        //         <div className="container-fuid">
        //             <div className="flora row">
        //                 <div className="col-lg-5 m-auto pl-5 pt-0 align-middle text-left text-tile">

        //                     <h2 className="text-light font-weight-bolder">Price Offer</h2>
        //                     <br />
                            // <ul className="flora ul">
                            //     <li className="flora li text-light"> Payment duration for the normal price: 1 - 12 months. </li>
                            //     <li className="flora li text-light">  Off Plan offer closes by July 30th, 2021.</li>
                            //     <li className="flora li text-light"> The Off Plan prices as seen here are only valid for the
                            //         first 10 subscribers. Once the construction has
                            //         commenced, prices will be upwardly reviewed to the
                            //         market price. </li>
                               
                            // </ul>
        //                 </div>
        //                 <div className="col-lg-7 image">
        //                     <img className="img-fluid" src={floracity_4} alt="img_4" />
        //                 </div>
        //             </div>
        //         </div>

        //     </section>
        // </div>
    );
}

export default PriceOffer;
