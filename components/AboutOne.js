import React, {Component} from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

class AboutOne extends Component {
    constructor(){
        super()
        this.state = {
            startCounter: false
        }
    }

    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({startCounter: true});
        }
    }

    render() {
        return (
            <section className="about-one ">
                <img src="assets/images/circle-stripe.png" className="about-one__circle" alt="" />
                    <div className="container text-center">
                        <div className="block-title text-center">
                            <h2 className="block-title__title">Let’s do study with <br />
                                expert teachers</h2>
                        </div>
                        <div className="about-one__img">
                            <div className="row">
                                <div className="col-lg-6">
                                    <img src="assets/images/student.jpg" alt="" width="570" height="298" />
                                </div>
                                <div className="col-lg-6">
                                    <img src="assets/images/student2.jpg" alt="" width="570" height="298"/>
                                </div>
                            </div>
                            <div className="about-one__review">
                                <p className="about-one__review-count counter">
                                    <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall><CountUp end={this.state.startCounter ? 88750 : 0} /></VisibilitySensor>
                                </p>
                                <div className="about-one__review-stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <p className="about-one__review-text">students loved us</p>
                            </div>
                        </div>
                        <p className="about-one__text">Law Easy classes provide comprehensive legal education,<br/>
                         covering various aspects of the legal system, rights, and responsibilities.<br/> Students 
                         learn about legal principles, analysis, and critical thinking to become competent legal professionals.</p>
                        {/* <a href="#" className="thm-btn about-one__btn">Start Learning Now</a> */}
                    </div>
            </section>
        );
    }
}

export default AboutOne;