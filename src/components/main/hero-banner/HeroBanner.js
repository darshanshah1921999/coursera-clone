import React from 'react';
import './HeroBanner.css';
export default function HeroBanner() {
    return (
        <div>
            <section className="hero-banner">
                <div className="hero-banner-container">
                    <div className="hero-banner-text-container">
                        <h1>Your course to success</h1>
                        <div className="build-skills-text">Build skills with courses, certificates, and degrees online from world-class universities and companies</div>
                        <button>Join for Free</button>
                    </div>
                    <div className="hero-banner-background-gradinent"></div>
                    <div className="hero-banner-background-image"></div>
                </div>
            </section>
        </div>
    )
}
