import React from 'react';

import floracity_2 from "./FloraAssets/floracity_2.jpg"
import Card from './Card';
const Section1 = () => {

    const MainMessage = () =>{
return (
    <h5 className="text-center text-light pb-4  pr-2 ">Be part of this <span style={{textDecoration:"underline"}}>premium-secured,
    luxury, energy-efficient, serviced
    and smart</span> Ecopolis masterpiece.
    It’s perfect for live-in, rental
    income and short-lets with up to
    25% annual income for Nigerians
    at home and in diaspora.</h5>
)
    }

    
    return (
        // <div>
        //     <section className="sec1-main">
        //         <div className="container-fuid">
        //             <div className="flora row">
        //                 <div className=" col-lg-5 m-auto pl-5 pt-0 align-middle text-left ">
        //                     <h5 className="text-light pb-4  pr-2 ">Be part of this <span style={{textDecoration:"underline"}}>premium-secured,
        //                         luxury, energy-efficient, serviced
        //                         and smart</span> Ecopolis masterpiece.
        //                         It’s perfect for live-in, rental
        //                         income and short-lets with up to
        //                         25% annual income for Nigerians
        //                         at home and in diaspora.</h5>
        //                 </div>
        //                 <div className="col-lg-7 image">
        //                   <img className="img-fluid" src={floracity_2} alt="img_2"/>
        //                 </div>
        //             </div>
        //         </div>

        //     </section>
        // </div>
        <>
    

        <Card image={floracity_2} MainMessage={MainMessage} headline1="Explore FloraCity"/>
        </>
    );
}

export default Section1;
