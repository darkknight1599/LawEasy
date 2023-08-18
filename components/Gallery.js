import React from 'react';

const Gallery = () => {
    return (
        <section className="gallery-one">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="gallery-one__single">
                            <img src="/assets/images/wadhwani1.jpeg" alt="" />
                            <a href="assets/images/wadhwani1.jpeg" className="gallery-one__popup img-popup"><i
                                    className="kipso-icon-plus-symbol"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="gallery-one__single">
                            <img src="/assets/images/wadhwani2.jpeg" alt="" />
                                <a href="assets/images/wadhwani2.jpeg" className="gallery-one__popup img-popup"><i
                                    className="kipso-icon-plus-symbol"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="gallery-one__single">
                            <img src="/assets/images/wadhwani3.jpeg" alt="" />
                                <a href="assets/images/wadhwani3.jpeg" className="gallery-one__popup img-popup"><i
                                    className="kipso-icon-plus-symbol"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="gallery-one__single">
                            <img src="assets/images/wadhwani4.jpeg" alt="" />
                                <a href="/assets/images/wadhwani4.jpeg" className="gallery-one__popup img-popup"><i
                                    className="kipso-icon-plus-symbol" ></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="gallery-one__single">
                            <img src="/assets/images/wadhwani5.jpeg" alt="" />
                                <a href="assets/images/wadhwani5.jpeg" className="gallery-one__popup img-popup"><i
                                    className="kipso-icon-plus-symbol"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="gallery-one__single">
                            <img src="/assets/images/wadhwani7.jpg" alt="" width="370" height="370"/>
                                <a href="assets/images/wadhwani7.jpg" className="gallery-one__popup img-popup"><i
                                    className="kipso-icon-plus-symbol"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="gallery-one__single">
                            <img src="/assets/images/wadhwani8.jpg" alt=""  width="370" height="370"/>
                                <a href="assets/images/wadhwani8.jpg" className="gallery-one__popup img-popup"><i
                                    className="kipso-icon-plus-symbol"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="gallery-one__single">
                            <img src="/assets/images/wadhwani9.jpg" alt="" width="370" height="370"/>
                                <a href="assets/images/gallery-1-8.jpg" className="gallery-one__popup img-popup"><i
                                    className="kipso-icon-plus-symbol"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="gallery-one__single">
                            <img src="/assets/images/wadhwani10.jpg" alt="" width="370" height="370"/>
                                <a href="assets/images/wadhwani10.jpg" className="gallery-one__popup img-popup"><i
                                    className="kipso-icon-plus-symbol"></i></a>
                        </div>
                    </div>
                </div>
              <div cl>    
                <h2 className='block-title__title' style={{marginTop:50, marginBottom:50, textAlign:'center'}}>Testimonials</h2>
                <div className="col-lg-4 col-md-6">
                        <div className="gallery-one__single">
                            {/* <img src="/assets/images/video1.mp4" alt="" width="370" height="370"/> */}
                            <h3 className='block-title__title' style={{color:'grey', textAlign:'center', paddingTop:100}}>Video-1</h3>
                            
                            <video>
                                <source src='/assets/images/video.mp4' className="gallery-one__popup img-popup"/>
                            </video>
                            
                                <a href="assets/images/video1.mp4" className="gallery-one__popup img-popup"><i
                                    className="kipso-icon-plus-symbol"></i></a>
                        </div>
                        <div className="gallery-one__single">
                            {/* <img src="/assets/images/video1.mp4" alt="" width="370" height="370"/> */}
                            <h3 className='block-title__title' style={{color:'grey', textAlign:'center', paddingTop:100}}>Video-2</h3>
                            <video>
                                <source src='/assets/images/video.mp4' className="gallery-one__popup img-popup"/>
                            </video>
                            
                                <a href="assets/images/video2.mp4" className="gallery-one__popup img-popup"><i
                                    className="kipso-icon-plus-symbol"></i></a>
                        </div>
                    </div>
              </div> 
            </div>
        </section>
    );
};

export default Gallery;
