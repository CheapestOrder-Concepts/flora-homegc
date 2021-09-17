import React from 'react'

export default function BookOptinForm() {
    return (
        <div>
             <form method="POST" id="pricing_modal_form">
              
              <div className="text-box col-lg-12 col-md-12 col-sm-12">
                <p className="text my-1">Congratulations for coming across this.</p>
                <p className="text my-1">
                  Here is the Time-Tested, Step-by-Step Guide to Making ZERO MISTAKE When Buying Real Estate Anywhere In Nigeria.
                </p>
                <p className="text my-1">This book is part of the "Preventing Real Estate Losses" projects By FloraHomes Global Consult Limited...to help Nigerians Property Investors both home and abroad.</p>
                <p className="text my-4"><b>Enter your correct details below to access it immediately without leaving the page.</b></p>
              </div>
              <hr />
              <div className="form-column mt-3 col-lg-12 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="contact-form">
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input type="text" className="form-control" name="name" placeholder="Full Name" required />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input type="text" className="form-control" name="phone" placeholder="Phone Number" required />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input type="text" className="form-control" name="whatsapp" placeholder="Whatsapp Number" required />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <select className="custom-select" name="category" required>
                          <option value>Select Enquiry Category</option>
                          <option value="Individual buyer/investor">Individual buyer/investor</option>
                          <option value="Agent, Marketer, Realtor, or Consultant">Agent, Marketer, Realtor, or Consultant</option>
                          <option value="Developer Company/Corporate Organizations">Developer Company/Corporate Organizations</option>
                          <option value="Groups of individuals, clubs etc">Groups of individuals, clubs etc</option>
                        </select>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <select className="custom-select" name="source" required>
                          <option value>How did you know about us?</option>
                          <option value="Facebook">Facebook</option>
                          <option value="Instagram ">Instagram </option>
                          <option value="Google">Google</option>
                          <option value="YouTube ">YouTube </option>
                          <option value="Twitter">Twitter</option>
                          <option value="LinkedIn ">LinkedIn </option>
                          <option value="WhatsApp ">WhatsApp </option>
                          <option value="App">App</option>
                          <option value="Friend">Friend</option>
                          <option value="Others">Others</option>
                        </select>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                      </div>
                      <div id="notification_error" />
                    </div>
                  </div>
                </div>
              </div>
            
            {/* Modal footer */}
            <div className="modal-footer">
              <button className="theme-btn btn-style-one" type="submit" name="submit-form"><span className="btn-title">Submit Now</span></button>
              {/* <button type="button" class="theme-btn btn-style-four" style=" pointer-events: none; cursor: pointer !important;" data-dismiss="modal">Close</button> */}
            </div>
          </form>
        </div>
    )
}