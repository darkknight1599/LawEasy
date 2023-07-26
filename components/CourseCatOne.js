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
                    <h2 className="block-title__title">Latest Youtube Videos</h2>
                </div>
                <div className="course-category-one__carousel">
                    <Swiper  {...params}>
                        <div style={{width:'250px',marginRight:'2rem'}}>
                          
                                <ReactPlayer url={"https://www.youtube.com/watch?v=KRUO2jNiKaY&ab_channel=LawEasy"}/>
                         
                        </div>
                        <div style={{width:'250px',marginRight:'2rem'}}>
                        <ReactPlayer url={"https://www.youtube.com/watch?v=qBQjDJQCAG8&t=5s&ab_channel=LawEasy"}/>

                        </div>
                        <div style={{width:'250px',marginRight:'2rem'}}>
                        <ReactPlayer url={"https://www.youtube.com/watch?v=IIKPJTUtq_g&ab_channel=LawEasy"}/>

                        </div>
                        <div style={{width:'250px',marginRight:'2rem'}}>
                        <ReactPlayer url={"https://www.youtube.com/watch?v=po8wD6q-6Ko&ab_channel=LawEasy"}/>

                        </div>
                        <div style={{width:'250px',marginRight:'2rem'}}>
                        <ReactPlayer url={"https://www.youtube.com/watch?v=8m5beLN5b-k&ab_channel=LawEasy"}/>

                        </div>
                        <div style={{width:'250px',marginRight:'2rem'}}>
                        <ReactPlayer url={"https://www.youtube.com/watch?v=fHnmJKePrdE&ab_channel=LawEasy"}/>

                        </div>
                        <div style={{width:'250px',marginRight:'2rem'}}>
                        <ReactPlayer url={"https://www.youtube.com/watch?v=gYC5xXmGp7w&ab_channel=LawEasy"}/>

                        </div>
              
                    </Swiper>
                </div>

                {/* <a href="#" className="thm-btn">View All Categories</a> */}
            </div>
        </section>
    );
}
export default CourseCatOne;