import React, {useState} from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

const SliderTwo = () => {

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
            <section className="banner-two banner-carousel__one no-dots">
                <Swiper getSwiper={setSwiper}>
                    <div className="banner-two__slide banner-two__slide-one"
                         style={{backgroundImage: `url(assets/images/lawlogo1.png)`}}>
                        <div className="container">
                            <div className="row no-gutters">
                                <div className="col-xl-12">
                                    <p className="banner-two__tag-line">High quality
                                        courses</p>
                                    <h3 className="banner-two__title banner-two__light-color">Read & learn <br />
                                        in an easy way</h3>
                                    {/* <a href="#" className="thm-btn banner-two__btn">Learn More</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner-two__slide banner-two__slide-two"
                         style={{backgroundImage: `url(assets/images/law.png)`}}>
                        <div className="container">
                            <div className="row no-gutters">
                                <div className="col-xl-12">
                                    <p className="banner-two__tag-line">High quality
                                        courses</p>
                                    <h3 className="banner-two__title banner-two__light-color">Read & learn <br />
                                        in an easy way</h3>
                                    {/* <a href="#" className="thm-btn banner-two__btn">Learn More</a> */}
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
        </div>
    );
};

export default SliderTwo;
