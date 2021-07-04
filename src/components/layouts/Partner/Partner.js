import React from 'react';

import partner from "../../assets/partn.png";
import "./Styles.css"
const Partner = () => {
    return (
      
        <section class="coming-soon-section">
          <div className="auto-container">           
            <div className="outer-box">
              <div className = "partner" >
            <h2 className="partnerText" >Affiliated Professional Bodies</h2>
            </div>
              <img src={partner} alt="Our Partners" />
            </div>
          </div>
        </section>
    );
}

export default Partner;
