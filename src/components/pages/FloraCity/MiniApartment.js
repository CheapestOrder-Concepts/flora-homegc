import React from 'react';

import floracity_7 from "./FloraAssets/floracity_7.jpg"
import Card from './Card';
const MiniApartment = () => {
    const MainMessage = () => {
        return (
            <div className="row pl-4">
                <div className="col-lg-4-sm-12 mr-5">
                    <ul className="flora ul">
                        <li className="flora li text-light"> Available units: 32 </li>
                        <li className="flora li text-light"> Upper floor: N200,000 extra.</li>
                    </ul>
                </div>

                <div className="col-lg-4-sm-12 mr-5">
                    <ul className="flora ul">
                        <li className="flora li text-light" style={{ textDecoration: "line-through" }}> Current Market Price: N10m </li>
                        <li className="flora li text-light">  Off plan price: N8.5m</li>
                        <li className="flora li text-light"> Off Plan outright: <b>N7.5m </b></li>
                    </ul>
                </div>

                <div className="col-lg-4-sm-12 mr-5">
                    <ul className="flora ul mb-2">
                        <li className="flora li text-light">  OTHER FEES</li>
                    </ul>
                    <ul className="flora ul pl-4">
                        <li className="flora li text-light ">   Development: N2.2m</li>
                        <li className="flora li text-light"> Documentation: N1m </li>
                    </ul>


                </div>
            </div>
        )
    }
    return (

        <Card image={floracity_7} headline1="B. Mini Apartment" headline2="1 Bedroom Fully Finished Luxury Mini Flat" headline3="A finely balanced and spacious home , this mini apartment flora ul a living room, guest wc,
            work area, a bedroom and a well equipped bathroom." MainMessage={MainMessage} />
        //     <section className="sec1-main">
        //         <div className="container-fuid">
        //             <div className="flora row">

        //                 <div className="col-lg-6 m-auto pl-5 pt-0 align-middle text-left text-tile">
        //                     <h2 className="text-light font-weight-bolder">B. Mini Apartment </h2>
        //                     <br />
        //                     <h5 className="text-light">1 Bedroom Fully Finished Luxury Mini Flat</h5>
        //                     <br />
        //                     <p className="pb-4  pr-2 text-white font-weight-normal">A finely balanced and spacious home , this mini apartment flora ul a living room, guest wc,
        //                         work area, a bedroom and a well equipped bathroom.</p>
        //                     <br />

        //                     <div className="row pl-4">
        //                         <div className="col-lg-4-sm-12 mr-5">
        //                             <ul className="flora ul">
        //                                 <li className="flora li text-light"> Available units: 32 </li>
        //                                 <li className="flora li text-light"> Upper floor: N200,000 extra.</li>
        //                             </ul>
        //                         </div>

        //                         <div className="col-lg-4-sm-12 mr-5">
        //                             <ul className="flora ul">
        //                                 <li className="flora li text-light" style={{ textDecoration: "line-through" }}> Current Market Price: N10m </li>
        //                                 <li className="flora li text-light">  Off plan price: N8.5m</li>
        //                                 <li className="flora li text-light"> Off Plan outright: <b>N7.5m </b></li>
        //                             </ul>
        //                         </div>

        //                         <div className="col-lg-4-sm-12 mr-5">
        //                             <ul className="flora ul mb-2">
        //                                 <li className="flora li text-light">  OTHER FEES</li>
        //                             </ul>
        //                             <ul className="flora ul pl-4">
        //                                 <li className="flora li text-light ">   Development: N2.2m</li>
        //                                 <li className="flora li text-light"> Documentation: N1m </li>
        //                             </ul>


        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="col-lg-6 image">
        //                     <img className="img-fluid" src={floracity_7} alt="img_7" />
        //                 </div>
        //             </div>
        //         </div>

        //     </section>
        // </div>
    );
}

export default MiniApartment;
