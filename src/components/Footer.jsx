import React from "react";
import {
  AiOutlineCodepen,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { FaFreeCodeCamp } from "react-icons/fa";
import Slide from "react-reveal/Slide";

const Footer = () => {
  return (
    <Slide bottom>
      <section className="ftr-wrp">
        <footer className="container">
          <div className="soc">
            <a
              href="https://github.com/saurabhv749"
              title="github account"
              target="_blank"
            >
              <AiFillGithub size={30} />
            </a>

            <a
              title="linkedin profile"
              href="https://www.linkedin.com/in/saurabhv749/"
              target="_blank"
            >
              <AiFillLinkedin size={30} />
            </a>
            <a
              title="twitter account"
              href="https://twitter.com/__saurabhv"
              target="_blank"
            >
              <AiOutlineTwitter size={30} />
            </a>
            <a
              title="freecodecamp profile"
              href="https://www.freecodecamp.org/saurabh_verma"
              target="_blank"
            >
              <FaFreeCodeCamp size={30} />
            </a>
            <a
              title="codepen account"
              href="https://codepen.io/Saurabhv749"
              target="_blank"
            >
              <AiOutlineCodepen size={30} />
            </a>
          </div>

          <p className="inf">coded with love and passion.</p>
        </footer>
      </section>
    </Slide>
  );
};

export default Footer;
