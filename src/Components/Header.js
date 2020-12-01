import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'
import logo from '../Products/images/logo.png'
import './style.scss'

const Header = () => {
  const [dropMenu, setDropMenu] = useState({
    isDropped: false
  })

  const dropDown = () => {
    const sideBar = document.querySelector('#sideBar')
    // sideBar.classList = "show"
    setDropMenu(dropMenu.isDropped = !dropMenu.isDropped)
    // console.log(sideBar.classList)
  }

  return (
    <div>
      <header className="myHeader">
        <div id="topNav" className="topNav">
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
          <div onClick={dropDown} className="mainDropBtn">
            &#9776;
            {/* <Navbar bg="light" expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                  <Link to="/">HOME</Link>
                  <Link to="/contact">CONTACT US</Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar> */}
          </div>
        </div>

        <div className="midNav">
          <div className="midNavBox searchbar">
            <form>
              <input type="search" placeholder="Search for products" />
            </form>
          </div>

          <div className="midNavBox logo">
            <img src={logo} alt="logo" />
          </div>

          <div className="midNavBox customerSupport">
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
              <li>For Women</li>
              <li>Blog</li>
            </ul>
          </nav>
        </div>

        {/* Sidebar */}
        {dropMenu.isDropped ? (
          <div id="sideBar" className="sideBar">
          <form className="searchbar">
            <input type="search" placeholder="Search for products" />
          </form>

          <div className="customerSupport">
            <ul>
              <li>
                <p>Customer Support</p>
                <p>+2347017781541</p>
              </li>
            </ul>
          </div>

          <nav>
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/contact">CONTACT US</Link></li>
              <li><Link to="/about">ABOUT</Link></li>
            </ul>
            <ul>
              <li>Login/Register</li>
              <li>Wishlist</li>
            </ul>
            <ul>
              <li>Home</li>
              <li>Shop</li>
              <li>For Men</li>
              <li>For Women</li>
              <li>Blog</li>
            </ul>
          </nav>
        </div>
        ) : null}
        
      </header>
    </div>
  )
}

export default Header
