import React from "react";
import Slide from "react-reveal/Slide";
import useContentful from "../hooks/useContentful";

const TechFolio = () => {
  const itemWidth = 70;
  const { getTechnicalExperties } = useContentful();
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    document.body.style.setProperty("--box-size", itemWidth + "px");

    getTechnicalExperties().then((res) => setData(res));
  }, []);

  return (
    <section className="tf">
      <h2 className="tf-t">
        <span className="count">02. </span>Technical skills
      </h2>

      <Slide bottom cascade key="for-tech-experties">
        <div className="techs">
          {data.map((x) => {
            return (
              <div key={x.name} className="tf-itm" title={x.name}>
                <img
                  className="tf-itm-i"
                  alt={x.name}
                  src={x.logo}
                  height={itemWidth}
                  width={itemWidth}
                  loading="lazy"
                />
                <div className="prg" title={x.value + "%"}>
                  <div
                    className="prg-val"
                    style={{ width: (x.value / 100) * itemWidth + "px" }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </Slide>
    </section>
  );
};

export default TechFolio;
