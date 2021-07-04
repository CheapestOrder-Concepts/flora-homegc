import React from 'react';

import floracity_8 from "./FloraAssets/floracity_8.jpg"
import floracity_9 from "./FloraAssets/floracity_9.jpg"
import floracity_mart from "./FloraAssets/floracity_mart.jpg"
import floracity_2 from "./FloraAssets/floracity_2.jpg"
import floracity_gate from "./FloraAssets/floracity_gate.jpg"
const ImageCarousel = () => {
    return (
        <div>
            <h1 className="text-center mb-4 m-auto">Gallery</h1>
            <div style={{width:"70%"}} id="target" className="carousel slide m-auto" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#target" data-slide-to={0} className="active" />
          <li data-target="#target" data-slide-to={1} />
          <li data-target="#target" data-slide-to={2} />
          <li data-target="#target" data-slide-to={3} />
          <li data-target="#target" data-slide-to={4} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={floracity_9} className="d-block w-100" alt="flora_8" />
          </div>
          <div className="carousel-item">
            <img src={floracity_mart} className="d-block w-100" alt="flora_mart" />
          </div>
          <div className="carousel-item">
            <img src={floracity_2} className="d-block w-100" alt="flora_2" />
          </div>
          <div className="carousel-item">
            <img src={floracity_8} className="d-block w-100" alt="flora_8" />
          </div>
          <div className="carousel-item">
            <img src={floracity_gate} className="d-block w-100" alt="flora-gate" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#target" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#target" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>

        </div>
    );
}

export default ImageCarousel;
