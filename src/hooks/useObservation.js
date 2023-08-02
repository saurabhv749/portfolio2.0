import { useEffect } from "react";

const useObservation = () => {
  let observer;

  const obsFunction = (entries) => {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        observer.unobserve(entry.target);
      }
    });
  };

  // Intersection observer
  useEffect(() => {
    let projects = document.querySelectorAll(".obs");
    // console.log(projects);
    observer = new IntersectionObserver(obsFunction, { threshold: 0.4 });

    projects.forEach((mp) => observer.observe(mp));

    return () => {
      projects.forEach((mp) => observer.unobserve(mp));
    };
  });
  return null;
};

export default useObservation;
