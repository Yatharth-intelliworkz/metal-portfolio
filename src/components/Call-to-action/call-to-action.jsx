import React from 'react'
import Split from '../Split'
import Link from 'next/link'

const CallToAction = ({img}) => {
    return (
      <section
        className="call-action section-padding sub-bg bg-img"
        style={{ backgroundImage: `url(${img ? img : "/img/patrn.svg"})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-lg-10">
              <div className="content sm-mb30">
                <Split>
                  <h6 className="wow words chars splitting" data-splitting>
                    Let’s Talk
                  </h6>
                  <h2 className="wow words chars splitting" data-splitting>
                    Ready to  <br /> <b className="back-color">Elevate Your Brand? </b>                    
                  </h2>
                </Split>
              </div>
            </div>

            <div className="col-md-2 col-lg-2 valign">
              <Link
                href={`/contact/contact-dark`}
              >
                <a
                  className="butn bord curve wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <span>Get In Touch</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
}

export default CallToAction