import React from 'react';

import floracity_mart from "./FloraAssets/floracity_mart.jpg"
// import floracity_11 from "./FloraAssets/floracity_11.jpg"
import Card from './Card';
const PercentageRentalB = () => {
    const MainMessage = () =>{
        return (
            <ul className="flora ul" >
            <li className="flora li "> ANNUAL RENTAL OPTION: <br /> Annual Rent = N600,000<br /> = 8% rental profit</li>
            <br />
            <li className="flora li "> SHORT-LET RENTAL OPTION:<br /><p className="text-light">
                Assuming a worse case scenario of a 40% Annual Occupancy Rate and a
                60% Annual Vacancy Rate, that's 144 nights out of 365 nights.
            </p>
                <p className="text-light">
                    Worse case scenario Rent of N20,000/ night<br />
                    Gross Annual rental income= N20,000 × 144 nights= N 2,880,000<br />
                    % Gross Annual Rental Income = 38.4% rental profit

                </p>
                <p className="text-light">
                    Net Annual Rental Income N2,880,000<br />
                    less: Furnishing N700,000 approx <br />
                    Mgt. / Maint. N300,000 approx. (1,000,000)

                    N 1,880,000<br />
                    % Annual Net Income = 25% Profit
                </p>
            </li>

        </ul>
        )
            }
    return (
        // <div>
            <Card image={floracity_mart} imageAlt="floracity_mart" headline1="PERCENTAGE RENTAL INCOME (Using the Off plan Value)" headline2="MINI FLAT" MainMessage={MainMessage} />
        //     <section className="sec1-main">
        //         <div className="container-fuid">
        //             <div className="flora row">
        //                 <div className="col-lg-7 image">
        //                     <img className="row img-fluid" style={{ height: "400px", display: "block" }} src={floracity_mart} alt="flora mini B" />
        //                     <img className="row img-fluid" style={{ height: "400px", display: "block" }} src={floracity_11} alt="per_rent_2" />
        //                 </div>
        //                 <div className="col-lg-5 m-auto pl-5 pr-5 pt-0 align-middle justify-center text-left text-tile">
        //                     <h2 className="text-light font-weight-bolder">PERCENTAGE RENTAL INCOME (Using the Off plan Value) </h2>
        //                     <br />
        //                     <h3 className="text-light"> MINI FLAT:</h3>
        //                     <br />
        //                     <ul className="flora ul" >
        //                         <li className="flora li "> ANNUAL RENTAL OPTION: <br /> Annual Rent = N600,000<br /> = 8% rental profit</li>
        //                         <br />
        //                         <li className="flora li "> SHORT-LET RENTAL OPTION:<br /><p className="text-light">
        //                             Assuming a worse case scenario of a 40% Annual Occupancy Rate and a
        //                             60% Annual Vacancy Rate, that's 144 nights out of 365 nights.
        //                         </p>
        //                             <p className="text-light">
        //                                 Worse case scenario Rent of N20,000/ night<br />
        //                                 Gross Annual rental income= N20,000 × 144 nights= N 2,880,000<br />
        //                                 % Gross Annual Rental Income = 38.4% rental profit

        //                             </p>
        //                             <p className="text-light">
        //                                 Net Annual Rental Income N2,880,000<br />
        //                                 less: Furnishing N700,000 approx <br />
        //                                 Mgt. / Maint. N300,000 approx. (1,000,000)

        //                                 N 1,880,000<br />
        //                                 % Annual Net Income = 25% Profit
        //                             </p>
        //                         </li>

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

export default PercentageRentalB;
