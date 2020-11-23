import React from 'react'
import andrewng from "./images/andrewng.png";
import offerings2 from "./images/offerings2.png";
import "./Static.css";
import quizCompletion from "./images/quizCompletion.png";
import certificates4 from "./images/certificates4.png";

export default function Quality() {
    return (
        <div>
            <section className="quality-container">
                <h2>World-class learning for anyone, anywhere</h2>
                <div>
                    <div className="quality-container-list">
                        <div className="text">
                            <div className="label">Top Quality</div>
                            <h3>Learn from leading universities and companies</h3>
                            <div className="seprator"></div>
                            <p>
                                <span>
                                    Start streaming on-demand video lectures today from top instructors in subjects like&nbsp;
                                    <a className="link">business</a>,&nbsp;
                                    <a className="link">computer science</a>,&nbsp;
                                    <a className="link">data science</a>,&nbsp;
                                    <a className="link">language learning</a>, &more.
                                </span>
                            </p>
                        </div>
                        <div className="image-right">
                            <div className="image-wrap">
                                <div className="image-caption">
                                    Andrew Ng, Founder, deeplearning.ai; Coursera, Co-Founder
                                </div>
                                <div className="image-container">
                                    <img src={andrewng} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accessible-container">
                    <div className="accessible-image">
                        <div className="accessible-image-wrap">
                            <div className="accessible-image">
                                <img src={offerings2} />
                            </div>
                        </div>
                    </div>
                    <div className="accessible-text">
                        <div className="label">Accessible</div>
                        <h3>Find flexible, affordable options </h3>
                        <div className="seprator"></div>
                        <p>
                            <span>
                                Choose from many options including&nbsp;
                            </span>
                            <strong>free cources</strong>&nbsp;and&nbsp;
                            <a className="link">university degrees</a>&nbsp;
                            at a breakthrough price. Learn at your own pace, 100% online. 
                        </p>
                    </div>
                </div>
            </section>
            <section className="accessible-container">
                <div className="text">
                    <div className='label'>Applied Learning</div>
                    <h3>Master skills with in-depth learning</h3>
                    <div className="seprator"></div>
                    <p>
                        <span>
                            Apply what you learn with&nbsp;
                            <strong>self-paced quizzes and hands-on projects</strong>
                            . Get feedback from a global community of learners.
                        </span>
                    </p>
                </div>
                <div className="learning-image-right">
                    <div className="learning-image-container">
                        <img src={quizCompletion} />
                    </div>
                </div>
            </section>
            
            <section className="sharable-certi">
                <div className="sharable-image">
                    <div className="sharable-image-wrap">
                        <img src={certificates4} />
                    </div>
                </div>
                <div className="sharable-text">
                    <div className="label">Shareable Certificates</div>
                    <h3>Earn industry-recognized credentials</h3>
                    <div className="seprator"></div>
                    <p>
                        <span>
                            Demonstrate your new skills by sharing your Course Certificate,&nbsp;
                            <a hidden="#" className="link">Professional Certificate</a>
                            ,&nbsp;<a hidden="#" className="link">MasterTrack™ Certificate</a>
                            , or diploma with your network.
                        </span>
                    </p>
                </div>
            </section>
        </div>
    )
}
