import React from 'react'
import * as products from '../Products/index'
import './style.scss'

function Footer() {
  return (
    <div>
      <footer>
        <div className="menu1">
          <div className="footer overview">
            <h1>Continuum</h1>
            <p>Continuum is an E-commerce platform, giving you the best watches you can find.
              Experience time in its highest quality
            </p>
          </div>

          <div className="footer featuredProducts">
            <div className="featured">
              <img src={products.watch12.image} alt="" />
              <div>
                <p>{products.watch12.name}</p>
                <p>{products.watch12.price}</p>
              </div>
            </div>

            <div className="featured">
              <img src={products.watch13.image} alt="" />
              <div>
                <p>{products.watch13.name}</p>
                <p>{products.watch13.price}</p>
              </div>
            </div>

            <div className="featured">
              <img src={products.watch14.image} alt="" />
              <div>
                <p>{products.watch14.name}</p>
                <p>{products.watch14.price}</p>
              </div>
            </div>
          </div>

          <div className="footer topRatedProducts">
            <div className="topRated">
              <img src={products.watch15.image} alt="" />
              <div>
                <p>{products.watch15.name}</p>
                <p>{products.watch15.price}</p>
              </div>
            </div>
            <div className="topRated">
              <img src={products.watch16.image} alt="" />
              <div>
                <p>{products.watch16.name}</p>
                <p>{products.watch16.price}</p>
              </div>
            </div>
            <div className="topRated">
              <img src={products.watch10.image} alt="" />
              <div>
                <p>{products.watch10.name}</p>
                <p>{products.watch10.price}</p>
              </div>
            </div>
          </div>

          <div className="footer news">
            <div className="latestNews">
              <h3>Latest News</h3>
                <p>Hello World, what's going on??</p>
                <p>My developer's journey</p>
                <p>My design portfolio</p>
            </div>
            <div className="newsletter">
              <form>
                <input type="email" placeholder="Your email address" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        <nav>
          <ul>
            <li>FAQ</li>
            <li>PRIVACY POLICY</li>
            <li>MY ACCOUNT</li>
            <li>CONTACT US</li>
          </ul>
        </nav>

        <div className="copyright">
          <p>&copy;2020-Continuum Created by kodecheff</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
