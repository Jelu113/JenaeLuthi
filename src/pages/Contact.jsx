export default function Contact() {
  return (
    <>
     

      
      
        <section className="mb-4">
        <h2> 
            Contact me
          </h2>

          <p> 
            Do you have any questions? Please do not hesitate to contact me
            directly.{" "}
          </p>
          {/* <div className="row"> */}
            {/* <div className="col-md-9 mb-md-0 mb-5"> */}
              <form
                id="contact-form"
                name="contact-form"
                action="mail.php"
                method="POST"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                      ></input>
                      <label for="name" className="">
                        Your name
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control"
                      ></input>
                      <label for="email" className="">
                        Your email
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                      ></input>
                      <label for="subject" className="">
                        Subject
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                   <div className="col-md-12"> 
                    <div className="md-form">
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows="2"
                        className="form-control md-textarea"
                      ></textarea>
                      <label for="message">Your message</label>
                    </div>
                  </div>
                </div>
              </form>

              <div className="text-center text-md-center">
                <a
                  className="btn btn-primary"
                  onclick="document.getElementById('contact-form').submit();"
                >
                  Send
                </a>
              </div>
              <div className="status"></div>
            {/* </div> */}
          {/* </div> */}
        </section>
       
      
  
    </>
    
  );
}
