import React from 'react'
import pinkish_half_circle from "./images/pinkish-half-circle.png";
import promoStat from "./images/promoStat.png";
import blue_dotted_blob_half from "./images/blue-dotted-blob-half.png";
import "./PromoAd.css";
export default function Promoad() {
    return (
        <div>
            <section className="promoAd">
                <div className="half-circle">
                    <div className="half-circle-image-container">
                        <img src={pinkish_half_circle} />
                    </div>
                </div>
                <div className="promo-img-container">
                    <div className="promostat-image-container">
                        <img src={promoStat} />
                    </div>
                </div>
                <div className="ad-text-container">
                    <h2 className="headline">Learner outcomes on Coursera</h2>
                    <p><span><strong>87% of people learning</strong> for professional development <strong>report career benefits</strong> like getting a promotion, a raise, or starting a new career</span></p>
                    <span className="subtitle">Coursera Learner Outcomes Survey (2019)</span>
                    <p className="cta-container">
                        <button className="join-for-free-btn" type="button">Join for Free</button>
                        <a href="#" className="try-coursera-for-business">Try Coursera for Business</a>
                    </p>
                </div>
                <div className="dotted-blue-blob">
                    <div className="dotted-image-container">
                        <img src={blue_dotted_blob_half} />
                    </div>
                </div>
            </section>
        </div>
    )
}
