import React from "react";
import gsap from "gsap";
import HeaderLogo from "./HeaderLogo";

import { MdOutlineNightlight } from "react-icons/md";

const colors = [
  `185,100,23`,
  `355,78,56`,
  `217,100,45`,
  `265,92,57`,
  `200,40,13`,
  `334,100,50`,
  `235,21,21`,
  `88,38,15`,
  `255,45,18`,
  `195,83,25`,
  `346,90,54`,
  `75,20,30`,
  `201,20,23`,
  `343,79,44`,
  `40,4,14`,
  `278,100,36`,
  `23,17,36`,
];
let currentTheme = 0;
const formatHSL = (c) => {
  let arr = c.split(",");
  return `${arr[0]} ${arr[1]}% ${arr[2]}%`;
};

const Nav = () => {
  const [visible, setVisible] = React.useState(false);
  let tl = gsap.timeline();

  const handler = () => {
    // nav animation
    if (!visible) {
      tl.to([".n-lnk", ".res"], {
        y: "0vh",
        stagger: {
          amount: 0.3,
        },
      });
      setVisible(true);
    } else {
      tl.to([".n-lnk", ".res"], {
        y: "-10vh",
        stagger: {
          amount: 0.05,
        },
        onComplete: () => setVisible(false),
      });
    }
  };

  const navigate = (e) => {
    e.preventDefault();
    setVisible(false);
    let el = document.querySelector(`#${e.target.getAttribute("data-to")}`);

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "center",
    });
  };

  const changeTheme = () => {
    if (currentTheme >= colors.length) {
      currentTheme = 0;
    }
    let clr = formatHSL(colors[currentTheme++]);
    document.documentElement.style.setProperty("--clr-dark", clr);
    localStorage.setItem("theme", clr);
  };

  return (
    <>
      <header className="show">
        <div className="container">
          <a href="/" className="lnk" aria-label="home" role="navigation">
            <HeaderLogo />
            <span style={{ display: "none" }}>Go to Homepage</span>
          </a>
          <div className="lnks">
            <a href="#about" data-to="about" onClick={navigate} className="lnk">
              About
            </a>
            <a href="#major" data-to="major" onClick={navigate} className="lnk">
              Projects
            </a>
            <a
              href="#contact"
              data-to="contact"
              onClick={navigate}
              className="lnk"
            >
              Contact
            </a>
            <a
              className="lnk rsm"
              aria-label="print resume"
              href="https://drive.google.com/file/d/1HJPEf8eUjH6GQtjTDFLC7YclVff5VZM5/view?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
            <span onClick={changeTheme} className="lnk theme-btn">
              <MdOutlineNightlight size={20} />
            </span>
          </div>
        </div>
        <div className={visible ? "hmb op" : "hmb"} onClick={handler}>
          <span className="hmb-bar"></span>
        </div>
      </header>
      <nav className={visible ? "bkd op" : "bkd"}>
        <div className="rvc">
          <a
            size={22}
            href="#about"
            data-to="about"
            onClick={navigate}
            className="n-lnk"
          >
            About
          </a>
        </div>
        <div className="rvc">
          <a
            size={22}
            href="#major"
            data-to="major"
            onClick={navigate}
            className="n-lnk"
          >
            Projects
          </a>
        </div>
        <div className="rvc">
          <a
            size={22}
            href="#contact"
            data-to="contact"
            onClick={navigate}
            className="n-lnk"
          >
            Contact
          </a>
        </div>
        <div className="rvc">
          <a
            className="n-lnk"
            aria-label="print resume"
            href="https://drive.google.com/file/d/1HJPEf8eUjH6GQtjTDFLC7YclVff5VZM5/view?usp=sharing"
            target="_blank"
          >
            Resume
          </a>
        </div>
        <div className="rvc">
          <a href="####" onClick={changeTheme} className="n-lnk ">
            Change Theme
          </a>
        </div>
      </nav>

      {/* MobNav */}
    </>
  );
};

export default Nav;
