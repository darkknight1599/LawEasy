import React from 'react';
import Link from 'next/link';

const Teachers = () => {
    return (
        <section className="team-one team-page">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="team-one__single">
                            <div className="team-one__image">
                                <img src="/assets/images/pankaj4.jpeg" alt="" height="206px" width="206px"/>
                            </div>
                            <div className="team-one__content">
                                <h2 className="team-one__name"><Link href="/teacher-details"><a>Pankaj Wadhwani</a></Link></h2>
                                <p className="team-one__designation">Founder & Teacher</p>
                                <p className="team-one__text">Recipient of 5 gold medals in law, Ex Government Advocate M.p. High Court Indore </p>
                            </div>
                            {/* <div className="team-one__social">
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook-square"></i></a>
                                <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="team-one__single">
                            <div className="team-one__image">
                                <img src="/assets/images/team-1-2.jpg" alt="" />
                            </div>
                            <div className="team-one__content">
                                <h2 className="team-one__name"><Link href="/teacher-details"><a>Adv Preeti Jaiswal</a></Link></h2>
                                <p className="team-one__designation">Teacher</p>
                                <p className="team-one__text">BSc, MBA ( HR and Finance), LLB, LLM<br/><br/><br/></p>
                            </div>
                            {/* <div className="team-one__social">
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook-square"></i></a>
                                <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </div> */}
                        </div>
                    </div>
                    {/* <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="team-one__single">
                            <div className="team-one__image">
                                <img src="/assets/images/team-1-3.jpg" alt="" />
                            </div>
                            <div className="team-one__content">
                                <h2 className="team-one__name"><Link href="/teacher-details"><a>Gilbert Daniels</a></Link></h2>
                                <p className="team-one__designation">Teacher</p>
                                <p className="team-one__text">There are many varia of passages of lorem.</p>
                            </div>
                            <div className="team-one__social">
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook-square"></i></a>
                                <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="team-one__single">
                            <div className="team-one__image">
                                <img src="/assets/images/team-1-4.jpg" alt="" />
                            </div>
                            <div className="team-one__content">
                                <h2 className="team-one__name"><Link href="/teacher-details"><a>Austin Caldwell</a></Link></h2>
                                <p className="team-one__designation">Teacher</p>
                                <p className="team-one__text">There are many varia of passages of lorem.</p>
                            </div>
                            <div className="team-one__social">
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook-square"></i></a>
                                <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div> */}
                    
                    
                </div>
            </div>
        </section>
    );
};

export default Teachers;
