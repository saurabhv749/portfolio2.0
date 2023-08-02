import React from "react";
import Slide from "react-reveal/Slide";

const Contact = () => {
  return (
    <Slide bottom cascade>
      <section className="cnnt" id="contact">
        <h2 className="cnnt-t">
          <span className="count">05. </span>Get In Touch
        </h2>
        <div className="cnnt-body">
          <p className="cnnt-m">
            Whether you have a question or just want to say hi, I’ll try my best
            to get back to you!
          </p>
          <a href="mailto:contactme.vsam@gmail.com" className="cnnt-b">
            Say Hello
          </a>
        </div>
      </section>
    </Slide>
  );
};

export default Contact;
