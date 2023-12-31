import React, {Component} from 'react';
import ModalVideo from 'react-modal-video';

class VideoOne extends Component {
    constructor(){
        super()
        this.state = {
            isOpen: false
        }
    }

    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <section className="video-one">
                <div className="container">
                    <img src="/assets/images/scratch-1-1.png" className="video-one__scratch" alt="" />
                        <div className="row">
                            <div className="col-lg-6 d-flex align-items-end">
                                <div className="video-one__content">
                                    <h2 className="video-one__title">Take a tour <br />
                                       to our <br />
                                        youtube <br/>channel</h2>
                                    {/* <a href="#" className="thm-btn video-one__btn">Learn More</a> */}
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="video-one__img">
                                    <img src="/assets/images/laweasyyoutube.jpg" alt="" width="570" height="437"/>
                                    {/* <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='aitb---aDYM' onClose={() => this.setState({isOpen: false})} /> */}
                                        <div onClick={()=>window.open("https://www.youtube.com/@laweasy2222")} className="video-one__popup"><i className="fas fa-play"></i>
                                        </div>
                                </div>
                            </div>
                        </div>
                </div>
            </section>
        );
    }
}

export default VideoOne;