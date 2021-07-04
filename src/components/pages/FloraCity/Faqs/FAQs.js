import React from 'react';

import FaqsModel from './FaqsModel';
import { faq1, faq2, faq3, faq4, faq5, faq6, faq7,faq8, faq9, faq10, faq11, faq12, faq13, faq14, faq15, faq16, faq17 } from './FaqsConstructor';

const FAQ = () => {

    return (
        <>
        <h2 className="text-center m-auto ">FAQS</h2>
        <div className="row">
            
         <div className="subplan-block col-md-6  wow " style={{visibility: 'visible'}}>
        <div className="inner-column ">
        <FaqsModel id={faq1.id} Question={faq1.question} Answer={faq1.answer} />
        <FaqsModel id={faq2.id} Question={faq2.question} Answer={faq2.answer} />
        <FaqsModel id={faq3.id} Question={faq3.question} Answer={faq3.answer} />
        <FaqsModel id={faq4.id} Question={faq4.question} Answer={faq4.answer} />
        <FaqsModel id={faq5.id} Question={faq5.question} Answer={faq5.answer} />
        <FaqsModel id={faq6.id} Question={faq6.question} Answer={faq6.answer} />
        <FaqsModel id={faq7.id} Question={faq7.question} Answer={faq7.answer} />
        <FaqsModel id={faq8.id} Question={faq8.question} Answer={faq8.answer} />
        <FaqsModel id={faq9.id} Question={faq9.question} Answer={faq9.answer} />
        
         
          
        </div>
      </div>
      <div className="subplan-block col-md-6  wow " style={{visibility: 'visible'}}>
        <div className="inner-box ">
        <FaqsModel id={faq10.id} Question={faq10.question} Answer={faq10.answer} />
        <FaqsModel id={faq11.id} Question={faq11.question} Answer={faq11.answer} />
        <FaqsModel id={faq12.id} Question={faq12.question} Answer={faq12.answer} />
        <FaqsModel id={faq13.id} Question={faq13.question} Answer={faq13.answer} />
        <FaqsModel id={faq14.id} Question={faq14.question} Answer={faq14.answer} />
        <FaqsModel id={faq15.id} Question={faq15.question} Answer={faq15.answer} />
        <FaqsModel id={faq16.id} Question={faq16.question} Answer={faq16.answer} />
        <FaqsModel id={faq17.id} Question={faq17.question} Answer={faq17.answer} />
    
        </div>
      </div>

        {/* // <div> */}
         
            {/* <section className="sec1-main">
                <div className="container-fuid">
                <h2 className="text-light font-weight-bolder">FAQS</h2>
                    <div className="flora row">
                        <div className="col-lg-6 m-auto pl-5 pr-5 pt-0 align-middle justify-center text-left text-tile">
                       
                            <br />
                            <ul className="flora ul" >
                                <li className="flora li "> What documents am I getting for the documentation fee payment?</li>
                                <ul className="flora ul pl-4 ownership">
                                    <li className="flora li " > Receipt of Purchase </li>
                                    <li className="flora li ">  Deed of Assignment</li>
                                    <li className="flora li ">  Registered Survey </li>
                                    <li className="flora li ">  Letter Of Transfer</li>
                                    <li className="flora li ">  Contract of Sale </li>
                                    <li className="flora li ">   Own-Earner Agreement </li>
                                </ul>
                                <li className="flora li "> What does the development fee cover?  </li>
                                <ul className="flora ul pl-4 ownership">
                                    <li className="flora li ">Tarred Road, Electricity, Drainage, Water System, Sewage System, Perimeter Fencing and Gatehouse.</li>

                                </ul>

                                <li className="flora li "> Are these “ other fees” subject to review? </li>
                                <ul className="flora ul pl-4 ownership">
                                    <li className="flora li "> Yes. The fees are subject to review.</li>

                                </ul>

                                <li className="flora li "> For the mezzanine apartment, what is the price difference between the middle and the corner apartments?  </li>
                                <ul className="flora ul pl-4 ownership">
                                    <li className="flora li ">N500,000 extra for the corner apartments.</li>

                                </ul>

                                <li className="flora li ">  For the miniflat, what’s the price difference between the upper and the lower floors?  </li>
                                <ul className="flora ul pl-4 ownership">
                                    <li className="flora li ">N200,000 extra for the upper apartments. </li>

                                </ul>

                                
                                <li className="flora li ">   After property payment, what document will I first get? </li>
                                <ul className="flora ul pl-4 ownership">
                                    <li className="flora li ">Gets receipts within 3 working days of payment. </li>
                                    <li className="flora li "> Gets contract of sale within 10 working days of payment </li>

                                </ul>

                                <li className="flora li ">  Where is The FloraCity Ecopolis Located?  </li>
                                <ul className="flora ul pl-4 ownership">
                                    <li className="flora li ">it is located in Akodo, at about 3 minutes drive to the Dangote Refinery, Ibeju-Lekki.  </li>

                                </ul>

                                <li className="flora li ">   What kind of property is on The FloraCity Ecopolis? </li>
                                <ul className="flora ul pl-4 ownership">
                                    <li className="flora li ">Building = Fully finished 1 bedroom luxury Mezzanine (loft) Apartments.  </li>
                                    <li className="flora li "> Building = Fully finished luxury Miniflat.   </li>

                                </ul>

                                <li className="flora li ">   Is the Estate Location Already Habitable? </li>
                                <ul className="flora ul pl-4 ownership">
                                    <li className="flora li "> All the area is already habitable.  </li>
                                  
                                </ul>

                                <li className="flora li ">   When is the delivery date of this project? </li>
                                <ul className="flora ul pl-4 ownership">
                                    <li className="flora li ">  Apartments will be delivered in milestones based on subscribers payments. </li>
                                    <li className="flora li "> For outright payment, apartment gets delivered in 3 months.  </li>
                                    <li className="flora li "> Facilities and services delivery is 6 months after full estate subscription.</li>

                                </ul>

                            </ul>

                            <br />
                            <br />

                        </div>
                        <div className="col-lg-6  pl-5 pr-5 pt-4 align-middle justify-center text-left text-tile">
                        <ul className="flora ul" >
                                <li className="flora li ">  Who is the Developer?</li>
                                <ul className="flora ul pl-4 ownership">
                                    <li className="flora li " >  The developer is FloraHomes Global Consult Limited located at Suit 6, Km 50, Lekki-Epe Express, Lagos. </li>
        
                                </ul>
                                <li className="flora li ">  Can My Property Be Resold?  </li>
                                <ul className="flora ul pl-4 ownership">
                                    <li className="flora li "> Yes. But a written notice of transfer should be given to FloraHomes Global ConsultLimited. </li>

                                </ul>

                                <li className="flora li ">  Can I Pay to Your Consultant / Marketer?  </li>
                                <ul className="flora ul pl-4 ownership">
                                <li className="flora li "> No! All payments should be made only to our company official account.</li>
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

                                </ul>

                                <li className="flora li ">  Can I Do Installment Payment?  </li>
                                <ul className="flora ul pl-4 ownership">
                                    <li className="flora li "> Yes, contact our customer care team. </li>

                                </ul>

                                <li className="flora li ">  Are There Other Fees?  </li>
                                <ul className="flora ul pl-4 ownership">
                                    <li className="flora li ">Yes. Documentation and Development fees. Kindly see the price chart above. </li>

                                </ul>

                                
                                <li className="flora li ">  Can I Seek a Refund after I’ve Made Payment? </li>
                                <ul className="flora ul pl-4 ownership">
                                    <li className="flora li "> Yes you can. Refund attracts a 30% administrative charge </li>
                                

                                </ul>

                                <li className="flora li ">  How Much are The Properties?  </li>
                                <ul className="flora ul pl-4 ownership">
                                    <li className="flora li "> Please refer to the price chart above.  </li>

                                </ul>

                       

                            </ul>
                        </div>
                    </div>
                </div>

            </section>
        </div> */}
        </div>
        </>
    );
}

export default FAQ;
