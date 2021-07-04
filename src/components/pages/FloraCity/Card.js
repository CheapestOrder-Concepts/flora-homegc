import React from 'react';

const Card = ({image, height, imageAlt, headline1, headline2, headline3, MainMessage}) => {
    return (
       
             <div className="subplan-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
        <div className="inner-box ">
          <div className="subplan-box">
            <h4 className="subplan">{headline1}</h4>
            <h6>{headline2}</h6>
            <h6>{headline3}</h6>
          </div>
          <div>
            <img style= {{height:height}} src={image} className="img-fluid my-2" alt={imageAlt} />
          </div>
          <div style={{backgroundColor:"#57257C", padding:"20px"}}>
          {<MainMessage/>}
          </div>
          
        </div>
      </div>
      
    );
}

export default Card;
