import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { GoLinkExternal } from "react-icons/go";
import { CgTerminal } from "react-icons/cg";
import useContentful from "../hooks/useContentful";
import Zoom from "react-reveal/Zoom";

const MiniProjects = () => {
  const { getMiniProjects } = useContentful();
  const [el, setEl] = React.useState([]);
  const [data, setData] = React.useState(null);
  const [expanded, setExpanded] = React.useState(false);

  function handleResults() {
    expanded ? setData(el.slice(0, 4)) : setData(el);
    setExpanded(!expanded);
  }

  React.useEffect(() => {
    getMiniProjects().then((res) => {
      setEl(res);
      setData(res.slice(0, 4));
    });
  }, []);

  return (
    <section id="mini" className="mini">
      <h2 className="mini-t">
        <span className="count">04. </span>Other Noteworthy Projects
      </h2>
      <Zoom cascade>
        <div className="cc">
          {data &&
            data.map((x) => (
              <div key={x.title + "mini-p"} className="crd">
                <div>
                  <div className="crd-h">
                    <div className="fi">
                      <CgTerminal size={30} />
                    </div>
                    <div>
                      <a
                        href={x.repo}
                        rel="noreferrer"
                        target="_blank"
                        aria-label={"source code for " + x.title}
                      >
                        <AiOutlineGithub size={30} style={{ marginLeft: 10 }} />
                      </a>

                      <a
                        href={x.live}
                        rel="noreferrer"
                        target="_blank"
                        aria-label={"demo link for " + x.title}
                      >
                        <GoLinkExternal size={30} style={{ marginLeft: 10 }} />
                      </a>
                    </div>
                  </div>
                  <div className="crd-b">
                    <h2>{x.title}</h2>
                    <p className="crd-brf">{x.description}</p>
                  </div>
                </div>
                <div className="crd-f">
                  {x.tags.map((t) => (
                    <span key={t} style={{ marginRight: 10 }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </Zoom>
      <button className="button-outlined" onClick={handleResults}>
        {expanded ? "Show Less" : "Load More"}
      </button>
    </section>
  );
};

export default MiniProjects;
