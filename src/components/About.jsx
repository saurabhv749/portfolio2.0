import React from "react";
import Fade from "react-reveal/Fade";
// import ParalaxImage from "./ParalaxImage";
// <Slide bottom cascade>
// </Slide>

const About = () => {
  return (
    <Fade bottom>
      <section className="abt" id="about">
        <h2 className="abt-ttl">
          {" "}
          <span className="count">01. </span>About
        </h2>
        <div className="abt-wrp">
          <div className="abt-wrp-t">
            <p className="t">
              Hello! My name is Saurabh and I enjoy creating things for the
              internet. Websites were kind of passion of mine since I was like
              12. I started my web development journey back in 2021 when I
              decided to get deep insight of how the amzing world of Internet
              works.
            </p>

            <p className="t">
              As of today I sure have a pretty good understanding of these
              stuff, All thanks to the Open Source community folks. I love
              coding and that's what I do.
            </p>
            {/* <blockquote className="t">
            It is not the strongest species that survive, nor the most
            intelligent, but the ones most responsive to change.
          </blockquote> */}
            <p className="t">
              As Charles Darwin emphasized on being responsive to change, So I'm
              learning the WEBGL stuff.
            </p>
          </div>
          <div className="abt-wrp-i">
            <img
              src="https://images.ctfassets.net/qva1aen4xv8j/2ftigtKhJsXHWjZLfNO5j3/4e074ef74376f93db481d80b6193b6d8/portrait.png"
              width={300}
              height={350}
              alt="profile"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default About;
