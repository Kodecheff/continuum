import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import banner from '../../Products/images/WebSlider4.png'
import './style.scss'

function Contact() {
  return (
    <div>
      <Header />
      <div className="sliderContainer">
        <img src={banner} alt="" className="mySlider" />
      </div>

      <div className="contactForm">
        <form>
        <label>Subscribe to get updates on our latest products</label><br /><br />
          <input type="email" placeholder="Your email" />
          <button>Subscribe</button>
        </form>

        <p>Follow us on:</p>
        <span>Twitter</span>
        <span>Instagram</span>
        <span>Facebook</span>
      </div>

      <Footer />
    </div>
  )
}

export default Contact
