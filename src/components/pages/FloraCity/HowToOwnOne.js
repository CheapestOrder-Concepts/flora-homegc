import React from 'react';

import floracity_9 from "./FloraAssets/floracity_9.jpg"
import Card from './Card';
const HowToOwnOne = () => {
    const handleReadMore = () => {
        let dots = document.getElementById("own-dots");
        let moreText = document.getElementById("own-read-more");
        let btnText = document.getElementById("own-btn");
    
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
            <ol className="flora ul" >
            <li className="flora li decimal">Make your Reservation by clicking on this link or send a message to our
                customer care.</li>
            <li className="flora li decimal"> Receive payment advice within 48 hours after form submission. If not
                received, please send a follow-up mail to FloraCity.Ng@gmail.com to
                confirm apartments availability. </li>
                <span id="own-dots">...</span>
            <span style={{display:"none"}} id="own-read-more">
            <li className="flora li decimal">Make Payment according to your chosen purchase option into</li>
            <ul className="flora ul pl-4 ownership">
                <li className="flora li alpha" >  Acc. name: FloraHomes Global Consult Ltd.</li>
                <li className="flora li alpha"> Bank name: </li>
                <ul className="flora ul ml-4">
                   <li className="flora li">Jaiz Bank</li>
                   <ul className="flora ul ml-4">
                   <li className="flora li"> Naira: 0007101193</li>
                   
                   <li className="flora li"> Dollar: 0007101210</li>
                   </ul>
                   <li className="flora li">Sterling Bank</li>
                   <ul className="flora ul ml-4">
                   <li className="flora li">  Naira: 0501420146</li>
                   
                   <li className="flora li">  Dollar: 0501467363 </li>
                   </ul>
                   <li className="flora li">GT Bank</li>
                   <ul className="flora ul ml-4">
                   <li className="flora li">   Naira: 0465960023 </li>
                   
                   <li className="flora li">  Dollar: 0449454865 </li>
                   </ul>
                   </ul>
            </ul>
            <li className="flora li decimal">Get your document.</li>
            </span>
        </ol>
        <button className=" text-light btn bn-lg" onClick={handleReadMore} id="own-btn">Read more</button> 
        </>
        )
            }
    return (
        // <div className="own-one">
            <Card  image={floracity_9} imageAlt="how to own one" headline1="HOW TO OWN ONE TO YOURSELF " MainMessage={MainMessage} />
        //     <section className="sec1-main">
        //         <div className="container-fuid">
        //             <div className="flora row">
                       
        //                 <div className="col-lg-6 pl-5 pt-0  text-left text-tile">
        //                     <h2 className="text-light font-weight-bolder">HOW TO OWN ONE TO YOURSELF </h2>
        //                     <br />
        //                     <ol className="flora ul" >
        //                         <li className="flora li decimal">Make your Reservation by clicking on this link or send a message to our
        //                             customer care.</li>
        //                         <li className="flora li decimal"> Receive payment advice within 48 hours after form submission. If not
        //                             received, please send a follow-up mail to FloraCity.Ng@gmail.com to
        //                             confirm apartments availability. </li>
        //                         <li className="flora li decimal">Make Payment according to your chosen purchase option into</li>
        //                         <ul className="flora ul pl-4 ownership">
        //                             <li className="flora li alpha" >  Acc. name: FloraHomes Global Consult Ltd.</li>
        //                             <li className="flora li alpha"> Bank name: </li>
        //                             <ul className="flora ul ml-4">
        //                                <li className="flora li">Jaiz Bank</li>
        //                                <ul className="flora ul ml-4">
        //                                <li className="flora li"> Naira: 0007101193</li>
                                       
        //                                <li className="flora li"> Dollar: 0007101210</li>
        //                                </ul>
        //                                <li className="flora li">Sterling Bank</li>
        //                                <ul className="flora ul ml-4">
        //                                <li className="flora li">  Naira: 0501420146</li>
                                       
        //                                <li className="flora li">  Dollar: 0501467363 </li>
        //                                </ul>
        //                                <li className="flora li">GT Bank</li>
        //                                <ul className="flora ul ml-4">
        //                                <li className="flora li">   Naira: 0465960023 </li>
                                       
        //                                <li className="flora li">  Dollar: 0449454865 </li>
        //                                </ul>
        //                                </ul>
        //                         </ul>
        //                         <li className="flora li decimal">Get your document.</li>
                                
        //                     </ol>

        //                     <br />
        //                     <br />

        //                 </div>
        //                 <div className="col-lg-6 image">
        //                     <img className="img-fluid" style={{height:"500px"}} src={floracity_8} alt="img_4" />
        //                 </div>

        //             </div>
        //         </div>

        //     </section>
        // </div>
    );
}

export default HowToOwnOne;
