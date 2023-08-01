import React from 'react';

const Contact = () => {
    return (
        <div>
            <section className="contact-info-one">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="contact-info-one__single">
                                <div className="contact-info-one__icon"><i className="kipso-icon-manager"></i>
                                </div>
                                <h2 className="contact-info-one__title">About Us </h2>
                                <p className="contact-info-one__text">Premier legal education center, offering <br/>comprehensive 
                                courses, expert faculty,<br/> and personalized guidance to empower students in their pursuit of 
                                legal excellence.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-info-one__single">
                                <div className="contact-info-one__icon"><i className="kipso-icon-placeholder"></i>
                                </div>
                                <h2 className="contact-info-one__title">Our
                                    Address</h2>
                                <p className="contact-info-one__text">403, Vibrant Tower,  <br />
                                Manoramaganj, New Palasia, <br />Indore, Madhya Pradesh 452001<br/><br/>  </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-info-one__single">
                                <div className="contact-info-one__icon"><i className="kipso-icon-contact"></i>
                                </div>
                                <h2 className="contact-info-one__title">Contact
                                    Info</h2>
                                <p className="contact-info-one__text">info@laweasy.com <br />
                                    +91 9424044769 <br /> <br/>&nbsp;</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-one">
                <div className="container">
                    <h2 className="contact-one__title text-center">Get in touch <br />
                        with us</h2>
                    <form action="#" className="contact-one__form contact-form-validated"
                          noValidate="novalidate">
                        <div className="row low-gutters">
                            <div className="col-lg-6">
                                <input type="text" name="name" placeholder="Your Name" />
                            </div>
                            <div className="col-lg-6">
                                <input type="text" placeholder="Email Address" name="email" />
                            </div>
                            <div className="col-lg-12">
                                <textarea placeholder="Write Message" name="message"></textarea>
                                <div className="text-center">
                                    <button type="submit" className="contact-one__btn thm-btn">Submit Comment</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="result text-center"></div>
                </div>
            </section>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                className="google-map__contact" allowFullScreen=""></iframe>
        </div>
    );
};

export default Contact;
