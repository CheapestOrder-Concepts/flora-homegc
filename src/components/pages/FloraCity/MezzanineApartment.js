import React from 'react';

import floracity_6 from "./FloraAssets/floracity_6.jpg"
import Card from './Card';
const MezzanineApartment = () => {
    const MainMessage = () =>{
        return (
            <div className="row">
            <div className="col-lg-4-sm-12 mr-5">
                <ul className="flora ul">
                    <li className="flora li"> Available units: 20 </li>
                    <li className="flora li">  Corner piece: N500,000 extra.</li>
                </ul>
            </div>

            <div className="col-lg-4-sm-12 mr-5">
                <ul className="flora ul">
                    <li className="flora li" style={{textDecoration:"line-through"}}> Current Market Price: N12m </li>
                    <li className="flora li">  Off plan price: N10m</li>
                    <li className="flora li"> Off Plan outright: <b>N9m</b></li>
                </ul>
            </div>

            <div className="col-lg-4-sm-12 mr-5">
                <ul className="flora ul mb-2">
                    <li className="flora li">  OTHER FEES</li>
                    </ul>
                    <ul className="flora ul pl-4">
                    <li className="flora li ">   Development: N2.7m</li>
                    <li className="flora li"> Documentation: N1m </li>
                </ul>
           

        </div>
    </div>
        )
            }
    return (
        // <div>
            <Card image={floracity_6} imageAlt="mezanine apartment" headline1="A. Mezzanine Apartment " headline2="1 Bedroom fully finished terrace luxury Loft Apartment" headline3="Truly stunning to behold, this mezzanine home features a living room, guest wc, work area, a
                                suspended -floor bedroom and a well equipped bathroom." MainMessage={MainMessage}/>
        //     <section className="sec1-main">
        //         <div className="container-fuid">
        //             <div className="flora row">
        //                 <div className="col-lg-6 image">
        //                     <img className="img-fluid" src={floracity_6} alt="img_2" />
        //                 </div>
        //                 <div className="col-lg-6 m-auto pl-5 pt-0 align-middle text-left text-tile">
        //                     <h2 className="text-light font-weight-bolder">A. Mezzanine Apartment </h2>
        //                     <br />
        //                     <h5 className="text-light">1 Bedroom fully finished terrace luxury Loft Apartment</h5>
        //                     <br />
        //                     <p className="pb-4  pr-2 text-white font-weight-normal">Truly stunning to behold, this mezzanine home features a living room, guest wc, work area, a
        //                         suspended -floor bedroom and a well equipped bathroom.</p>
        //                     <br />
                    
        //                     <div className="row">
        //                         <div className="col-lg-4-sm-12 mr-5">
        //                             <ul className="flora ul">
        //                                 <li className="flora li"> Available units: 20 </li>
        //                                 <li className="flora li">  Corner piece: N500,000 extra.</li>
        //                             </ul>
        //                         </div>

        //                         <div className="col-lg-4-sm-12 mr-5">
        //                             <ul className="flora ul">
        //                                 <li className="flora li" style={{textDecoration:"line-through"}}> Current Market Price: N12m </li>
        //                                 <li className="flora li">  Off plan price: N10m</li>
        //                                 <li className="flora li"> Off Plan outright: <b>N9m</b></li>
        //                             </ul>
        //                         </div>

        //                         <div className="col-lg-4-sm-12 mr-5">
        //                             <ul className="flora ul mb-2">
        //                                 <li className="flora li">  OTHER FEES</li>
        //                                 </ul>
        //                                 <ul className="flora ul pl-4">
        //                                 <li className="flora li ">   Development: N2.7m</li>
        //                                 <li className="flora li"> Documentation: N1m </li>
        //                             </ul>
                               

        //                     </div>
        //                 </div>
        //                 </div>
        //             </div>
        //         </div>

        //     </section>
        // </div>
    );
}

export default MezzanineApartment;
