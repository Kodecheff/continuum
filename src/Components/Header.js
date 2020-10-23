import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'

function header() {
  return (
    <div>
      <header className="myHeader">
        <div className="topNav">
          <div className="leftTopNav">
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/contact">CONTACT US</Link></li>
              <li><Link to="/about">ABOUT</Link></li>
            </ul>
          </div>

          <nav className="rightTopNav">
            <ul>
              <li>Login/Register</li>
              <li>Wishlist</li>
              <li>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>

        <div className="midNav">
          <div className="searchbar">
            <form>
              <input type="search" placeholder="Search for products" />
            </form>
          </div>

          <div className="Logo">
            <h2>Continuum</h2>
          </div>

          <div className="customerSupport">
            <ul>
              <li>
                <p>Customer Support</p>
                <p>+2347017781541</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mainNav">
          <nav>
            <ul>
              <li>Home</li>
              <li>Shop</li>
              <li>For Men</li>
              <li>Blog</li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default header
