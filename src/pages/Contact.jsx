import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform additional actions here before or after submitting the form
    // For example, you can send the form data to a server or perform client-side validation.
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <section className="mb-4 contact">
        <div className="container">
          <h2>Contact me</h2>

          <p>
            Do you have any questions? Please do not hesitate to contact me
            directly.{" "}
          </p>

          <form
            id="contact-form"
            name="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="row">
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    onChange={handleChange}
                  />
                  <label htmlFor="name" className="">
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
                    onChange={handleChange}
                  />
                  <label htmlFor="email" className="">
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
                    onChange={handleChange}
                  />
                  <label htmlFor="subject" className="">
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
                    onChange={handleChange}
                  ></textarea>
                  <label htmlFor="message">Your message</label>
                </div>
              </div>
            </div>

            <div className="text-center text-md-center">
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </div>
            <div className="status"></div>
          </form>
        </div>
      </section>
    </>
  );
}
