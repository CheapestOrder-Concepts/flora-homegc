import React from 'react';
import mdspeech from "../../assets/mdspeech1.jpg"
const Iframe = ({src}) => {
    return (
        <section className="video-section" style={{backgroundImage: `url(${mdspeech})` }}>
        <div className="auto-container">
          <div className="content-box">
            {/* <div class="text">Company Profile Video</div> */}
            <h2 className="mb-4">WHAT WE STAND FOR</h2>
            
            <div class="plyr__video-embed" id="player">
                <iframe className="embed-responsive-item" src={src} allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen loading='lazy' title="Flora"   width='560'
              height='315'allowfullscreen allowtransparency ></iframe>
            </div>
            {/* <video id="player" playsInline controls data-poster style={{plyrColorMain: '#541484'}}>
              <source src="https://www.youtube.com/embed/gkAYHJvo8as?autoplay=1&mute=1" />
            
            </video> */}
          </div>
          </div>
      </section>
    );
}

export default Iframe;
