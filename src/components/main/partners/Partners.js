import React from 'react'
import "./Partners.css";
import illinois from "./images/illinois.png";
import duke from "./images/duke.png";
import google from "./images/google.png";
import ibm from "./images/ibm.png";
import imperial from "./images/imperial.png";
import penn from "./images/penn.png";
import stanford from "./images/stanford.png";
import umich from "./images/umich.jfif";

export default function Partners() {
    return (
        <div>
            <section className="partners">
                <h3 className="partners-title">
                    <span>We collaborate with <span className="underline">200+ leading universities and companies</span></span>
                </h3>
                <div className="partnerLogo">
                    <a className="partner-image" href="#">
                        <img src={illinois} alt="University of Illinois at Urbana-Champaign" />
                    </a>
                    <a className="partner-image" href="#">
                        <img src={duke} alt="Duke University" />
                    </a>
                    <a className="partner-image" href="#">
                        <img src={google} alt="Google" />
                    </a>
                    <a className="partner-image" href="#">
                        <img src={umich} alt="University of Michigan" />
                    </a>
                    <a className="partner-image" href="#">
                        <img src={ibm} alt="IBM" />
                    </a>
                    <a className="partner-image" href="#">
                        <img src={imperial} alt="Imperial College of London" />
                    </a>
                    <a className="partner-image" href="#">
                        <img src={stanford} alt="Stanford University" />
                    </a>
                    <a className="partner-image" href="#">
                        <img src={penn} alt="University of Pennsylvania" />
                    </a>
                </div>
                <div className="partner-separator"></div>
            </section>
        </div>
    )
}
