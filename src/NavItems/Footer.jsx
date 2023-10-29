import React from 'react'

export default function Footer(props) {
    return (
        <>
            <hr className='mt-5' />
            <div className={`container-fluid  bg-${props.mode === '#d1d2d6' ? "light" : "#d1d2d6"} `} id='footer'>
                <div className='container ' >
                    <div className="row " id='footer-content'>
                        <div className="col-md-3">
                            <h2 className='fw-bold my-4'>Social Links</h2>
                            <div className='sociallinks'>
                                <i className="me-2 fa-brands  fa-facebook"></i>
                                <p>FACEBOOK</p>
                            </div>
                            <div className='sociallinks'>
                                <i className="me-2 fa-brands  fa-twitter"></i>
                                <p>TWITTER</p>
                            </div>
                            <div className='sociallinks'>
                                <i className="me-2 fa-brands  fa-linkedin"></i>
                                <p>LINKEDIN</p>
                            </div>
                            <div className='sociallinks'>
                                <i className="me-2 fa-brands  fa-solid fa-instagram"></i>
                                <p>INSTAGRAM</p>
                            </div>


                        </div>
                        <div className="col-md-6 mt-4 ">
                            <h2 className='fw-bold'>About Me</h2>
                            <p className='text-capitalize fw-bold fs-6'>I'm Faizan Rasheed, a dedicated web developer with a knack for perfecting online journeys. Armed with expertise in front-end technologies, I excel in crafting visually alluring, responsive websites that enthrall users. With a keen eye for detail and a passion for innovation, I'm here to collaborate on transforming your digital aspirations into impactful, functional reality. Let's team up and bring your web visions to life in a way that truly resonates.</p>
                        </div>
                        <div className="col-md-3">
                            <h2 className="text-center mb-4 fw-bold">Contact Me</h2>
                            <div className="container">
                                <div className="row justify-content-center">

                                    <form action="submit_form.php" method="POST">
                                        <div className="form-group my-2 fw-bold">
                                            <label htmlFor="name">Name:</label>
                                            <input type="text" className="form-control" id="name" name="name" placeholder='John Doe' required />
                                        </div>

                                        <div className="form-group my-2 fw-bold">
                                            <label htmlFor="email">Email:</label>
                                            <input type="email" className="form-control" id="email" name="email" placeholder='example@.com' required />
                                        </div>

                                        <div className="form-group my-2 fw-bold">
                                            <label htmlFor="message">Message:</label>
                                            <textarea className="form-control" id="message" name="message" rows="2" placeholder='Are You Available .......' required></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-primary my-2 col-12">Send Message</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
