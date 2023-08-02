import React, { useEffect } from "react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { SlowMo } from "gsap/EasePack";

import "./sass/style.scss";
// components
import Nav from "./components/Nav";
import Logo from "./components/Logo";
import About from "./components/About";

import Hero from "./components/Hero";
import TechFolio from "./components/TechFolio";
import MiniProjects from "./components/MiniProjects";
import MajorProjects from "./components/MajorProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

gsap.registerPlugin(SlowMo);
gsap.registerPlugin(TextPlugin);

export default function App() {
  let tl = gsap.timeline();

  const greetTL = gsap.timeline({
    repeatDelay: 0.2,
    repeat: -1,
  });

  const hashedCL = {
    outline: ".bdn",
    letter: ".ltr",
    logo: ".lg",
    loader: ".ldr",
    link: ".lnk",
    greet: ".grt",
    welcome: ".wel",
    name: ".nam",
    passion: ".pass",
    message: ".msg",
    hamburger: ".hmb",
  };

  /** set theme if any */
  useEffect(() => {
    let item = localStorage.getItem("theme");
    if (item) document.documentElement.style.setProperty("--clr-dark", item);

    document.body.removeAttribute("class");
  }, []);

  useEffect(() => {
    tl.from(hashedCL.outline, {
      // duration: 0.8,
      delay: 0.1,
      ease: "slow(0.5, 0.8)",
      strokeDashoffset: -520,
    })
      .to(hashedCL.letter, {
        duration: 0.6,
        ease: "slow(0.5, 0.8, true)",
        strokeDashoffset: 0,
        opacity: 1,
      })
      .to(hashedCL.logo, {
        scale: 0,
      })
      .to(hashedCL.loader, {
        zIndex: -1,
        visibility: "hidden",
        display: "none",
      });

    tl.to(hashedCL.hamburger, {
      transform: "translateX(-20px) translateY(-50%)",
      duration: 0.6,
      ease: "power2.out",
    }).to(hashedCL.link, {
      translateY: "0%",
      delay: -1.2,
      stagger: {
        amount: 0.8,
      },
    });

    // animate greetings
    const greets = [
      "HI,",
      "नमस्कार !",
      "ਸਤ ਸ੍ਰੀ ਅਕਾਲ ",
      "வணக்கம்.",
      "こんにちは",
    ];

    greets.forEach((g) => {
      let gTL = gsap.timeline();
      gTL.to(hashedCL.greet, {
        text: g,
        duration: 0.16 * g.length,
        ease: "power2.out",
        yoyo: true,
        repeat: 1,
        repeatDelay: 2,
        // delay: 0.3,
      });
      greetTL.add(gTL);
    });
    greetTL.pause();

    // for hero
    const { greet, welcome, name, passion, message } = hashedCL;
    tl.to([greet, welcome, name, passion, message], {
      transform: "translateY(0%)",
      stagger: {
        amount: 0.65,
      },
      onComplete: () => greetTL.play(),
    });
  }, [greetTL, tl]);

  return (
    <>
      <div className="ldr">
        <Logo clSVG="lg" clBoundry="bdn" clLetter="ltr" />
        <p className="test-hack">you'r not gonna see this</p>
      </div>
      <Nav />
      <main id="main-app" className="container">
        <Hero />
        <About />
        <TechFolio />
        <MajorProjects />
        <MiniProjects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
