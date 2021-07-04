import React from 'react';

import cardImg1 from '../../assets/blog1.jpg';
import cardImg2 from '../../assets/blog2.jpg';
import cardImg3 from '../../assets/blog3.jpg';
const News = () => {
    return (
        <section className="news-section">
        <div className="anim-icons">
          <span className="icon icon-circle-blue wow fadeIn animated" style={{visibility: 'visible', animationName: 'fa-spin'}} />
          <span className="icon twist-line-1 wow zoomIn animated" style={{visibility: 'visible', animationName: 'zoomIn'}} />
          <span className="icon twist-line-2 wow zoomIn animated" style={{visibility: 'visible', animationName: 'zoomIn'}} />
          <span className="icon twist-line-3 wow zoomIn animated" style={{visibility: 'visible', animationName: 'zoomIn'}} />
        </div>
        <div className="auto-container">
          <div className="sec-title text-center ">
            <span className="title">Blogs</span>
            <h2>Eye-Opening Contents</h2>
          </div>
          <div className="container-fluid">
            <div className="card-deck blog-posts">
              <div className="card blog-post news-block mb-4" data-wow-delay="400ms">
                <div className="img-top">
                  <a href="post?show=property-verification-and-titledocument-perfection-in-nigeria-series"><img className="card-img-top" src={cardImg1} alt="60b9eb800180c4.79940563.png" /></a>
                </div>
                <div className="card-body">
                  <ul className="post-info">
                    <li className="d-flex justify-content-between"> <i><span className="fa fa-user" /> FLORAHOMESGC </i> <i><span className="fa fa-calendar-check" />2021-06-04</i></li>
                    <li className="d-flex justify-content-between">
                      <a href="category?page=1&cat_id=4">
                        <span className="fa fa-tags" />Property Verification &amp; Authentication                                      </a>
                    </li>
                  </ul>
                  <h5>
                    <a href="post?show=property-verification-and-titledocument-perfection-in-nigeria-series">
                      Property Verification and Title/Document Perfection in Nigeria Series                                  </a>
                  </h5>
                </div>
                <div className="card-footer">
                  <div className="btn-box"><a href="post?show=property-verification-and-titledocument-perfection-in-nigeria-series" className="read-more">Read More</a></div>
                </div>
              </div>{/* /.col-md-4 */}
              <div className="card blog-post news-block mb-4" data-wow-delay="400ms">
                <div className="img-top">
                  <a href="post?show=re-demolition-of-kayetoro-community-ibeju-lekki-lagos-on-the-8th-of-february-2021-the-truth-you-must"><img className="card-img-top" src={cardImg2} alt="60b9eb4d33abc3.50627491.jpg" /></a>
                </div>
                <div className="card-body">
                  <ul className="post-info">
                    <li className="d-flex justify-content-between"> <i><span className="fa fa-user" /> FLORAHOMESGC </i> <i><span className="fa fa-calendar-check" />2021-06-04</i></li>
                    <li className="d-flex justify-content-between">
                      <a href="category?page=1&cat_id=4">
                        <span className="fa fa-tags" />Property Verification &amp; Authentication                                      </a>
                    </li>
                  </ul>
                  <h5>
                    <a href="post?show=re-demolition-of-kayetoro-community-ibeju-lekki-lagos-on-the-8th-of-february-2021-the-truth-you-must">
                      Re: Demolition of Kayetoro Community, Ibeju-Lekki, Lagos on the 8th of February 2021, the truth you must know.                                  </a>
                  </h5>
                </div>
                <div className="card-footer">
                  <div className="btn-box"><a href="post?show=re-demolition-of-kayetoro-community-ibeju-lekki-lagos-on-the-8th-of-february-2021-the-truth-you-must" className="read-more">Read More</a></div>
                </div>
              </div>{/* /.col-md-4 */}
              <div className="card blog-post news-block mb-4" data-wow-delay="400ms">
                <div className="img-top">
                  <a href="post?show=lagos-set-to-go-digital-in-land-related-services-come-2021"><img className="card-img-top" src={cardImg3} alt="60b9ea74575537.91916265.jpg" /></a>
                </div>
                <div className="card-body">
                  <ul className="post-info">
                    <li className="d-flex justify-content-between"> <i><span className="fa fa-user" /> FLORAHOMES ADMIN </i> <i><span className="fa fa-calendar-check" />2021-06-04</i></li>
                    <li className="d-flex justify-content-between">
                      <a href="category?page=1&cat_id=5">
                        <span className="fa fa-tags" />Property Documentation                                      </a>
                    </li>
                  </ul>
                  <h5>
                    <a href="post?show=lagos-set-to-go-digital-in-land-related-services-come-2021">
                      Lagos Set To Go Digital in Land Related Services Come 2021                                  </a>
                  </h5>
                </div>
                <div className="card-footer">
                  <div className="btn-box"><a href="post?show=lagos-set-to-go-digital-in-land-related-services-come-2021" className="read-more">Read More</a></div>
                </div>
              </div>{/* /.col-md-4 */}
            </div>
          </div>
        </div>
      </section>
    );
}

export default News;
