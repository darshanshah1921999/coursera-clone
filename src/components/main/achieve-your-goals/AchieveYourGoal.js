import React from 'react'
import SvgaColorCertificate from "./images/SvgaColorCertificate.png";
import SvgaCommunity from "./images/SvgaCommunity.png";
import SvgaLearn from "./images/SvgaLearn.png";
import teacher_img from "./images/teacher-img.png";
import "./AchieveYourGoal.css";

export default function AchieveYourGoal() {
    return (
        <div>
            <section className="achieveYourGoals">
                <h2 className="achieveYourGoals-title">Acheive your goals with Coursera</h2>
                <ul className="achieveYourGoals-value-list">
                    <li className="achieveYourGoals-value-item">
                        <div className="achieveYourGoals-img-container">
                            <img src={SvgaLearn} />
                        </div>
                        <div className="achieveYourGoals-value-title">
                            <span>
                                <span className="goal">Learn the latest skills</span> <small>like business analytics, graphic design, Python, and more</small>
                            </span>
                        </div>
                    </li>
                    <li className="achieveYourGoals-value-item">
                        <div className="achieveYourGoals-img-container">
                            <img src={teacher_img}/>
                        </div>
                        <div className="achieveYourGoals-value-title">
                            <span><span className="goal">Get ready for a career</span> <small>in high-demand fields like IT, AI and cloud engineering</small></span>
                        </div>
                    </li>
                    <li className="achieveYourGoals-value-item">
                        <div className="achieveYourGoals-img-container">
                            <img src={SvgaColorCertificate} />
                        </div>
                        <div className="achieveYourGoals-value-title">
                            <span><span className="goal">Earn a certificate or degree</span> <small>from a leading university in business, computer science, and more</small></span>
                        </div>
                    </li>
                    <li className="achieveYourGoals-value-item">
                        <div className="achieveYourGoals-img-container">
                            <img src={SvgaCommunity} />
                        </div>
                        <div className="achieveYourGoals-value-title">
                            <span><span className="goal">Upskill your organization</span> <small>with on-demand training and development programs</small></span>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    )
}
