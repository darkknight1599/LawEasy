import React, {useState} from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

const SliderOne = () => {

    const [swiper, setSwiper] = useState(null);

    const goNext = () => {
        if (swiper !== null) {
          swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiper !== null) {
          swiper.slidePrev();
        }
    };


    return (
        <div className="banner-wrapper">
            <section className="banner-one banner-carousel__one no-dots">

                <Swiper getSwiper={setSwiper}>
                    <div className="banner-one__slide banner-one__slide-one">
                        <div className="container">
                            <div className="-1"></div>
                            {/* <div className="banner-one__bubble-2"></div>
                            <div className="banner-one__bubble-3"></div> */}
                            {/* <img src="/assets/images/slider-1-scratch.png" alt="" className="banner-one__scratch" /> */}
                            {/* <img src="/assets/images/wadhwani-banner.jpeg" className="banner-one__person" alt="" height="742px" width="440px"/> */}
                            <div className="row no-gutters">
                                <img src="/assets/images/articlebanner.jpeg" width="100%" height="100%"/>
                                <h2 className="bannerheading">Welcome to LawEasy</h2>
                                {/* <div className="col-xl-12">
                                    <h3 className="banner-one__title banner-one__light-color"> <br />
                                        <br/></h3>
                                    <p className="banner-one__tag-line">
                                        </p>
                                    <a href="#" className="thm-btn banner-one__btn">Learn More</a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="banner-one__slide banner-one__slide-two">
                        <div className="container">
                            <div className="banner-one__bubble-1"></div>
                            <div className="banner-one__bubble-2"></div>
                            <div className="banner-one__bubble-3"></div>
                            <img src="/assets/images/slider-1-scratch.png" alt="" className="banner-one__scratch" />
                            <img src="/assets/images/banner2.jpeg" className="banner-one__person" alt="" width="440px" height="742px" />
                            <div className="row no-gutters">
                                <div className="col-xl-12">
                                    <h3 className="banner-one__title banner-one__light-color">Empower  <br /> Your<br/>
                                        Learning</h3>
                                    <p className="banner-one__tag-line">With LawEasy
                                        </p>
                                    {/* <a href="#" className="thm-btn banner-one__btn">Learn More</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </Swiper>
            </section>
            <div className="banner-carousel-btn">
                <div onClick={goPrev} className="banner-carousel-btn__left-btn banner-arrow"><i className="kipso-icon-left-arrow"></i></div>
                <div onClick={goNext} className="banner-carousel-btn__right-btn banner-arrow"><i className="kipso-icon-right-arrow"></i></div>
            </div>
            {/* <div className="banner-one__cta">
                <div className="banner-one__cta-icon">
                    <i className="kipso-icon-black-graduation-cap-tool-of-university-student-for-head"></i>
                </div>
                <div className="banner-one__cta-title">
                    <h3 className="banner-one__cta-text"><a href="#">Read how we encourage our
                        students to learn</a></h3>
                </div>
                <div className="banner-one__cta-link">
                    <a href="#"><i className="kipso-icon-right-arrow"></i></a>
                </div>
            </div> */}
        </div>
    );
}
export default SliderOne;