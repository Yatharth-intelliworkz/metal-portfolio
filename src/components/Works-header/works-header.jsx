import React from "react";
import fadeWhenScroll from "../../common/fadeWhenScroll";

const WorksHeader = ({ sliderRef }) => {
  React.useEffect(() => {
    fadeWhenScroll(document.querySelectorAll(".fixed-slider .capt .parlx"));
  }, []);
  return (
    <header
      ref={sliderRef}
      className="works-header fixed-slider hfixd valign sub-bg new_bg"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-9 static">
            <div className="capt mt-50">
              <div className="parlx">
                {/* <h1 className="color-font">Grow Your metal business with datanote</h1>
                <p>
                  Creativity involves breaking out of expected & repeatable
                  patterns in order to look at things in different way than ever
                  before.
                </p> */}
              </div>

              <div className="bactxt custom-font valign">
                <span className="full-width">Works</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default WorksHeader;
