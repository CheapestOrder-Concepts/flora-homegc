import React from 'react';


import floracity_map from "./FloraAssets/floracity_map.jpg"
import Card from './Card';
const FloraMap = () => {
    const MainMessage = () =>{
        return (
            <h5 className="text-center text-light pb-4  pr-2 ">The white rectangle beside the Lekki Free Trade Zone</h5>
        )
            }
    return (

        <Card image={floracity_map} MainMessage={MainMessage} headline1="Location Map"  />
        // <div>
        //     <section className="sec1-main">
        //         <div className="container-fuid">
        //             <div className="flora row">
        //                 <div className="col-lg-5 m-auto pl-5 pt-0 align-middle text-left text-tile">
        //                     <h1 className="pb-4 text-light pr-2 font-weight-bolder">Location Map</h1>
                
        //                     <h3 className="mb-5 text-light">The white rectangle beside the Lekki Free Trade Zone</h3>
        //                 </div>
        //                 <div className="col-lg-7 image">
        //                   <img className="img-fluid" src={floracity_map} alt="flora_map"/>
        //                 </div>
        //             </div>
        //         </div>

        //     </section>
        // </div>
    );
}

export default FloraMap;
