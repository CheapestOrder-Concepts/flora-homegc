/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from 'react'
import "./modal.css"
const OptinForm = ({ showReg = true, handleClose }) => {
  const [regDetails, setRegDetails] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    category: '',
    est_interest: '',
    when_to_purchase: '',
    referer: '',

  })
const [type, settype] = useState("text");
  const { fullName, email, phoneNumber, category, est_interest, when_to_purchase, referer } = regDetails
 
  const onChange = (e) => {
    setRegDetails({ ...regDetails, [e.target.name]: e.target.value })
  }
const focus = (e) => {
 settype( e.target.type="date")
}
  const onSubmit = (e) => {
    e.preventDefault()
    handleClose()
  }

  return (<>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ marginTop: "15px" }}>
      <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content" style={{ background: "white" }}>
          <div class="modal-header" style={{ borderBottom: '0px solid #dee2e6', background: '#541484', color: '#fff' }}>
            <h4 className="font-weight-bold text-white text-center">PLEASE ENTER YOUR CORRECT DETAIL AND YOU'LL BE CONTACTED</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">

            {/* <form onSubmit={onSubmit} className="row" id="registerBox" method="post">
            <input onChange={onChange} type="text" name="name" placeholder="Name" value={name}  required/>
            <input onChange={onChange} type="email" name="email" placeholder="Email" value={email}  required/>
            <input onChange={onChange} type="number" name="phoneNumber" placeholder="Phone number" value={phoneNumber}  required/>

            <select name='category' value={category}  searchable="Search here.." className="mdb-select md-form" onChange={onChange}>
                <option value="" disabled defaultValue>Select Enquiry category</option>
                <option value="Individual buyer/Investors">Individual buyer/Investors</option>
                <option value="Property professionals and contractors ">Property professionals and contractors </option>
                <option value="Realtor, Agents, Marketers, Consultants">Realtor, Agents, Marketers, Consultants</option>
                <option value="Group of individuals, Developers, Organizations (Corporate, Club, Religious, NGO)">Group of individuals, Developers, Organizations (Corporate, Club, Religious, NGO)</option>
                <option value="Individual and Group property OWNER(family, club, corporate, religious)
">Individual and Group property OWNER(family, club, corporate, religious)
                </option>
            </select>

            <select name='est_interest' value={est_interest} searchable="Search here.." className="mdb-select md-form" onChange={onChange}>
                <option value="" disabled defaultValue> Estate Your Interest</option>
                <option value="The Hive">The Hive</option>
                <option value="The Fern Highland">The Fern Highland </option>
                <option value="Floracity Ecopolis">Floracity Ecopolis</option>
            </select>

            <input onChange={onChange} type="date" name="when_to_purchase" id="when_to_purchase" placeholder="When do you intend to purchase" value={when_to_purchase} required/>

            <select name='referer' value={referer} className="mdb-select md-form" searchable="Search here.." onChange={onChange}>
                <option value="" disabled defaultValue>How do you know about us</option>
                <option value="Instagram">Instagram</option>
                <option value="Facebook">Facebook</option>
                <option value="Twitter">Twitter</option>
                <option value="Google">Google</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="WhatsApp">WhatsApp</option>
                <option value="A Friend">A Friend</option>
                <option value="Others">Others</option>
            </select>

            <div className="btn-box mt-3" ><button style={{width:"100%", fontSize:"20px", zIndex:"1000"}} type="submit" className="theme-btn btn-style-three" value="Register"  onClick={onSubmit}><span className="btn-title">Submit</span></button></div>

        </form> */}
            <form method="post" id="customer_equiry_form">
              <div className="form-group">
                <input type="text" name="fullName" className="form-control txtOnly" id="full_name" required maxLength={50} placeholder="Full Name" onChange={onChange} value={fullName} />
              </div>
              <div className="form-group">
                <input type="number" name="phoneNumber" className="form-control number" id="phone_number" required placeholder="Phone Number" onChange={onChange} value={phoneNumber} maxLength={20} />
              </div>
              <div className="form-group">
                <input type="email" name="email" className="form-control" id="email_address" placeholder="Email" required maxLength={50} value={email} onChange={onChange} />
              </div>
              <div className="form-group">
                <select name='category' value={category} className="form-control" onChange={onChange}>
                  <option value="" disabled defaultValue> Enquiry category</option>
                  <option value="Individual buyer/Investors">Individual buyer/Investors</option>
                  <option value="Property professionals and contractors ">Property professionals and contractors </option>
                  <option value="Realtor, Agents, Marketers, Consultants">Realtor, Agents, Marketers, Consultants</option>
                  <option value="Group of individuals, Developers, Organizations (Corporate, Club, Religious, NGO)">Group of individuals, Developers, Organizations (Corporate, Club, Religious, NGO)</option>
                  <option value="Individual and Group property OWNER(family, club, corporate, religious)
">Individual and Group property OWNER(family, club, corporate, religious)
                  </option>
                </select>
              </div>

              <div className="form-group">
                {/*  <label for="service_of_interested">Select Service Of Interest</label> */}
                {/* <select name="service_of_interested" id="service_of_interested" className="form-control" required>
                  <option value selected disabled>Select Service Of Interest</option>
                  <option value="Complete Verification Service">Complete Verification Service</option>
                  <option value="Complete Property Buyer Service (Sourcing, Verification, Valuation, Negotiation, Payment, Survey and Documentation)">Complete Property Buyer Service (Sourcing, Verification, Valuation, Negotiation, Payment, Survey and Documentation)</option>
                  <option value="Bulk Land Purchase">Bulk Land Purchase</option>
                  <option value="Personalized Advisory Session">Personalized Advisory Session</option>
                  <option value="Trainings">Trainings</option>
                  <option value="Sell My Property">Sell My Property</option>
                  <option value="Our Estate">Our Estate</option>
                  <option value="Done-For-You Investment">Done-For-You Investment</option>
                  <option value="Other:">Other:</option>
                </select> */}
                 <select name='est_interest' value={est_interest} className="form-control" onChange={onChange}>
                <option value="" disabled defaultValue> Estate Of Interest</option>
                <option value="The Hive">The Hive</option>
                <option value="The Fern Highland">The Fern Highland </option>
                <option value="Floracity Ecopolis">Floracity Ecopolis</option>
            </select>
              </div>
              <div id="dynamic_field" className="form-group" style={{ display: 'none' }}>
              </div>
              <div className="form-group">
                  <label for="service_of_interested">When do you need this service</label>
                {/* <select name="when_you_need_us" id="when_you_need_us" required className="form-control">
                  <option value selected disabled>When do you need this service</option>
                  <option value="Now">Now</option>
                  <option value="In one months">In one months</option>
                  <option value="In 3 months">In 3 months</option>
                  <option value="Later in the future ">Later in the future </option>
                  <option value="I have a specific date (please enter date)">I have a specific date (please enter date)</option>
                </select> */}
                 <input onChange={onChange} type="date"  onfocus={focus} className="form-control date" name="when_to_purchase" id="when_to_purchase" placeholder="When do you intend to purchase" value={when_to_purchase} required/>
         
    
              </div>
              <div className="form-group">
                {/* <label for="how_you_know_about_us">How did you know about us?</label> */}
                <select name='referer' value={referer} className="form-control" onChange={onChange}>
                <option value="" disabled defaultValue>How do you know about us</option>
                <option value="Instagram">Instagram</option>
                <option value="Facebook">Facebook</option>
                <option value="Twitter">Twitter</option>
                <option value="Google">Google</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="WhatsApp">WhatsApp</option>
                <option value="A Friend">A Friend</option>
                <option value="Others">Others</option>
            </select>
              </div>
              {/* <div className="form-group">
                <textarea className="form-control" id="more_details_from_customer" name="more_details_from_customer" rows={3} maxLength={1000} placeholder="Explain other details you'll like us to know" required defaultValue={""} />
              </div> */}
              <div className="form-group text-center">
                <button type="submit" className="btn btn-primary btn-md" name="submit_form_btn" id="submit_form_btn">Send Details</button>
              </div>
              <div id="notification_div">
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>

  </>
  )
}

export default OptinForm
