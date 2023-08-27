import React, { useEffect } from 'react';
import mainimg from '../img/mainbg.webp';
import myimg from '../img/myimg.png';
import videothumbnail from '../img/videothumbnail.png';
import Typed from 'typed.js';
import video from '../img/portfolio-video.mp4'

export default function Home(props) {
  useEffect(() => {
    const autotypedText = () => {
      new Typed("#autoText", {
        strings: ["Faizan Rasheed", "Front End Web Developer", "Web Designer"],
        loop: true,
        typeSpeed: 70,
        backSpeed: 50,
        backDelay: 1000,
        showCursor: false
      });
    };

    autotypedText();
  }, []);

  const divStyle = {
    backgroundImage: `url(${mainimg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: "80vh"

  };

  return (
    <>


      <div className="container-fluid" id='home' style={divStyle} >
        <div className="container  pt-5">
          <div className="row">
            <div className="col-md-8">
              <div className={` container text-${props.mode === 'black' ? "light" : 'black'}`} id='homeChild' >
                <h2 className='fw-bold mb-3'>Hello</h2>
                <h1 className="fw-bold mb-4 rounded">I am <span id='autoText'></span></h1>
                <h6 className='objective'>Driven by lines of code, I'm a web developer who thrives on turning concepts into interactive realities. Crafting digital experiences that merge creativity with functionality, one pixel at a time.</h6>
              </div>
            </div>
            <div className="container-image col-md-4 d-none d-md-block d-flex align-items-center">
              <img src={myimg} alt="Faizan Rasheed Img" className='moving-image img-fluid myimg-poertfolio' />
            </div>
          </div>
        </div>
      </div>
      {/* Services Start */}

      <div className="container-fluid my-4" id='services' >
        <div className=" container pt-5">
          <h4 className='fw-bold '>Services</h4>
          <h1 className='my-4'>What I Do?</h1>
          <div className="row">
            <div className="align-items-center services-child col "><p> Web Development</p></div>
            <div className="align-items-center services-child col "><p> Web Designing</p></div>
            <div className="align-items-center services-child col "><p> Ecommerce Development</p></div>
          </div>
          <div className="row">
            <div className="align-items-center services-child col "><p> UX/UI (Graphic & Web design)</p></div>
            <div className="align-items-center services-child col "><p> Word Press Customization & Development</p></div>
            <div className="align-items-center services-child col "><p> SEO (Search Engine Optimization)</p></div>
          </div>
        </div>
      </div>

      <div className={`mt-5 container-fluid help-div text-${props.mode === 'light' ? "dark" : 'dark'}`}>
        <div className="container help-sec">
          <h2 className='my-4 fw-bold text-center'>How can I help you?</h2>
          <h5 className='col-12 col-md-5 text-center mb-5 mx-auto'>To enhance your business growth  and <br /> streamline processes for optimal effectiveness</h5>

          <div className="row">
            <div className="col-md-8 col-12 mb-4">
              <h6 className='text-start text-capitalize' style={{ wordSpacing: '5px' }}>
                To enhance your business growth and streamline processes for optimal effectiveness, I, as a skilled web developer, bring a unique blend of technical expertise and creative problem-solving. With a deep understanding of the latest web technologies and trends, I am dedicated to crafting responsive and user-centric websites that not only captivate visitors but also drive meaningful interactions. By leveraging my proficiency in HTML, CSS, JavaScript, and various frameworks, I ensure seamless navigation and engaging user experiences. Whether it's creating dynamic e-commerce platforms or designing intuitive corporate websites, I am committed to delivering solutions that align with your business objectives. Let's collaborate to transform your ideas into a digital reality that propels your business forward.
              </h6>
            </div>
            <div className="col-md-4 col-12 ">
              <video src={video} controls autoPlay muted poster={videothumbnail} className='img-fluid rounded'></video>
            </div>
          </div>
        </div>
      </div>


      {/* Testimonials */}

      <div className="container-fluid pb-5 text-capitalize" id='cards-container'>
        <div className="container text-center" >
          <div className="title">
            <h1 className='fw-bold mb-4 pt-5'>Testimonials</h1>
            <h4 className='fw-bold' >What People Say About Me?</h4>
          </div>
        </div>
        <div className="container pt-md-5 pt-3 text-center testimonials" id='cards'>
          <div className="row">
            <div className=" col-md-4 col-12">
              <div className="card" >
                <div className="card-body">
                  <i className="fa-regular fa-user cards-img" alt='person image'></i>
                  <h5 className="card-title">John Doe</h5>
                  <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus eum mollitia nihil perferendis minima nisi.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card card-2" >
                <div className="card-body">
                  <i className="fa-regular fa-user cards-img" alt='person image'></i>
                  <h5 className="card-title">William</h5>
                  <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus eum mollitia nihil perferendis minima nisi.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card card-3" >
                <div className="card-body">
                  <i className="fa-regular fa-user cards-img" alt='person image'></i>
                  <h5 className="card-title">Petter olive</h5>
                  <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus eum mollitia nihil perferendis minima nisi.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ratings section */}
      <div className="container mt-5">
        <h1 className="fw-bold text-center py-4">RATE ME</h1>
        <h2 className='fw-bold py-3'>Q: What kind of work do people like about me? </h2>

        <div className="raitings">
          <i className="fa-solid fa-right-from-bracket arrow-left"></i>
          <h4 className='fw-bold'>Html : </h4>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <div className="raitings">
          <i className="fa-solid fa-right-from-bracket arrow-left"></i>
          <h4 className='fw-bold'>CSS : </h4>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star disable"></i>
        </div>
        <div className="raitings">
          <i className="fa-solid fa-right-from-bracket arrow-left"></i>
          <h4 className='fw-bold'>REACT.JS : </h4>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <div className="raitings">
          <i className="fa-solid fa-right-from-bracket arrow-left"></i>
          <h4 className='fw-bold'>BOOTSTRAP : </h4>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star disable"></i>
          <i className="fas fa-star disable"></i>
        </div>
        <div className="raitings">
          <i className="fa-solid fa-right-from-bracket arrow-left"></i>
          <h4 className='fw-bold'>JAVASCRIPT : </h4>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star disable"></i>
          <i className="fas fa-star disable"></i>
        </div>

      </div>
    </>
  );
}
