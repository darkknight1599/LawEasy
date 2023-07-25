import React from 'react';
import Swiper from 'react-id-swiper';
import ReactPlayer from 'react-player';
import 'swiper/css/swiper.css';

const CourseCatOne = () => {

    const params = {
        slidesPerView : 3,
        loop: true,
        speed: 1000,
        spaceBetween : 100,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },

        // Responsive breakpoints
        breakpoints: {
            1024:{
                slidesPerView : 2
            },
            768:{
                slidesPerView : 1
            },
            640:{
                slidesPerView : 1

            },
            320:{
                slidesPerView : 1
            }
        }
    }

    return (
        <section className="thm-gray-bg course-category-one">
            <div className="container-fluid text-center">
                <div className="block-title text-center">
                    <h2 className="block-title__title">Browse online <br />
                        course categories</h2>
                </div>
                <div className="course-category-one__carousel">
                    <Swiper  {...params}>
                        <div style={{width:'250px',marginRight:'2rem'}}>
                          
                                <ReactPlayer url={"https://www.youtube.com/watch?v=qBQjDJQCAG8&ab_channel=LawEasy"}/>
                         
                        </div>
                        <div style={{width:'250px',marginRight:'2rem'}}>
                        <ReactPlayer url={"https://www.youtube.com/watch?v=qBQjDJQCAG8&ab_channel=LawEasy"}/>

                        </div>
                        <div style={{width:'250px',marginRight:'2rem'}}>
                        <ReactPlayer url={"https://www.youtube.com/watch?v=qBQjDJQCAG8&ab_channel=LawEasy"}/>

                        </div>
                        <div style={{width:'250px',marginRight:'2rem'}}>
                        <ReactPlayer url={"https://www.youtube.com/watch?v=qBQjDJQCAG8&ab_channel=LawEasy"}/>

                        </div>
                        <div style={{width:'250px',marginRight:'2rem'}}>
                        <ReactPlayer url={"https://www.youtube.com/watch?v=qBQjDJQCAG8&ab_channel=LawEasy"}/>

                        </div>
                        <div style={{width:'250px',marginRight:'2rem'}}>
                        <ReactPlayer url={"https://www.youtube.com/watch?v=qBQjDJQCAG8&ab_channel=LawEasy"}/>

                        </div>
                        <div style={{width:'250px',marginRight:'2rem'}}>
                        <ReactPlayer url={"https://www.youtube.com/watch?v=qBQjDJQCAG8&ab_channel=LawEasy"}/>

                        </div>
                        <div style={{width:'250px',marginRight:'2rem'}}>
                            <div className="course-category-one__single color-2">
                                <div className="course-category-one__icon">
                                    <i className="kipso-icon-web-programming"></i>
                                </div>
                                <h3 className="course-category-one__title"><a href="#">Development</a></h3>
                            </div>
                        </div>
                        <div style={{width:'250px',marginRight:'2rem'}}>
                            <div className="course-category-one__single color-3">
                                <div className="course-category-one__icon">
                                    <i className="kipso-icon-music-player"></i>
                                </div>
                                <h3 className="course-category-one__title"><a href="#">Music</a></h3>
                            </div>
                        </div>
                        <div style={{width:'250px',marginRight:'2rem'}}>
                            <div className="course-category-one__single color-4">
                                <div className="course-category-one__icon">
                                    <i className="kipso-icon-camera"></i>
                                </div>
                                <h3 className="course-category-one__title"><a href="#">Photography</a></h3>
                            </div>
                        </div>
                    </Swiper>
                </div>

                <a href="#" className="thm-btn">View All Categories</a>
            </div>
        </section>
    );
}
export default CourseCatOne;