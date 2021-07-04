import React,{useState} from 'react';

// import testimonial from "../../assets/testimonial-bg.jpg"
import { SliderData as slides } from '../sliderData';
const Testimonials = () => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
  
    setTimeout(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 10000);
  
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };
  
    if (!Array.isArray(slides) || slides.length <= 0) {
      return null;
    }
    return (
        <div className='sec4'>
        <div className='testTile text-center'>
          <h4>TESTIMONIAL</h4>
          <h2>What Clients Say</h2>
        </div>

        <section className='slider'>
          <i className='fa fa-chevron-left' onClick={prevSlide} />
          <i className='fa fa-chevron-right' onClick={nextSlide} />
          {slides.map((slide, index) => {
            return (
              <div
                className={index === current ? 'slide active' : 'slide'}
                key={index}
              >
                {index === current && (
                  <div className='slid'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='46'
                      height='46'
                      fill='currentColor'
                      className='bi bi-chat-left-quote'
                      viewBox='0 0 16 16'
                    >
                      <path
                        fillRule='evenodd'
                        d='M14 1H2a1 1 0 0 0-1 1v11.586l2-2A2 2 0 0 1 4.414 11H14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z'
                      />
                      <path
                        fillRule='evenodd'
                        d='M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z'
                      />
                    </svg>
                    <p className='statement'>{slide.p}</p>
                    <div className='slidFooter'>
                      <p className='text-center' id='name'>
                        {slide.name}
                      </p>
                      <p className='text-center'>
                        {slide.rating.map((r, index) => {
                          return (
                            <i
                              key={index}
                              className='fa fa-star'
                              aria-hidden='true'
                            ></i>
                          );
                        })}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </section>
      </div>
    );
}

export default Testimonials;
