import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';  

class PropertyImages extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                      <div className="flash-sale-wrapper">
        <div className="container">
          <div className="section-heading d-flex align-items-center justify-content-between">
            <h6 className="ml-1">More Property Images</h6>
          </div>
       
          <OwlCarousel>
          
            <div className="card flash-sale-card">
              <div className="card-body"><a href="single-product.html"><img src="/assets/img/product/1.png" alt=""/><span className="product-title">Black Table Lamp</span>
                  <p className="sale-price">$7.99<span className="real-price">$15</span></p><span className="progress-title">33% Sold Out</span>
                
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: "33%"}} aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"></div>
                  </div></a></div>
            </div>
         
            <div className="card flash-sale-card">
              <div className="card-body"><a href="single-product.html"><img src="/assets/img/product/2.png" alt=""/><span className="product-title">Modern Sofa</span>
                  <p className="sale-price">$14<span className="real-price">$21</span></p><span className="progress-title">57% Sold Out</span>
         
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: "57%"}} aria-valuenow="57" aria-valuemin="0" aria-valuemax="100"></div>
                  </div></a></div>
            </div>
      
            <div className="card flash-sale-card">
              <div className="card-body"><a href="single-product.html"><img src="/assets/img/product/3.png" alt=""/><span className="product-title">Classic Garden Chair</span>
                  <p className="sale-price">$36<span className="real-price">$49</span></p><span className="progress-title">99% Sold Out</span>
               
                  <div className="progress">
                    <div className="progress-bar bg-danger" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div></a></div>
            </div>
          
            <div className="card flash-sale-card">
              <div className="card-body"><a href="single-product.html"><img src="/assets/img/product/1.png" alt=""/><span className="product-title">Black Table Lamp</span>
                  <p className="sale-price">$7.99<span className="real-price">$15</span></p><span className="progress-title">33% Sold Out</span>
                
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: "33%"}} aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"></div>
                  </div></a></div>
            </div>
       
            <div className="card flash-sale-card">
              <div className="card-body"><a href="single-product.html"><img src="/assets/img/product/2.png" alt=""/><span className="product-title">Modern Sofa</span>
                  <p className="sale-price">$14<span className="real-price">$21</span></p><span className="progress-title">57% Sold Out</span>
             
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: "57%"}} aria-valuenow="57" aria-valuemin="0" aria-valuemax="100"></div>
                  </div></a></div>
            </div>
        
            <div className="card flash-sale-card">
              <div className="card-body"><a href="single-product.html"><img src="/assets/img/product/3.png" alt=""/><span className="product-title">Classic Garden Chair</span>
                  <p className="sale-price">$36<span className="real-price">$49</span></p><span className="progress-title">99% Sold Out</span>
            
                  <div className="progress">
                    <div className="progress-bar bg-danger" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div></a></div>
            </div>
          </OwlCarousel>
        </div>
      </div>
            </div>
         );
    }
}
 
export default PropertyImages;