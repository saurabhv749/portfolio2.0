import React from "react";
import Fade from "react-reveal/Fade";

import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import useContentful from "../hooks/useContentful";

const MajorProjects = () => {
  const { getMajorProjects } = useContentful();

  const [el, setEl] = React.useState([]);
  const [expanded, setExpanded] = React.useState(false);
  const [data, setData] = React.useState([]);

  function handleResults() {
    expanded ? setData(el.slice(0, 3)) : setData(el);
    setExpanded(!expanded);
  }

  React.useEffect(() => {
    getMajorProjects().then((res) => {
      setEl(res);
      setData(res.slice(0, 3));
    });
  }, []);

  // <Slide bottom cascade>
  // </Slide>
  return (
    <section id="major" className="mjr">
      <h2 className="mjr-t">
        <span className="count">03. </span>Some Things I’ve Built
      </h2>

      {data.map((p, i) => (
        <Fade key={p.title + i} bottom>
          <div className={i % 2 === 0 ? "mjr-wrp lt" : "mjr-wrp rt"}>
            <div className="mjr-i">
              <img src={p.poster} alt={p.title} loading="lazy" />
            </div>
            <div className="mjr-cont">
              <p className="feat">Featured Project</p>
              <h2>{p.title}</h2>
              <div>
                <p className="brf">{p.description}</p>
              </div>
              {/* <Spacer /> */}
              <p className="tgs">
                {p.tags.map((d) => (
                  <span key={p + d}>{d}</span>
                ))}
              </p>
              <div className="lnks">
                {p.repo && (
                  <a
                    href={p.repo}
                    rel="noreferrer"
                    target="_blank"
                    aria-label={"source code for " + p.title}
                  >
                    <AiFillGithub
                      color="rgb(77, 25, 128)"
                      size={30}
                      style={{ marginRight: 15 }}
                    />
                  </a>
                )}

                <a
                  href={p.live}
                  rel="noreferrer"
                  target="_blank"
                  aria-label={"demo link for " + p.title}
                >
                  <BiLinkExternal
                    color="rgb(77, 25, 128)"
                    size={30}
                    style={{ marginRight: 15 }}
                  />
                </a>
              </div>
            </div>
          </div>
        </Fade>
      ))}
      <button className="button-outlined" onClick={handleResults}>
        {expanded ? "Show Less" : "Load More"}
      </button>
    </section>
  );
};

export default MajorProjects;
