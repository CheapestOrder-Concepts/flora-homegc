import React, { useState } from 'react'

const Reg = ({ showReg }) => {
    const [regDetails, setRegDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        callNumber: '',
        whatsAppNumber: '',
        message:'',
        state: '',
        country: '',
        category: '',
        referer: '',
        password: '',
        password2: ''
    })

    const { firstName, lastName, email, callNumber, whatsAppNumber, message, state, country, category, referer, password, password2 } = regDetails

    const onChange = (e) => {
        setRegDetails({ ...regDetails, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={onSubmit} className={`${showReg ? 'regShow' : 'regHide'}`} id="registerBox" method="post">
            <input onChange={onChange} name='firstName' type="text" placeholder="Firstname" value={firstName} required />
            <input onChange={onChange} name='lastName' type="text" placeholder="Surname" value={lastName} required />
            <input onChange={onChange} name='email' type="email" placeholder="E-mail" value={email} required />
            <input onChange={onChange} name='callNumber' type="number" placeholder="telephone number" value={callNumber} required />
            <input onChange={onChange} name='whatsAppNumber' type='number' placeholder="Whatsapp number" value={whatsAppNumber} required />
            <input onChange={onChange} name='state' type="text" placeholder="Enter your state" value={state} required />
            <input onChange={onChange} name='country' type="text" placeholder="Country" value={country} required />
            <select name='category' value={category} className="mdb-select md-form" searchable="Search here.." onChange={onChange}>
                <option value="" disabled selected>Select your category</option>
                <option value="Individual buyer/Investors">Individual buyer/Investors</option>
                <option value="Property professionals and contractors ">Property professionals and contractors </option>
                <option value="Realtor, Agents, Marketers, Consultants">Realtor, Agents, Marketers, Consultants</option>
                <option value="Group of individuals, Developers, Organizations (Corporate, Club, Religious, NGO)">Group of individuals, Developers, Organizations (Corporate, Club, Religious, NGO)</option>
                <option value="Individual and Group property OWNER(family, club, corporate, religious)
">Individual and Group property OWNER(family, club, corporate, religious)
                </option>
            </select>

            <select name='referer' value={referer} className="mdb-select md-form" searchable="Search here.." onChange={onChange}>
                <option value="" disabled selected>How do you know about us</option>
                <option value="Instagram">Instagram</option>
                <option value="Facebook">Facebook</option>
                <option value="Twitter">Twitter</option>
                <option value="Google">Google</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="WhatsApp">WhatsApp</option>
                <option value="A Friend">A Friend</option>
                <option value="Others">Others</option>
            </select>

            <input onChange={onChange} name='password' type="password" placeholder="Password" value={password} required minLength='6' />
            <input onChange={onChange} name='password2' type="password" placeholder="Confirm-Password" value={password2} required minLength='6' />
      {/*TODO: Style the textarea */}
            <textarea onChange={onChange} name="message" value={message} placeholder="Any message?(how do you want us to help)"> </textarea>
            <input type='submit' value='Register' className="lr-submit" onClick={onSubmit} />
        </form>
    )
}

export default Reg
