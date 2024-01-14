import React from 'react'
import LinkedIn from '../../assets/LinkedIn.png'
import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'
import './contact.css'


const contact = () => {
  return (
    <div id='contacts'>
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form to discuss any work opportunities.</span>
        <form className="contactForm">
            <input type="text" className="name" placeholder='Your Name'/>
            <input type="email" className="email" placeholder='Your email'/>
            <textarea className='msg'name="message" rows="5" placeholder='Your Message'></textarea>
            <button type='submit' value='send' className='submitBtn'>Submit</button>
            <div className="Links">
                <img src={LinkedIn} alt="LinkedIn" className="link"/>
                <img src={instagram} alt="facebook" className="link" />
                <img src={twitter} alt="twitter" className="link" style={{'marginRight':'220px'}}/>
            </div>
        </form>
      
    </div>
  )
}

export default contact
