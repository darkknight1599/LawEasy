import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import Link from 'next/link';

const CourseOne = () => {

    const params = {
        slidesPerView : 3,
        loop: true,
        speed: 1000,
        spaceBetween : 30,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },

        // Responsive breakpoints
        breakpoints: {
            1024:{
                slidesPerView : 3
            },
            768:{
                slidesPerView : 2
            },
            640:{
                slidesPerView : 2

            },
            320:{
                slidesPerView : 1
            }
        }
    }
    return (
        <div>
        <section className="course-one__top-title home-one">
            <div className="container">
                <div className="block-title mb-0">
                    {/* <h2 className="block-title__title">Explore our <br />
                        popular courses</h2> */}
                        <img src='/assets/images/coursesbanner2.jpg' width="70%" height="300px" style={{borderRadius:20}}/>
                        <h2 className="block-title__title" style={{paddingTop:40}}>Explore our <br />
                        popular courses</h2>
                </div>
            </div>
            <div className="course-one__top-title__curve"></div>
        </section>

        <section className="course-one course-one__teacher-details home-one">
            <div className="container">
                <div className="course-one__carousel">

                    <Swiper {...params} >
                        {/*<div className="item">
                            <div className="course-one__single color-1">
                                 <div className="course-one__image">
                                    <img src="/assets/images/course-1-1.jpg" alt="" />
                                        <i className="far fa-heart"></i>
                                </div> 
                                <div className="course-one__content">
                                    <a href="#" className="course-one__category">development</a> 
                                    <div className="course-one__admin">
                                        <img src="/assets/images/team-1-1.jpg" alt="" /> 
                                            by <a href="/teacher-details">Lou Guerrero</a>
                                    </div>
                                    <h2 className="course-one__title"><a href="/course-details">LAW EASY CLAT
                                        </a></h2>
                                    <div className="course-one__stars">
                                <span className="course-one__stars-wrap">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </span>
                                        <span className="course-one__count">4.8</span>
                                        <span className="course-one__stars-count">250</span>
                                    </div>
                                    <div className="course-one__meta">
                                        <a href="/course-details"><i className="far fa-clock"></i> 10 Hours</a>
                                        <a href="/course-details"><i className="far fa-folder-open"></i> 6
                                            Lectures</a>
                                        <a href="/course-details">$18</a>
                                    </div>
                                    <a href="#" className="course-one__link">See Preview</a>
                                </div>
                            </div>
                        </div>*/}
                        <div className="item">
                            <div className="course-one__single color-1">
                                {/* <div className="course-one__image">
                                    <img src="/assets/images/course-1-2.jpg" alt="" />
                                        <i className="far fa-heart"></i>
                                </div> */}
                                <div className="course-one__content">
                                    {/* <a href="#" className="course-one__category">It & Software</a> */}
                                    {/* <div className="course-one__admin"> */}
                                        {/* <img src="/assets/images/team-1-2.jpg" alt="" />
                                            by <a href="/teacher-details">Cora Diaz</a> */}
                                    {/* </div> */}
                                    <h2 className="course-one__title"><a href="/course-details">LAW EASY CLAT
                                        </a></h2>
                                    {/* <div className="course-one__stars">
                                <span className="course-one__stars-wrap">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </span>
                                    <span className="course-one__count">4.8</span>
                                    <span className="course-one__stars-count">250</span>
                                    </div> */}
                                    <div className="course-one__meta">
                                        {/* <a href="/course-details"><i className="far fa-clock"></i> 10 Hours</a>
                                        <a href="/course-details"><i className="far fa-folder-open"></i> 6
                                            Lectures</a>
                                        <a href="/course-details">$18</a> */}
                                        <p>Programme for Law Entrance Exams Preparations for Class 11th , 12th & Droppers<br/><b>(Online + Offline)</b>
</p>
                                    </div>
                                    {/* <a href="#" className="course-one__link">See Preview</a> */}
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-one__single color-2">
                                {/* <div className="course-one__image">
                                    <img src="/assets/images/course-1-2.jpg" alt="" />
                                        <i className="far fa-heart"></i>
                                </div> */}
                                <div className="course-one__content">
                                    {/* <a href="#" className="course-one__category">It & Software</a> */}
                                    {/* <div className="course-one__admin"> */}
                                        {/* <img src="/assets/images/team-1-2.jpg" alt="" />
                                            by <a href="/teacher-details">Cora Diaz</a> */}
                                    {/* </div> */}
                                    <h2 className="course-one__title"><a href="/course-details">LAW EASY CUET
                                        </a></h2>
                                    {/* <div className="course-one__stars">
                                <span className="course-one__stars-wrap">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </span>
                                    <span className="course-one__count">4.8</span>
                                    <span className="course-one__stars-count">250</span>
                                    </div> */}
                                    <div className="course-one__meta">
                                        {/* <a href="/course-details"><i className="far fa-clock"></i> 10 Hours</a>
                                        <a href="/course-details"><i className="far fa-folder-open"></i> 6
                                            Lectures</a>
                                        <a href="/course-details">$18</a> */}
                                        <p>Programme for Common University Entrance Test Preparation<br/><br/><b>(Online + Offline)</b>
                                        </p>
                                    </div>
                                    {/* <a href="#" className="course-one__link">See Preview</a> */}
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-one__single color-3">
                                {/* <div className="course-one__image">
                                    <img src="/assets/images/course-1-3.jpg" alt="" />
                                        <i className="far fa-heart"></i>
                                </div> */}
                                <div className="course-one__content">
                                    {/* <a href="#" className="course-one__category">marketing</a> */}
                                    {/* <div className="course-one__admin"> */}
                                        {/* <img src="/assets/images/team-1-3.jpg" alt="" />
                                            by <a href="/teacher-details">Ruth Becker</a> */}
                                    {/* </div> */}
                                    <h2 className="course-one__title"><a href="/course-details">LAW EASY ADJ
                                        </a></h2>
                                    {/* <div className="course-one__stars">
                                <span className="course-one__stars-wrap">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </span>
                                    <span className="course-one__count">4.8</span>
                                    <span className="course-one__stars-count">250</span>
                                    </div> */}
                                    <div className="course-one__meta">
                                        {/* <a href="/course-details"><i className="far fa-clock"></i> 10 Hours</a>
                                        <a href="/course-details"><i className="far fa-folder-open"></i> 6
                                            Lectures</a>
                                        <a href="/course-details">$18</a> */}
                                        <p>Programme for IPM Exam Preparation for Class 11th , 12th & Droppers<br/><b>(Online + Offline)</b></p>
                                    </div>
                                    {/* <a href="#" className="course-one__link">See Preview</a> */}
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-one__single color-4">
                                {/* <div className="course-one__image">
                                    <img src="/assets/images/course-1-3.jpg" alt="" />
                                        <i className="far fa-heart"></i>
                                </div> */}
                                <div className="course-one__content">
                                    {/* <a href="#" className="course-one__category">marketing</a> */}
                                    {/* <div className="course-one__admin"> */}
                                        {/* <img src="/assets/images/team-1-3.jpg" alt="" />
                                            by <a href="/teacher-details">Ruth Becker</a> */}
                                    {/* </div> */}
                                    <h2 className="course-one__title"><a href="/course-details">LAW EASY JUDICIARY
                                        </a></h2>
                                    {/* <div className="course-one__stars">
                                <span className="course-one__stars-wrap">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </span>
                                    <span className="course-one__count">4.8</span>
                                    <span className="course-one__stars-count">250</span>
                                    </div> */}
                                    <div className="course-one__meta">
                                        {/* <a href="/course-details"><i className="far fa-clock"></i> 10 Hours</a>
                                        <a href="/course-details"><i className="far fa-folder-open"></i> 6
                                            Lectures</a>
                                        <a href="/course-details">$18</a> */}
                                        <p>Programme for Civil Judge Aspirants for State Judicial Services Exams<br/>
<b>(Online + Offline)</b></p>
                                    </div>
                                    {/* <a href="#" className="course-one__link">See Preview</a> */}
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-one__single color-5">
                                 {/* <div className="course-one__image">
                                    <img src="/assets/images/course-1-1.jpg" alt="" />
                                        <i className="far fa-heart"></i>
                                </div>  */}
                                <div className="course-one__content">
                                    {/* <a href="#" className="course-one__category">development</a> 
                                    <div className="course-one__admin">
                                        <img src="/assets/images/team-1-1.jpg" alt="" /> 
                                            by <a href="/teacher-details">Lou Guerrero</a>
                                    </div> */}
                                    <h2 className="course-one__title"><a href="/course-details">LAW EASY AIBE
                                        </a></h2>
                                    {/* <div className="course-one__stars">
                                <span className="course-one__stars-wrap">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </span>
                                        <span className="course-one__count">4.8</span>
                                        <span className="course-one__stars-count">250</span>
                                    </div> */}
                                    <div className="course-one__meta">
                                        {/* <a href="/course-details"><i className="far fa-clock"></i> 10 Hours</a>
                                        <a href="/course-details"><i className="far fa-folder-open"></i> 6
                                            Lectures</a>
                                        <a href="/course-details">$18</a> */}
                                        <p>Programme for All India Bar Examination for for law graduates<br/><br/><b>(Online + Offline)</b></p>
                                    </div>
                                    {/* <a href="#" className="course-one__link">See Preview</a> */}
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-one__single color-6">
                                 {/* <div className="course-one__image">
                                    <img src="/assets/images/course-1-1.jpg" alt="" />
                                        <i className="far fa-heart"></i>
                                </div>  */}
                                <div className="course-one__content">
                                    {/* <a href="#" className="course-one__category">development</a> 
                                    <div className="course-one__admin">
                                        <img src="/assets/images/team-1-1.jpg" alt="" /> 
                                            by <a href="/teacher-details">Lou Guerrero</a>
                                    </div> */}
                                    <h2 className="course-one__title"><a href="/course-details">LAW EASY ADPO
                                        </a></h2>
                                    {/* <div className="course-one__stars">
                                <span className="course-one__stars-wrap">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </span>
                                        <span className="course-one__count">4.8</span>
                                        <span className="course-one__stars-count">250</span>
                                    </div> */}
                                    <div className="course-one__meta">
                                        {/* <a href="/course-details"><i className="far fa-clock"></i> 10 Hours</a>
                                        <a href="/course-details"><i className="far fa-folder-open"></i> 6
                                            Lectures</a>
                                        <a href="/course-details">$18</a> */}
                                        <p>Programme for Advanced Diploma in Public Order<br/><br/><b>(Online + Offline)</b></p>
                                    </div>
                                    {/* <a href="#" className="course-one__link">See Preview</a> */}
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-one__single color-7">
                                 {/* <div className="course-one__image">
                                    <img src="/assets/images/course-1-1.jpg" alt="" />
                                        <i className="far fa-heart"></i>
                                </div>  */}
                                <div className="course-one__content">
                                    {/* <a href="#" className="course-one__category">development</a> 
                                    <div className="course-one__admin">
                                        <img src="/assets/images/team-1-1.jpg" alt="" /> 
                                            by <a href="/teacher-details">Lou Guerrero</a>
                                    </div> */}
                                    <h2 className="course-one__title"><a href="/course-details">LAW EASY LLB
                                        </a></h2>
                                    {/* <div className="course-one__stars">
                                <span className="course-one__stars-wrap">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </span>
                                        <span className="course-one__count">4.8</span>
                                        <span className="course-one__stars-count">250</span>
                                    </div> */}
                                    <div className="course-one__meta">
                                        {/* <a href="/course-details"><i className="far fa-clock"></i> 10 Hours</a>
                                        <a href="/course-details"><i className="far fa-folder-open"></i> 6
                                            Lectures</a>
                                        <a href="/course-details">$18</a> */}
                                        <p>Programme for law degree program offered by law schools and universities around the world<br/><b>(Online + Offline)</b></p>
                                    </div>
                                    {/* <a href="#" className="course-one__link">See Preview</a> */}
                                </div>
                            </div>
                        </div>
                        <div className="item">
                             <div className="course-one__single color-8">
                                {/* <div className="course-one__image">
                                    <img src="/assets/images/course-1-5.jpg" alt="" />
                                        <i className="far fa-heart"></i>
                                </div>  */}
                                <div className="course-one__content">
                                    {/* <a href="#" className="course-one__category">marketing</a>
                                    <div className="course-one__admin">
                                        <img src="/assets/images/team-1-5.jpg" alt="" />
                                            by <a href="/teacher-details">Isabella Stanley</a>
                                    </div> */}
                                    <h2 className="course-one__title"><a href="/course-details">LAW EASY BA.LLB
                                        </a>
                                    </h2>
                                    {/* <div className="course-one__stars">
                                <span className="course-one__stars-wrap">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i> 
                                     <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </span>
                                     <span className="course-one__count">4.8</span>
                                    <span className="course-one__stars-count">250</span>
                                    </div> */}
                                    <div className="course-one__meta">
                                        {/* <a href="/course-details"><i className="far fa-clock"></i> 10 Hours</a>
                                        <a href="/course-details"><i className="far fa-folder-open"></i> 6
                                            Lectures</a>
                                        <a href="/course-details">$18</a> */}
                                        <p>Programme for the study of Bachelor of Arts (BA) and Bachelor of Laws (LLB)<br/><b>(Online + Offline)</b></p>
                                    </div>
                                    {/* <a href="#" className="course-one__link">See Preview</a> */}
                                </div>
                                
                            </div>
                        </div>
                        <div className="item">
                            <div className="course-one__single color-9">
                                 {/* <div className="course-one__image">
                                    <img src="/assets/images/course-1-1.jpg" alt="" />
                                        <i className="far fa-heart"></i>
                                </div>  */}
                                <div className="course-one__content">
                                    {/* <a href="#" className="course-one__category">development</a> 
                                    <div className="course-one__admin">
                                        <img src="/assets/images/team-1-1.jpg" alt="" /> 
                                            by <a href="/teacher-details">Lou Guerrero</a>
                                    </div> */}
                                    <h2 className="course-one__title"><a href="/course-details">LAW EASY LLM
                                        </a></h2>
                                    {/* <div className="course-one__stars">
                                <span className="course-one__stars-wrap">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </span>
                                        <span className="course-one__count">4.8</span>
                                        <span className="course-one__stars-count">250</span>
                                    </div> */}
                                    <div className="course-one__meta">
                                        {/* <a href="/course-details"><i className="far fa-clock"></i> 10 Hours</a>
                                        <a href="/course-details"><i className="far fa-folder-open"></i> 6
                                            Lectures</a>
                                        <a href="/course-details">$18</a> */}
                                        <p>Programme for postgraduate degree in law for law graduates<br/><br/><b>(Online + Offline)</b></p>
                                    </div>
                                    {/* <a href="#" className="course-one__link">See Preview</a> */}
                                </div>
                            </div>
                        </div>
                        
                    </Swiper>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default CourseOne;