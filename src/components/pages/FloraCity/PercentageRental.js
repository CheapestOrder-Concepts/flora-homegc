import React from 'react';

import floracity_per_rent1 from "./FloraAssets/floracity_per_rent1.jpg"
import floracity_per_rent2 from "./FloraAssets/floracity_per_rent2.jpg"
import Card from './Card';
const PercentageRentals = () => {
    
    const MainMessage = () =>{
        return (
            <ul className="flora ul" >
            <li className="flora li "> ANNUAL RENTAL OPTION: <br />Annual Rent = N800,000 <br /> = 8.88% rental profit </li>
            <br />
            <li className="flora li "> SHORT-LET RENTAL OPTION:<br /><p className="text-light">
                Assuming a worse case scenario of a 40% Annual Occupancy Rate and a<br />
                60% Annual Vacancy Rate, that's 144 nights out of 365 nights.<br />
                Worse case scenario Rent of N30,000/ night<br />
                Gross Annual rental income= N30,000 × 144 nights= N 4,320,000<br />
                % Gross Annual Rental Income = 48% rental profit
            </p>
                <p className="text-light">
                    Net Annual Rental Income N4,320,000<br />
                    less: Furnishing N1,000,000 approx<br />
                    Mgt. / Maint. N500,000 approx. (1,500,000)
                    N 2,820,000<br />
                    % Annual Net Income= 31.3 % Profit
                </p>
            </li>

        </ul>
        )
            }
    return (
        // <div>
            <Card image={floracity_per_rent1} imageAlt="mezzazine_Apart" headline1="PERCENTAGE RENTAL INCOME (Using the Off plan Value)" headline2="MEZZANINE APARTMENT:" MainMessage={MainMessage} />
        //     <section className="sec1-main">
        //         <div className="container-fuid">
        //             <div className="flora row">
                      
        //                 <div className="col-lg-6 m-auto pl-5 pr-5 pt-0 align-middle justify-center text-left text-tile">
        //                     <h2 className="text-light font-weight-bolder">PERCENTAGE RENTAL INCOME (Using the Off plan Value) </h2>
        //                     <br />
        //                     <h3 className="text-light"> MEZZANINE APARTMENT:</h3>
        //                     <br />
        //                     <ul className="flora ul" >
        //                         <li className="flora li "> ANNUAL RENTAL OPTION: <br />Annual Rent = N800,000 <br /> = 8.88% rental profit </li>
        //                         <br />
        //                         <li className="flora li "> SHORT-LET RENTAL OPTION:<br /><p className="text-light">
        //                             Assuming a worse case scenario of a 40% Annual Occupancy Rate and a<br />
        //                             60% Annual Vacancy Rate, that's 144 nights out of 365 nights.<br />
        //                             Worse case scenario Rent of N30,000/ night<br />
        //                             Gross Annual rental income= N30,000 × 144 nights= N 4,320,000<br />
        //                             % Gross Annual Rental Income = 48% rental profit
        //                         </p>
        //                             <p className="text-light">
        //                                 Net Annual Rental Income N4,320,000<br />
        //                                 less: Furnishing N1,000,000 approx<br />
        //                                 Mgt. / Maint. N500,000 approx. (1,500,000)
        //                                 N 2,820,000<br />
        //                                 % Annual Net Income= 31.3 % Profit
        //                             </p>
        //                         </li>

        //                     </ul>

        //                     <br />
        //                     <br />

        //                 </div>
        //                 <div className="col-lg-6 image">
        //                     <img className="row img-fluid" style={{ height: "400px", display: "block" }} src={floracity_per_rent1} alt="per_ret_1" />
        //                     <img className="row img-fluid" style={{ height: "400px", display: "block" }} src={floracity_per_rent2} alt="per_rent_2" />
        //                 </div>

        //             </div>
        //         </div>

        //     </section>
        // </div>
    );
}

export default PercentageRentals;
