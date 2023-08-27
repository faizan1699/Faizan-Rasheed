import React from 'react';
import faizan from '../img/faizanImage.png';
import js from '../img/js.png';
import html from '../img/html.png';
import css from '../img/css.png';
import react from '../img/react.png';
import bootstrap from '../img/bootstrap.png';
import nodejs from '../img/nodejs.png';
import php from '../img/php.png';


export default function About() {
  return (
    <>
      <div className="container ">
        <div className="row py-5">
          <div className="col-md-6  ">
            <h2 className='fw-bold'>Who Am I?</h2>
            <p className='text-capitalize fw-bold fs-6'>I'm Faizan Rasheed, a dedicated web developer with a knack for perfecting online journeys. Armed with expertise in front-end technologies, I excel in crafting visually alluring, responsive websites that enthrall users. With a keen eye for detail and a passion for innovation, I'm here to collaborate on transforming your digital aspirations into impactful, functional reality. Let's team up and bring your web visions to life in a way that truly resonates.</p>
          </div>
          <div className="col-md-6 ">
            <img className='img-fluid rounded myimg' src={faizan} alt="Faizan img" />
          </div>
        </div>

        <div className="row py-5">
          <div className="col-md-8 col-12">
            <h2 id="about-intro" className='fw-bold text-center mb-5'>About Me</h2>
            <ul id='about-ul'>
              <li> <i className="mx-2 fa-solid bg-dark text-white p-2 rounded fa-arrow-right-to-bracket fa-beat"></i>
                I am Faizan Rasheed, a MERN stack web developer with a profound passion for designing and developing web applications that bring ideas to life in the digital realm. My expertise spans across the entire MERN (MongoDB, Express.js, React, and Node.js) stack, enabling me to craft dynamic and sophisticated applications that cater to modern user expectations and business requirements.
              </li>
              <li> <i className="mx-2 fa-solid bg-dark text-white p-2 rounded fa-arrow-right-to-bracket fa-beat"></i>
                In the fast-paced world of web development, the MERN stack stands out as a versatile and powerful combination of technologies. MongoDB provides a flexible and scalable NoSQL database solution, Express.js empowers the creation of robust backend APIs, React offers an efficient way to build dynamic and interactive user interfaces, and Node.js ensures seamless and efficient server-side processing. My proficiency in these technologies allows me to architect full-stack solutions that are efficient, maintainable, and capable of scaling to meet the demands of users and businesses alike.
              </li>
              <li> <i className="mx-2 fa-solid bg-dark text-white p-2 rounded fa-arrow-right-to-bracket fa-beat"></i>
                As a MERN stack developer, my journey begins by understanding the unique needs of each project. From e-commerce platforms to social networking applications, I believe in tailoring each solution to the specific requirements of the project. This involves collaborating closely with clients and stakeholders to conceptualize and outline the application's architecture, features, and user experience.
              </li>
              <li> <i className="mx-2 fa-solid bg-dark text-white p-2 rounded fa-arrow-right-to-bracket fa-beat"></i>
                Once the blueprint is set, I transition into the development phase. Leveraging my proficiency in MongoDB, I design databases that can efficiently store and manage complex data structures. The data is accessed and manipulated through the Express.js framework, which allows for the creation of robust and secure APIs. This backend infrastructure acts as the backbone of the application, handling user authentication, data storage, and communication between different parts of the application.
              </li>
              <li> <i className="mx-2 fa-solid bg-dark text-white p-2 rounded fa-arrow-right-to-bracket fa-beat"></i>
                The heart of the user experience lies in the frontend, and this is where React comes into play. With React, I craft engaging and responsive user interfaces that provide a seamless browsing experience across devices. Whether it's a visually stunning e-commerce storefront or an intuitive dashboard for data visualization, React allows me to create components that can be reused efficiently and tailored to match the application's design language.
              </li>
              <li> <i className="mx-2 fa-solid bg-dark text-white p-2 rounded fa-arrow-right-to-bracket fa-beat"></i>
                Node.js, the runtime environment that powers the server-side logic, enables me to write scalable and performant code. It ensures that the application can handle a multitude of users concurrently without sacrificing speed or responsiveness. By optimizing server-side operations, I contribute to reducing loading times and enhancing the overall user experience.
              </li>
              <li> <i className="mx-2 fa-solid bg-dark text-white p-2 rounded fa-arrow-right-to-bracket fa-beat"></i>
                Throughout the development process, my focus extends beyond just functionality. User-centric design principles guide my decisions, ensuring that the application not only meets technical requirements but also offers an intuitive and enjoyable experience. User interface elements are carefully crafted to be visually appealing and user-friendly, encouraging engagement and interaction.
              </li>
              <li> <i className="mx-2 fa-solid bg-dark text-white p-2 rounded fa-arrow-right-to-bracket fa-beat"></i>
                Collaboration and communication are at the core of my workflow. I work closely with designers, UX specialists, and fellow developers to ensure that the application aligns with the broader vision while addressing specific user needs. Regular code reviews and discussions help maintain code quality, identify potential issues early, and ensure that the application evolves in a cohesive manner.
              </li>
              <li> <i className="mx-2 fa-solid bg-dark text-white p-2 rounded fa-arrow-right-to-bracket fa-beat"></i>
                In conclusion, my role as a MERN stack web developer is a fusion of creativity, problem-solving, and technical expertise. From envisioning the initial concept to crafting intricate backend logic and designing captivating frontend interfaces, I am dedicated to creating applications that resonate with users and drive businesses forward. The MERN stack empowers me to bring ideas to life in the digital world, and my commitment to excellence ensures that each application I develop is a testament to innovation, quality, and user satisfaction.
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-12">
            <div className="container-fluid ">
              <h2 className='fw-bold text-center mb-5' id='experties'>Experties</h2>
              <div className="img-div">
                <img className='w-75 img-fluid' src={nodejs} alt="nodejs logo" />
              </div>
              <div className="img-div">
                <img className='img-fluid' src={js} alt="javascript logo" />
              </div>
              <div className="img-div">
                <img className='img-fluid' src={react} alt="React.js Logo" />
              </div>
              <div className="img-div">
                <img className='img-fluid' src={php} alt="React.js Logo" />
              </div>
              <div className="img-div">
                <img className='img-fluid w-50' src={css} alt="Css logo" />
              </div>
              <div className="img-div">
                <img className='img-fluid' src={bootstrap} alt="Bootstrap Logo" />
              </div>
              <div className="img-div">
                <img className='img-fluid' src={html} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
