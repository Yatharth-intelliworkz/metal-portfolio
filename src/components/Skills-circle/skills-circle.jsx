import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SkillsCircle = ({ from, theme }) => {
  const cpStyle = {
    path: {
      stroke: "rgb(18, 194, 233)",
    },
    trail: {
      stroke: theme ? (theme == "dark" ? "#0f1013" : "#e5e5e5") : "",
    },
    text: {
      fill: theme ? (theme == "dark" ? "#ffffff" : "#4e4e4e") : "",
      // Text size
      fontSize: "20px",
    },
  };
  return (
    <section
      className={`skills-circle pt-50 pb-50 ${
        from ? (from === "aboutPage" ? "sub-bg" : "") : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="">
              <div className="row">
                <div className="col-md-6">
                  <div className="item wow fadeInLeft" data-wow-delay=".6">
                    <div className="skill">
                      <CircularProgressbar
                        value={100}
                        strokeWidth={0}
                        text={`${1000}+`}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>Project</span>
                      <h6>Completed</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item wow fadeInLeft" data-wow-delay=".3">
                    <div className="skill">
                      <CircularProgressbar
                        value={100}
                        strokeWidth={0}
                        text={`${50}+`}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>Metal</span>
                      <h6>Industry Clients</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsCircle;
