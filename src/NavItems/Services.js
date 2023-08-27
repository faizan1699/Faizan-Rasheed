import React from 'react'
import video from '../img/portfolio-video.mp4'
import videothumbnail from '../img/videothumbnail.png';


export default function Services(props) {
  return (
    <>
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
              <video src={video} controls autoplay muted poster={videothumbnail} className='img-fluid rounded'></video>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
