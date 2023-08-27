import React from 'react';

export default function Contact(props) {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-md-6 col-12 ">
            <h2 className='fw-bold mb-4'>For Inquiries</h2>
            <div id='contact-me' className='' >
              <h5><span>Name :</span> Faizan Rasheed</h5>
              <h5><span>Email :</span> faizanrasheed169@gmail.com</h5>
              <h5><span>Contact :</span> +92 303-8019-169</h5>
              <h5><span>Address :</span> Buhawalpur</h5>
              <h5><span>State :</span> Punjab</h5>
              <h5><span>Country :</span> Pakistan</h5>

            </div>

          </div>

          <div className="col-md-6">
            <div className="col-12">
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
                      <label htmlFor="attach file">Select Your File:</label><br />
                      <input className='form-control' type="file" name="file" id="file" />
                    </div>

                    <div className="form-group my-2 fw-bold">
                      <label htmlForor="message">Message:</label>
                      <textarea className="form-control" id="message" name="message" rows="2" placeholder='Are You Available .......' required></textarea>
                    </div>
                    <button onClick={props.sendMessage} type="submit" className="btn btn-primary my-2 col-12">Send Report</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div>
            <iframe title='Map' height="480" className='w-100' src="https://www.google.com/maps/d/embed?mid=1B1lAsUpYFg82Je7XN1_cxRPf1UU&hl=en_US&ehbc=2E312F"></iframe>
          </div>

        </div>
      </div>
    </>
  )
}
