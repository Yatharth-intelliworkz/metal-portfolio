/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        {/* <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Officeal Address</h6>
                    <p>504 White St . Dawsonville, GA 30534 , New York</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>support@gmail.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>+87986451666</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Recent News</h5>
              </div>
              <ul>
                <li>
                  <div className="img">
                    <Link href="/blog-details/blog-details-dark">
                      <a>
                        <img src="/img/blog/1.jpg" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/blog-details/blog-details-dark">
                      <a>
                        <p>
                          The Start-Up Ultimate Guide to Make Your WordPress
                          Journal.
                        </p>
                      </a>
                    </Link>
                    <Link href="/blog/blog-dark">
                      <a>
                        <span className="date">14 sep 2022</span>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <Link href="/blog-details/blog-details-dark">
                      <a>
                        <img src="/img/blog/2.jpg" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/blog-details/blog-details-dark">
                      <a>
                        <p>
                          The Start-Up Ultimate Guide to Make Your WordPress
                          Journal.
                        </p>
                      </a>
                    </Link>
                    <Link href="/blog/blog-dark">
                      <a>
                        <span className="date">14 sep 2022</span>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="subscribe">
                    <input type="text" placeholder="Type Your Email" />
                    <span className="subs pe-7s-paper-plane"></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src={appData.lightLogo} alt="" />
              </div>
              <div className="social">
                <a href="#0">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
              <div className="copy-right">
                <p>
                  © 2022, Vie Template. Made with passion by
                  <Link
                    href="https://themeforest.net/user/themescamp/portfolio"
                    
                  >
                    <a target="_blank">ThemesCamp</a>
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div> */}
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>India</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <a href="https://maps.app.goo.gl/d6RBoZ9Kp9uNByNz9">
                      <p> Block-B, B912-A, World Trade Tower, Nr. BMW Showroom, SG Highway, Ahmedabad - 380051</p>
                    </a>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <a href="mailto:hello@datanote.in">
                      <p>hello@datanote.in</p>
                    </a>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-phone"></span>
                  <div className="cont">
                    <a href="tel:+919737045567">
                      <p> +91 973 704 5567</p>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>UAE</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <a href="https://maps.app.goo.gl/okuqS3gp97XHr7uC8">
                      <p> Office No: 1141, 11th Floor, Tamani
                        Arts Building, Business Bay, Dubai
                        - United Arab Emirates</p>
                    </a>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <a href="mailto: uae@datanote.in">
                      <p> uae@datanote.in</p>
                    </a>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-phone"></span>
                  <div className="cont">
                    <a href="tel:+971566506550">
                      <p>+97 156 650 6550</p>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Australia</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <a href="https://maps.app.goo.gl/d6RBoZ9Kp9uNByNz9">
                      <p> Unit 2 23 Brisbane ST, Murrumbeena Victoria 3163 , Australia.</p>
                    </a>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <a href="mailto:hello@datanote.in">
                      <p>hello@datanote.in</p>
                    </a>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-phone"></span>
                  <div className="cont">
                    <a href="tel:+61481323538">
                      <p> +61 481 323 538</p>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Canada</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <a href="https://maps.app.goo.gl/d6RBoZ9Kp9uNByNz9">
                      <p>  M/s Pardean IT Solutions Brampton, Ontario, Canada.</p>
                    </a>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <a href="mailto: canada@datanote.in">
                      <p> canada@datanote.in</p>
                    </a>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-phone"></span>
                  <div className="cont">
                    <a href="tel:+16476757236">
                      <p> +1 (647) 675-7236</p>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>United States</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <a href="https://maps.app.goo.gl/d6RBoZ9Kp9uNByNz9">
                      <p> 5511 Mercier Street, Lewis Center, Ohio 43035 United States </p>
                    </a>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <a href="mailto: usa@datanote.in">
                      <p> usa@datanote.in</p>
                    </a>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-phone"></span>
                  <div className="cont">
                    <a href="tel:+16149992286">
                      <p> +16 149 992 286</p>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Follow on socials</h5>
              </div>
              <div class="social">
                <a href="#0">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-twitter"></i>
                </a>                
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
