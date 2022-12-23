import React from "react";
import { Footer } from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Products from "./Products";
import ServiceArea from "../Components/ServiceArea";
import {
  CategrieProductActivation,
  HeroSlider,
} from "../Components/SlideLogic";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="main-wrapper">
        <HeroSlider />
        <div className="axil-categorie-area bg-color-white axil-section-gapcommon">
          <div className="container">
            <div className="section-title-wrapper">
              <span className="title-highlighter highlighter-secondary">
                {" "}
                <i className="far fa-tags"></i> Categories
              </span>
              <h2 className="title">Browse by Category</h2>
            </div>
            <div className="categrie-product-activation slick-layout-wrapper--15 axil-slick-arrow  arrow-top-slide">
              <CategrieProductActivation />
            </div>
          </div>
        </div>

        <div className="axil-poster-countdown">
          <div className="container">
            <div className="poster-countdown-wrap bg-lighter">
              <div className="row">
                <div className="col-xl-5 col-lg-6">
                  <div className="poster-countdown-content">
                    <div className="section-title-wrapper">
                      <span className="title-highlighter highlighter-secondary">
                        {" "}
                        <i className="fal fa-headphones-alt"></i> Don’t Miss!!
                      </span>
                      <h2 className="title">Enhance Your Music Experience</h2>
                    </div>
                    <div className="poster-countdown countdown mb--40"></div>
                    <a href="#" className="axil-btn btn-bg-primary">
                      Check it Out!
                    </a>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-6">
                  <div className="poster-countdown-thumbnail">
                    <img
                      src="./assets/images/product/poster/poster-03.png"
                      alt="Poster Product"
                    />
                    <div className="music-singnal">
                      <div className="item-circle circle-1"></div>
                      <div className="item-circle circle-2"></div>
                      <div className="item-circle circle-3"></div>
                      <div className="item-circle circle-4"></div>
                      <div className="item-circle circle-5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="axil-product-area bg-color-white axil-section-gap">
          <div className="container">
            <div className="section-title-wrapper">
              <span className="title-highlighter highlighter-primary">
                {" "}
                <i className="far fa-shopping-basket"></i> Our Products
              </span>
              <h2 className="title">Explore our Products</h2>
            </div>
            <div className="explore-product-activation slick-layout-wrapper slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide">
              <div className="slick-single-layout">
                <div className="row row--15">
                  <Products />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 text-center mt--20 mt_sm--0">
                <Link
                  to="/Shop"
                  className="axil-btn btn-bg-lighter btn-load-more"
                >
                  View All Products
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="axil-testimoial-area axil-section-gap bg-vista-white">
          <div className="container">
            <div className="section-title-wrapper">
              <span className="title-highlighter highlighter-secondary">
                {" "}
                <i className="fal fa-quote-left"></i>Testimonials
              </span>
              <h2 className="title">Users Feedback</h2>
            </div>
            <div className="testimonial-slick-activation testimonial-style-one-wrapper slick-layout-wrapper--20 axil-slick-arrow arrow-top-slide">
              <div className="slick-single-layout testimonial-style-one">
                <div className="review-speech">
                  <p>
                    “ It’s amazing how much easier it has been to meet new
                    people and create instantly non connections. I have the
                    exact same personal the only thing that has changed is my
                    mind set and a few behaviors. “
                  </p>
                </div>
                <div className="media">
                  <div className="thumbnail">
                    <img
                      src="./assets/images/testimonial/image-1.png"
                      alt="testimonial image"
                    />
                  </div>
                  <div className="media-body">
                    <span className="designation">Head Of Idea</span>
                    <h6 className="title">James C. Anderson</h6>
                  </div>
                </div>
              </div>
              <div className="slick-single-layout testimonial-style-one">
                <div className="review-speech">
                  <p>
                    “ It’s amazing how much easier it has been to meet new
                    people and create instantly non connections. I have the
                    exact same personal the only thing that has changed is my
                    mind set and a few behaviors. “
                  </p>
                </div>
                <div className="media">
                  <div className="thumbnail">
                    <img
                      src="./assets/images/testimonial/image-2.png"
                      alt="testimonial image"
                    />
                  </div>
                  <div className="media-body">
                    <span className="designation">Head Of Idea</span>
                    <h6 className="title">James C. Anderson</h6>
                  </div>
                </div>
              </div>
              <div className="slick-single-layout testimonial-style-one">
                <div className="review-speech">
                  <p>
                    “ It’s amazing how much easier it has been to meet new
                    people and create instantly non connections. I have the
                    exact same personal the only thing that has changed is my
                    mind set and a few behaviors. “
                  </p>
                </div>
                <div className="media">
                  <div className="thumbnail">
                    <img
                      src="./assets/images/testimonial/image-3.png"
                      alt="testimonial image"
                    />
                  </div>
                  <div className="media-body">
                    <span className="designation">Head Of Idea</span>
                    <h6 className="title">James C. Anderson</h6>
                  </div>
                </div>
              </div>
              <div className="slick-single-layout testimonial-style-one">
                <div className="review-speech">
                  <p>
                    “ It’s amazing how much easier it has been to meet new
                    people and create instantly non connections. I have the
                    exact same personal the only thing that has changed is my
                    mind set and a few behaviors. “
                  </p>
                </div>
                <div className="media">
                  <div className="thumbnail">
                    <img
                      src="./assets/images/testimonial/image-2.png"
                      alt="testimonial image"
                    />
                  </div>
                  <div className="media-body">
                    <span className="designation">Head Of Idea</span>
                    <h6 className="title">James C. Anderson</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="axil-new-arrivals-product-area bg-color-white axil-section-gap pb--0">
          <div className="container">
            <div className="product-area pb--50">
              <div className="section-title-wrapper">
                <span className="title-highlighter highlighter-primary">
                  <i className="far fa-shopping-basket"></i>This Week’s
                </span>
                <h2 className="title">New Arrivals</h2>
              </div>
              <div className="new-arrivals-product-activation slick-layout-wrapper--30 axil-slick-arrow  arrow-top-slide">
                <div className="slick-single-layout">
                  <div className="axil-product product-style-two">
                    <div className="thumbnail">
                      <Link to="/SingleProduct">
                        <img
                          data-sal="zoom-out"
                          data-sal-delay="200"
                          data-sal-duration="500"
                          src="./assets/images/product/electric/product-05.png"
                          alt="Product Images"
                        />
                      </Link>
                      <div className="label-block label-right">
                        <div className="product-badget">10% OFF</div>
                      </div>
                    </div>
                    <div className="product-content">
                      <div className="inner">
                        <div className="color-variant-wrapper">
                          <ul className="color-variant">
                            <li className="color-extra-01 active">
                              <span>
                                <span className="color"></span>
                              </span>
                            </li>
                            <li className="color-extra-02">
                              <span>
                                <span className="color"></span>
                              </span>
                            </li>
                            <li className="color-extra-03">
                              <span>
                                <span className="color"></span>
                              </span>
                            </li>
                          </ul>
                        </div>
                        <h5 className="title">
                          <Link to="/SingleProduct">Demon's Souls</Link>
                        </h5>
                        <div className="product-price-variant">
                          <span className="price old-price">$40</span>
                          <span className="price current-price">$30</span>
                        </div>
                        <div className="product-hover-action">
                          <ul className="cart-action">
                            <li className="quickview">
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#quick-view-modal"
                              >
                                <i className="far fa-eye"></i>
                              </a>
                            </li>
                            <li className="select-option">
                              <Link to="/SingleProduct">Add to Cart</Link>
                            </li>
                            <li className="wishlist">
                              <Link to="/Wishlist">
                                <i className="far fa-heart"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slick-single-layout">
                  <div className="axil-product product-style-two">
                    <div className="thumbnail">
                      <Link to="/SingleProduct">
                        <img
                          data-sal="zoom-out"
                          data-sal-delay="300"
                          data-sal-duration="500"
                          src="./assets/images/product/electric/product-06.png"
                          alt="Product Images"
                        />
                      </Link>
                    </div>
                    <div className="product-content">
                      <div className="inner">
                        <div className="color-variant-wrapper">
                          <ul className="color-variant">
                            <li className="color-extra-01 active">
                              <span>
                                <span className="color"></span>
                              </span>
                            </li>
                            <li className="color-extra-02">
                              <span>
                                <span className="color"></span>
                              </span>
                            </li>
                            <li className="color-extra-03">
                              <span>
                                <span className="color"></span>
                              </span>
                            </li>
                          </ul>
                        </div>
                        <h5 className="title">
                          <Link to="/SingleProduct">Google Home</Link>
                        </h5>
                        <div className="product-price-variant">
                          <span className="price old-price">$50</span>
                          <span className="price current-price">$40</span>
                        </div>
                      </div>
                      <div className="product-hover-action">
                        <ul className="cart-action">
                          <li className="quickview">
                            <a
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#quick-view-modal"
                            >
                              <i className="far fa-eye"></i>
                            </a>
                          </li>
                          <li className="select-option">
                            <Link to="/SingleProduct">Select Option</Link>
                          </li>
                          <li className="wishlist">
                            <Link to="/Wishlist">
                              <i className="far fa-heart"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slick-single-layout">
                  <div className="axil-product product-style-two">
                    <div className="thumbnail">
                      <Link to="/SingleProduct">
                        <img
                          data-sal="zoom-out"
                          data-sal-delay="400"
                          data-sal-duration="500"
                          src="./assets/images/product/electric/product-07.png"
                          alt="Product Images"
                        />
                      </Link>
                      <div className="label-block label-right">
                        <div className="product-badget">15% OFF</div>
                      </div>
                    </div>
                    <div className="product-content">
                      <div className="inner">
                        <div className="color-variant-wrapper">
                          <ul className="color-variant">
                            <li className="color-extra-01 active">
                              <span>
                                <span className="color"></span>
                              </span>
                            </li>
                            <li className="color-extra-02">
                              <span>
                                <span className="color"></span>
                              </span>
                            </li>
                            <li className="color-extra-03">
                              <span>
                                <span className="color"></span>
                              </span>
                            </li>
                          </ul>
                        </div>
                        <h5 className="title">
                          <Link to="/SingleProduct">Netfilx Remot</Link>
                        </h5>
                        <div className="product-price-variant">
                          <span className="price old-price">$60</span>
                          <span className="price current-price">$45</span>
                        </div>
                        <div className="product-hover-action">
                          <ul className="cart-action">
                            <li className="quickview">
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#quick-view-modal"
                              >
                                <i className="far fa-eye"></i>
                              </a>
                            </li>
                            <li className="select-option">
                              <Link to="/SingleProduct">Add to Cart</Link>
                            </li>
                            <li className="wishlist">
                              <Link to="/Wishlist">
                                <i className="far fa-heart"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slick-single-layout">
                  <div className="axil-product product-style-two">
                    <div className="thumbnail">
                      <Link to="/SingleProduct">
                        <img
                          data-sal="zoom-out"
                          data-sal-delay="500"
                          data-sal-duration="500"
                          src="./assets/images/product/electric/product-08.png"
                          alt="Product Images"
                        />
                      </Link>
                      <div className="label-block label-right">
                        <div className="product-badget">30% OFF</div>
                      </div>
                    </div>
                    <div className="product-content">
                      <div className="inner">
                        <div className="color-variant-wrapper">
                          <ul className="color-variant">
                            <li className="color-extra-01 active">
                              <span>
                                <span className="color"></span>
                              </span>
                            </li>
                            <li className="color-extra-02">
                              <span>
                                <span className="color"></span>
                              </span>
                            </li>
                            <li className="color-extra-03">
                              <span>
                                <span className="color"></span>
                              </span>
                            </li>
                          </ul>
                        </div>
                        <h5 className="title">
                          <Link to="/SingleProduct">Digital Accessories</Link>
                        </h5>
                        <div className="product-price-variant">
                          <span className="price old-price">$30</span>
                          <span className="price current-price">$20</span>
                        </div>
                        <div className="product-hover-action">
                          <ul className="cart-action">
                            <li className="quickview">
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#quick-view-modal"
                              >
                                <i className="far fa-eye"></i>
                              </a>
                            </li>
                            <li className="select-option">
                              <Link to="/SingleProduct">Add to Cart</Link>
                            </li>
                            <li className="wishlist">
                              <Link to="/Wishlist">
                                <i className="far fa-heart"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slick-single-layout">
                  <div className="axil-product product-style-two">
                    <div className="thumbnail">
                      <Link to="/SingleProduct">
                        <img
                          data-sal="zoom-out"
                          data-sal-delay="100"
                          data-sal-duration="500"
                          src="./assets/images/product/electric/product-04.png"
                          alt="Product Images"
                        />
                      </Link>
                      <div className="label-block label-right">
                        <div className="product-badget">50% OFF</div>
                      </div>
                    </div>
                    <div className="product-content">
                      <div className="inner">
                        <div className="color-variant-wrapper">
                          <ul className="color-variant">
                            <li className="color-extra-01 active">
                              <span>
                                <span className="color"></span>
                              </span>
                            </li>
                            <li className="color-extra-02">
                              <span>
                                <span className="color"></span>
                              </span>
                            </li>
                            <li className="color-extra-03">
                              <span>
                                <span className="color"></span>
                              </span>
                            </li>
                          </ul>
                        </div>
                        <h5 className="title">
                          <Link to="/SingleProduct">PS5 Smart Remote</Link>
                        </h5>
                        <div className="product-price-variant">
                          <span className="price old-price">$50</span>
                          <span className="price current-price">$25</span>
                        </div>
                        <div className="product-hover-action">
                          <ul className="cart-action">
                            <li className="quickview">
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#quick-view-modal"
                              >
                                <i className="far fa-eye"></i>
                              </a>
                            </li>
                            <li className="select-option">
                              <Link to="/SingleProduct">Add to Cart</Link>
                            </li>
                            <li className="wishlist">
                              <Link to="/Wishlist">
                                <i className="far fa-heart"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="axil-most-sold-product axil-section-gap">
          <div className="container">
            <div className="product-area pb--50">
              <div className="section-title-wrapper section-title-center">
                <span className="title-highlighter highlighter-primary">
                  <i className="fas fa-star"></i> Most Sold
                </span>
                <h2 className="title">Most Sold in eTrade Store</h2>
              </div>
              <div className="row row-cols-xl-2 row-cols-1 row--15">
                <div className="col">
                  <div className="axil-product-list">
                    <div className="thumbnail">
                      <Link to="/SingleProduct">
                        <img
                          data-sal="zoom-in"
                          data-sal-delay="100"
                          data-sal-duration="1500"
                          src="./assets/images/product/electric/product-09.png"
                          alt="Yantiti Leather Bags"
                        />
                      </Link>
                    </div>
                    <div className="product-content">
                      <div className="product-rating">
                        <span className="rating-icon">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fal fa-star"></i>
                        </span>
                        <span className="rating-number">
                          <span>100+</span> Reviews
                        </span>
                      </div>
                      <h6 className="product-title">
                        <Link to="/SingleProduct">Media Remote</Link>
                      </h6>
                      <div className="product-price-variant">
                        <span className="price current-price">$29.99</span>
                        <span className="price old-price">$49.99</span>
                      </div>
                      <div className="product-cart">
                        <a href="cart.html" className="cart-btn">
                          <i className="fal fa-shopping-cart"></i>
                        </a>
                        <Link to="/Wishlist" className="cart-btn">
                          <i className="fal fa-heart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="axil-product-list">
                    <div className="thumbnail">
                      <Link to="/SingleProduct">
                        <img
                          data-sal="zoom-in"
                          data-sal-delay="200"
                          data-sal-duration="1500"
                          src="./assets/images/product/electric/product-10.png"
                          alt="Yantiti Leather Bags"
                        />
                      </Link>
                    </div>
                    <div className="product-content">
                      <div className="product-rating">
                        <span className="rating-icon">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fal fa-star"></i>
                        </span>
                        <span className="rating-number">
                          <span>50+</span> Reviews
                        </span>
                      </div>
                      <h6 className="product-title">
                        <Link to="/SingleProduct">HD Camera</Link>
                      </h6>
                      <div className="product-price-variant">
                        <span className="price current-price">$49.99</span>
                      </div>
                      <div className="product-cart">
                        <a href="cart.html" className="cart-btn">
                          <i className="fal fa-shopping-cart"></i>
                        </a>
                        <Link to="/Wishlist" className="cart-btn">
                          <i className="fal fa-heart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="axil-product-list">
                    <div className="thumbnail">
                      <Link to="/SingleProduct">
                        <img
                          data-sal="zoom-in"
                          data-sal-delay="300"
                          data-sal-duration="1500"
                          src="./assets/images/product/electric/product-11.png"
                          alt="Yantiti Leather Bags"
                        />
                      </Link>
                    </div>
                    <div className="product-content">
                      <div className="product-rating">
                        <span className="rating-icon">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fal fa-star"></i>
                        </span>
                        <span className="rating-number">
                          <span>120+</span> Reviews
                        </span>
                      </div>
                      <h6 className="product-title">
                        <Link to="/SingleProduct">Gaming Controller</Link>
                      </h6>
                      <div className="product-price-variant">
                        <span className="price current-price">$50.00</span>
                      </div>
                      <div className="product-cart">
                        <a href="cart.html" className="cart-btn">
                          <i className="fal fa-shopping-cart"></i>
                        </a>
                        <Link to="/Wishlist" className="cart-btn">
                          <i className="fal fa-heart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="axil-product-list">
                    <div className="thumbnail">
                      <Link to="/SingleProduct">
                        <img
                          data-sal="zoom-in"
                          data-sal-delay="400"
                          data-sal-duration="1500"
                          src="./assets/images/product/electric/product-12.png"
                          alt="Yantiti Leather Bags"
                        />
                      </Link>
                    </div>
                    <div className="product-content">
                      <div className="product-rating">
                        <span className="rating-icon">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fal fa-star"></i>
                        </span>
                        <span className="rating-number">
                          <span>30+</span> Reviews
                        </span>
                      </div>
                      <h6 className="product-title">
                        <Link to="/SingleProduct">Wall Mount </Link>
                      </h6>
                      <div className="product-price-variant">
                        <span className="price current-price">$19.00</span>
                      </div>
                      <div className="product-cart">
                        <a href="cart.html" className="cart-btn">
                          <i className="fal fa-shopping-cart"></i>
                        </a>
                        <Link to="/Wishlist" className="cart-btn">
                          <i className="fal fa-heart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="axil-product-list">
                    <div className="thumbnail">
                      <Link to="/SingleProduct">
                        <img
                          data-sal="zoom-in"
                          data-sal-delay="500"
                          data-sal-duration="1500"
                          src="./assets/images/product/electric/product-13.png"
                          alt="Yantiti Leather Bags"
                        />
                      </Link>
                    </div>
                    <div className="product-content">
                      <div className="product-rating">
                        <span className="rating-icon">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fal fa-star"></i>
                        </span>
                        <span className="rating-number">
                          <span>700+</span> Reviews
                        </span>
                      </div>
                      <h6 className="product-title">
                        <Link to="/SingleProduct">Lenevo Laptop</Link>
                      </h6>
                      <div className="product-price-variant">
                        <span className="price current-price">$999.99</span>
                      </div>
                      <div className="product-cart">
                        <a href="cart.html" className="cart-btn">
                          <i className="fal fa-shopping-cart"></i>
                        </a>
                        <Link to="/Wishlist" className="cart-btn">
                          <i className="fal fa-heart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="axil-product-list">
                    <div className="thumbnail">
                      <Link to="/SingleProduct">
                        <img
                          data-sal="zoom-in"
                          data-sal-delay="600"
                          data-sal-duration="1500"
                          src="./assets/images/product/electric/product-14.png"
                          alt="Yantiti Leather Bags"
                        />
                      </Link>
                    </div>
                    <div className="product-content">
                      <div className="product-rating">
                        <span className="rating-icon">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fal fa-star"></i>
                        </span>
                        <span className="rating-number">
                          <span>300+</span> Reviews
                        </span>
                      </div>
                      <h6 className="product-title">
                        <Link to="/SingleProduct">Juice Grinder Machine</Link>
                      </h6>
                      <div className="product-price-variant">
                        <span className="price current-price">$99.00</span>
                      </div>
                      <div className="product-cart">
                        <a href="cart.html" className="cart-btn">
                          <i className="fal fa-shopping-cart"></i>
                        </a>
                        <Link to="/Wishlist" className="cart-btn">
                          <i className="fal fa-heart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="axil-product-list">
                    <div className="thumbnail">
                      <Link to="/SingleProduct">
                        <img
                          data-sal="zoom-in"
                          data-sal-delay="400"
                          data-sal-duration="1500"
                          src="./assets/images/product/electric/product-15.png"
                          alt="Yantiti Leather Bags"
                        />
                      </Link>
                    </div>
                    <div className="product-content">
                      <div className="product-rating">
                        <span className="rating-icon">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fal fa-star"></i>
                        </span>
                        <span className="rating-number">
                          <span>100+</span> Reviews
                        </span>
                      </div>
                      <h6 className="product-title">
                        <Link to="/SingleProduct">Wireless Headphone</Link>
                      </h6>
                      <div className="product-price-variant">
                        <span className="price current-price">$59.99</span>
                      </div>
                      <div className="product-cart">
                        <a href="cart.html" className="cart-btn">
                          <i className="fal fa-shopping-cart"></i>
                        </a>
                        <Link to="/Wishlist" className="cart-btn">
                          <i className="fal fa-heart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="axil-product-list">
                    <div className="thumbnail">
                      <Link to="/SingleProduct">
                        <img
                          data-sal="zoom-in"
                          data-sal-delay="500"
                          data-sal-duration="1500"
                          src="./assets/images/product/electric/product-16.png"
                          alt="Yantiti Leather Bags"
                        />
                      </Link>
                    </div>
                    <div className="product-content">
                      <div className="product-rating">
                        <span className="rating-icon">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fal fa-star"></i>
                        </span>
                        <span className="rating-number">
                          <span>100+</span> Reviews
                        </span>
                      </div>
                      <h6 className="product-title">
                        <Link to="/SingleProduct">Asus Zenbook Laptop</Link>
                      </h6>
                      <div className="product-price-variant">
                        <span className="price current-price">$899.00</span>
                      </div>
                      <div className="product-cart">
                        <a href="cart.html" className="cart-btn">
                          <i className="fal fa-shopping-cart"></i>
                        </a>
                        <Link to="/Wishlist" className="cart-btn">
                          <i className="fal fa-heart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="axil-why-choose-area pb--50 pb_sm--30">
          <div className="container">
            <div className="section-title-wrapper section-title-center">
              <span className="title-highlighter highlighter-secondary">
                <i className="fal fa-thumbs-up"></i>Why Us
              </span>
              <h2 className="title">Why People Choose Us</h2>
            </div>
            <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 row--20">
              <div className="col">
                <div className="service-box">
                  <div className="icon">
                    <img
                      src="./assets/images/icons/service6.png"
                      alt="Service"
                    />
                  </div>
                  <h6 className="title">Fast &amp; Secure Delivery</h6>
                </div>
              </div>
              <div className="col">
                <div className="service-box">
                  <div className="icon">
                    <img
                      src="./assets/images/icons/service7.png"
                      alt="Service"
                    />
                  </div>
                  <h6 className="title">100% Guarantee On Product</h6>
                </div>
              </div>
              <div className="col">
                <div className="service-box">
                  <div className="icon">
                    <img
                      src="./assets/images/icons/service8.png"
                      alt="Service"
                    />
                  </div>
                  <h6 className="title">24 Hour Return Policy</h6>
                </div>
              </div>
              <div className="col">
                <div className="service-box">
                  <div className="icon">
                    <img
                      src="./assets/images/icons/service9.png"
                      alt="Service"
                    />
                  </div>
                  <h6 className="title">24 Hour Return Policy</h6>
                </div>
              </div>
              <div className="col">
                <div className="service-box">
                  <div className="icon">
                    <img
                      src="./assets/images/icons/service10.png"
                      alt="Service"
                    />
                  </div>
                  <h6 className="title">Next Level Pro Quality</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="axil-poster">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb--30">
                <div className="single-poster">
                  <a href="shop.html">
                    <img
                      src="./assets/images/product/poster/poster-01.png"
                      alt="eTrade promotion poster"
                    />
                    <div className="poster-content">
                      <div className="inner">
                        <h3 className="title">
                          Rich sound, <br /> for less.
                        </h3>
                        <span className="sub-title">
                          Collections{" "}
                          <i className="fal fa-long-arrow-right"></i>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 mb--30">
                <div className="single-poster">
                  <a href="shop-sidebar.html">
                    <img
                      src="./assets/images/product/poster/poster-02.png"
                      alt="eTrade promotion poster"
                    />
                    <div className="poster-content content-left">
                      <div className="inner">
                        <span className="sub-title">50% Offer In Winter</span>
                        <h3 className="title">
                          Get VR <br /> Reality Glass
                        </h3>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="axil-newsletter-area axil-section-gap pt--0">
          <div className="container">
            <div className="etrade-newsletter-wrapper bg_image bg_image--5">
              <div className="newsletter-content">
                <span className="title-highlighter highlighter-primary2">
                  <i className="fas fa-envelope-open"></i>Newsletter
                </span>
                <h2 className="title mb--40 mb_sm--30">Get weekly update</h2>
                <div className="input-group newsletter-form">
                  <div className="position-relative newsletter-inner mb--15">
                    <input placeholder="example@gmail.com" type="text" />
                  </div>
                  <button type="submit" className="axil-btn mb--15">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ServiceArea />
      <Footer />
    </>
  );
};

export default Home;
