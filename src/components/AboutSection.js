import React from "react";
import home1 from "../img/home1.png";

const AboutSection = () => {
    return (
        <div className="description">
            <div className="title">
                <div className="hide">
                    <h2>We work to make</h2>
                </div>
                <div className="hide">
                    <h2>
                        your <span>dreams</span> come true.
                    </h2>
                </div>
                <p>
                    Contact us for any photography or videography ideas that you
                    have. We have proffesionals with amaging skills.
                </p>
                <button>Contact Us</button>
            </div>
            <img src={home1} alt="guy with a camera" />
        </div>
    );
};

export default AboutSection;
