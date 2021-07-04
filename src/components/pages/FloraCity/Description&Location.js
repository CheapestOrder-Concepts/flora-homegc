import React from 'react';

import floracity_3 from "./FloraAssets/floracity_3.jpg"
import Card from './Card';
// import { handleReadMore } from './ReadMore';
const Description = () => {
    const handleReadMore = () => {
        let dots = document.getElementById("desc-dots");
        let moreText = document.getElementById("read-more");
        let btnText = document.getElementById("btn");
    
        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
        }}
    const MainMessage = () => {
        return (
            <div>
                <p className="pb-4  text-center font-weight-light text-light pr-2  ">The FloraCity is a luxury residential
                    estate conceptualized to provide
                    homeliness, technology, energy
                    efficiency, class, executive security,
                    recreation, daily needs, and social lives
                    enhanced by community living in a
                    natural ambiance for its occupants. </p> 
                    <span id="desc-dots">...</span>
                    <div>
                    <span style={{ display: "none" }} id="read-more">
                        <p className="pb-4  text-center font-weight-light text-light pr-2 "> The
                    development is targeted for singles,
                    young couples, parents who want a
                    lasting legacy for their wards and who
                    need regular income sources for children
                    expenses,
                  
                        a safe haven for Nigerians
                        residing abroad during home visits,
                        Nigeria residents who want a home away
                        from home, and for investors who would
                        like to be landlords to the thousands of
                        expatriates and workers of the close-by
                        industries like the Dangote Refinery,
                        Lekki Free Trade Zone, Seaport, etc for
                        the opportunity to earn high yield
                        short-let and annual rental income.  </p>  
                    <br />
                   
                    <br />

                    <h2 className="text-light font-weight-bolder">Nearby Landmarks
                    </h2>
                    <ul className="features text-light">
                        <li className="true text-light"> 2 Minutes drive from the Lekki Free
                            Trade Zone.</li>
                        <li className="true text-light"> Dangote Refinery.</li>
                        <li className="true text-light"> international Airport.</li>
                        <li className="true text-light">And Many More… </li>
                        
                    </ul>
                    </span>
                    </div>
                    <button className=" text-light btn bn-lg" onClick={handleReadMore} id="btn">Read more</button>    
            </div>
        )
    }
    return (
        <Card image={floracity_3} imageAlt="floracity_3" MainMessage={MainMessage} headline1="Description and Location" />
        // <div>
        //    
        //     <section className="sec1-main">
        //         <div className="container-fuid">
        //             <div className="flora row">
        //                 <div className="col-lg-6 image">
        //                     <img className="img-fluid" src={floracity_3} alt="img_2" />
        //                 </div>
        //                 <div className="col-lg-6 m-auto pl-5 pr-5 pt-0 align-middle text-left text-tile">
        //                     <h2 className="text-light font-weight-bolder">Description and
        //                         Location
        //                     </h2>
        //                     <br />
        //                     <p className="pb-4  pr-2 text-white ">The FloraCity is a luxury residential
        //                         estate conceptualized to provide
        //                         homeliness, technology, energy
        //                         efficiency, class, executive security,
        //                         recreation, daily needs, and social lives
        //                         enhanced by community living in a
        //                         natural ambiance for its occupants. The
        //                         development is targeted for singles,
        //                         young couples, parents who want a
        //                         lasting legacy for their wards and who
        //                         need regular income sources for children
        //                         expenses, a safe haven for Nigerians
        //                         residing abroad during home visits,
        //                         Nigeria residents who want a home away
        //                         from home, and for investors who would
        //                         like to be landlords to the thousands of
        //                         expatriates and workers of the close-by
        //                         industries like the Dangote Refinery,
        //                         Lekki Free Trade Zone, Seaport, etc for
        //                         the opportunity to earn high yield
        //                         short-let and annual rental income.</p>
        //                     <br />
        //                     <br />

        //                     <h2 className="text-light font-weight-bolder">Nearby Landmarks
        //                     </h2>
        //                     <ul className="flora ul">
        //                         <li className="flora li"> 2 Minutes drive from the Lekki Free
        //                             Trade Zone.</li>
        //                             <li className="flora li"> Dangote Refinery.</li>
        //                             <li className="flora li"> international Airport.</li>
        //                             <li>And Many More… </li>
        //                     </ul>
        //                 </div>

        //             </div>
        //         </div>

        //     </section>
        // </div>
    );
}

export default Description;
