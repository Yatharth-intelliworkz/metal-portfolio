/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import LightTheme from "../../layouts/Light";
import ContactHeader from "../../components/Contact-header/contact-header";
import ContactForm from "../../components/Contact-form/contact-form";
import Services from "../../components/Services/services";

const Contact = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    document.querySelector("body").classList.add("contact-page");
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
    return () => {
      document.querySelector("body").classList.remove("contact-page");
    };
  }, [navbarRef]);

  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      <ContactHeader blackStar />
      <div className="main-content"> 
        <section className="services bords section-padding ">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 wow fadeInLeft">
                <div className="item-box md-mb50">
                  <span className="icon pe-7s-paint-bucket"></span>
                  <h6>Our Location</h6>
                  <p>912-A, WTT, SG Highway, Ahmedabad</p>
                </div>
              </div>
              <div className="col-lg-4 wow fadeInLeft">
                <div className="item-box md-mb50">
                  <span className="icon pe-7s-paint-bucket"></span>
                  <h6>Phone Number</h6>
                  <p>1800-270-0405</p>
                </div>
              </div>
              <div className="col-lg-4 wow fadeInLeft">
                <div className="item-box md-mb50">
                  <span className="icon pe-7s-paint-bucket"></span>
                  <h6>Email Address</h6>
                  <p>info@metalerp.com</p>
                </div>
              </div>
            </div>
          </div>
          </section>       
        <ContactForm />
        <div className="map" id="ieatmaps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4557.691261181541!2d72.496987!3d22.989424!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84d5b9214f5b%3A0x769c74e50f4e7a4f!2sIntelliworkz%20Business%20Solutions%20Pvt.%20Ltd.%20-%20Creative%2C%20Digital%20and%20Technology%20Services%20Company!5e1!3m2!1sen!2sin!4v1747978005250!5m2!1sen!2sin"
            loading="lazy"
          ></iframe>
        </div>
        <Footer hideBGCOLOR />
      </div>
    </LightTheme>
  );
};

export default Contact;
