import React, {useState, useEffect} from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Header from '../../Components/Header';
import Footer from '../../Components/Footer'
import * as products from '../../Products/index'
import webslider1 from '../../Products/images/WebSlider1.png'
import webslider2 from '../../Products/images/WebSlider2.png'
import webslider4 from '../../Products/images/WebSlider4.png'
import './style.scss';

function Landingpage() {

  return (
    <div className="">
      <Header />
        <AliceCarousel
        autoPlay
        autoPlayInterval="1000"
        animationDuration= "2000"
        animationType="fadeout"
        infinite
        >
          <div className="sliderImage">
            <img src={webslider1} alt=""/>
            <div className="sliderContent">
              <h1>Xperience Time</h1>
            </div>
          </div>

          <div className="sliderImage">
            <img src={webslider2} alt=""/>
            <div className="sliderContent">
              <h1>Quality Time</h1>
            </div>
          </div>

          <div className="sliderImage">
            <img src={webslider4} alt=""/>
            <div className="sliderContent">
              <h1>Capture Time</h1>
            </div>
          </div>
        </AliceCarousel>
      
      <div className="features">
        
      </div>

      <div className="bestSellingProducts">
        <h2>Best Selling Products</h2>
            <div className="product-cards">
              <div className="product-card">
                <img src={products.watch2.image} alt="" />
                <p className="productName">{products.watch2.name}</p>
                <hr />
                <p className="productPrice">{products.watch2.price}</p>
              </div>

              <div className="product-card">
                <img src={products.watch3.image} alt="" />
                <p className="productName">{products.watch3.name}</p>
                <hr />
                <p className="productPrice">{products.watch3.price}</p>
              </div>

              <div className="product-card">
                <img src={products.watch4.image} alt="" />
                <p className="productName">{products.watch4.name}</p>
                <hr />
                <p className="productPrice">{products.watch4.price}</p>
              </div>

              <div className="product-card">
                <img src={products.watch5.image} alt="" />
                <p className="productName">{products.watch5.name}</p>
                <hr />
                <p className="productPrice">{products.watch5.price}</p>
              </div>

              <div className="product-card">
                <img src={products.watch6.image} alt="" />
                <p className="productName">{products.watch6.name}</p>
                <hr />
                <p className="productPrice">{products.watch6.price}</p>
              </div>

              <div className="product-card">
                <img src={products.watch7.image} alt="" />
                <p className="productName">{products.watch7.name}</p>
                <hr />
                <p className="productPrice">{products.watch7.price}</p>
              </div>

              <div className="product-card">
                <img src={products.watch8.image} alt="" />
                <p className="productName">{products.watch8.name}</p>
                <hr />
                <p className="productPrice">{products.watch8.price}</p>
              </div>

              <div className="product-card">
                <img src={products.watch9.image} alt="" />
                <p className="productName">{products.watch9.name}</p>
                <hr />
                <p className="productPrice">{products.watch9.price}</p>
              </div>

              <div className="product-card">
                <img src={products.watch10.image} alt="" />
                <p className="productName">{products.watch10.name}</p>
                <hr />
                <p className="productPrice">{products.watch10.price}</p>
              </div>

              <div className="product-card">
                <img src={products.watch11.image} alt="" />
                <p className="productName">{products.watch11.name}</p>
                <hr />
                <p className="productPrice">{products.watch11.price}</p>
              </div>
            </div>
      </div>
      <Footer />
    </div>
  );
}

export default Landingpage
