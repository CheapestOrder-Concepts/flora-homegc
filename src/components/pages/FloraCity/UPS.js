import React from 'react';

import floracity_usp1 from "./FloraAssets/floracity_usp1.jpg"
// import floracity_usp2 from "./FloraAssets/floracity_usp2.jpg"
import Card from './Card';
const UPS = () => {

    const MainMessage = () =>{
        return (
            <>
            <ul className="flora ul" >
            <li className="flora li alpha"> Potential market for rentals within the axis </li>
            <ol className="flora ul pl-4 ownership">
                <li className="flora li " >Number of existing workers: 30,000</li>
                <li className="flora li ">  Projected number of workers in 5 years: &gt; 200,000  </li>
                <li className="flora li ">  Projected number of workers in 10 years: &gt; 800,000  </li>
            </ol>
            <li className="flora li alpha">Projected rate of property value appreciation in 5 years: Around 150% </li>
            <li className="flora li alpha">Become Landlords to industry workers and Expatriates. </li>
            <li className="flora li alpha">Rental Income up to 25% per annum for both short-let and annual rental option. </li>
            <li className="flora li alpha"> Authenticated Ownership.</li>
            <li className="flora li alpha">No Encumbrance. </li>
            <li className="flora li alpha">About 2 minutes drive to Lekki Free Trade Zone.  </li>
            <li className="flora li alpha">About 4 minutes drive to Dangote refinery.  </li>
            <li className="flora li alpha">Right opposite the proposed LFTZ coastal road.</li>
            <li className="flora li alpha">Land information: gazette registered as No. 38 Vol. 27, 27thOCT 1994.</li>
           
        </ul>
   
        </>
        )
            }
    return (
        // <div>
            <Card image={floracity_usp1} imageAlt="floracity_ups" headline1="UPS" MainMessage={MainMessage} />
        //     <section  className="sec1-main">
        //         <div className="container-fuid">
        //             <div className="flora row">
        //                 <div className="col-lg-6 image">
        //                     <img className="row img-fluid" style={{height:"400px", display:"block"}} src={floracity_usp1} alt="ups1" />
        //                     <img className="row img-fluid" style={{height:"400px", display:"block"}}  src={floracity_usp2} alt="ups2" />
        //                 </div>
        //                 <div className="col-lg-6 m-auto pl-5 pr-5 pt-0 align-middle justify-center text-left text-tile">
        //                     <h2 className="text-light font-weight-bolder">UPS </h2>
        //                     <br />
        //                     <ul className="flora ul" >
        //                         <li className="flora li alpha"> Potential market for rentals within the axis </li>
        //                         <ol className="flora ul pl-4 ownership">
        //                             <li className="flora li " >Number of existing workers: 30,000</li>
        //                             <li className="flora li ">  Projected number of workers in 5 years: &gt 200,000  </li>
        //                             <li className="flora li ">  Projected number of workers in 10 years: &gt 800,000  </li>
        //                         </ol>
        //                         <li className="flora li alpha">Projected rate of property value appreciation in 5 years: Around 150% </li>
        //                         <li className="flora li alpha">Become Landlords to industry workers and Expatriates. </li>
        //                         <li className="flora li alpha">Rental Income up to 25% per annum for both short-let and annual rental option. </li>
        //                         <li className="flora li alpha"> Authenticated Ownership.</li>
        //                         <li className="flora li alpha">No Encumbrance. </li>
        //                         <li className="flora li alpha">About 2 minutes drive to Lekki Free Trade Zone.  </li>
        //                         <li className="flora li alpha">About 4 minutes drive to Dangote refinery.  </li>
        //                         <li className="flora li alpha">Right opposite the proposed LFTZ coastal road.</li>
        //                         <li className="flora li alpha">Land information: gazette registered as No. 38 Vol. 27, 27thOCT 1994.</li>
                               
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

export default UPS;
