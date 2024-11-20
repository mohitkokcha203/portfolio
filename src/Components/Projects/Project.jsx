import React, { useState } from "react";
import "./Project.css";
import { FaFileAlt } from "react-icons/fa";
import { Bounce, JackInTheBox } from "react-awesome-reveal";
import project1 from '../../assets/Project1.png'
import project2 from '../../assets/Project2.png'
import project3 from '../../assets/Project3.png'
import project4 from '../../assets/Project4.png'
import project5 from '../../assets/Project5.png'

const projectsData = [
  {
    id: 1,
    image: project1,
    title: "MERN E-Commerce Project",
    view: "https://github.com/mohitkokcha203/Build-Nation",
    code: "https://github.com/mohitkokcha203/Build-Nation",
    type: "full stack",
  },
  {
    id: 2,
    image: project2,
    title: "Personal Portfolio",
    view: "https://portfolio-three-rho-26.vercel.app/",
    code: "https://github.com/mohitkokcha203/Portfolio",
    type: "frontend",
  },
  {
    id: 3,
    image: project3,
    title: "Filmy Duniya Project",
    view: "https://filmy-duniya-ochre.vercel.app/",
    code: "https://github.com/mohitkokcha203/Filmy-Duniya",
    type: "frontend",
  },
  {
    id: 4,
    image: project4,
    title: "Weather App Project",
    view: "https://weather-app-lake-six.vercel.app/",
    code: "https://github.com/mohitkokcha203/Weather-App",
    type: "frontend",
  },
  {
    id: 5,
    image: project5,
    title: "Web Clone Project ",
    view: "https://e-commerce-zeta-blue.vercel.app/",
    code: "https://github.com/mohitkokcha203/E-commerce",
    type: "frontend",
  },
];

function Project() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = projectsData.filter((project) => {
    if (filter === "all") return true;
    return project.type.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div className="project" id="project">
      <Bounce duration={1000} delay={50}>
        <div className="head">
          <FaFileAlt className="icon" />
          <h2 className="heading">
            Project<span className="st2">'s</span>
          </h2>
        </div>
      </Bounce>

      <div className="filter-buttons">
        <button onClick={() => setFilter("all")} className={filter === "all" ? "active" : ""}>All Projects</button>
        <button onClick={() => setFilter("full stack")} className={filter === "full stack" ? "active" : ""}>Full Stack Projects</button>
        <button onClick={() => setFilter("frontend")} className={filter === "frontend" ? "active" : ""}>Frontend Projects</button>
      </div>

      <div className="projects container">
        {filteredProjects.map((item) => (
          <div className="project-parent" key={item.id}>
            <JackInTheBox duration={1500}>
              <div className="project-box">
                <div className="image-box">
                  <img src={item.image} alt="data not found" />
                </div>
                <div className="project-text">
                  <h3>{item.title}</h3>
                  <div className="button-box">
                    <a
                      className="btn btn1"
                      href={item.view}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      View
                    </a>
                    <a
                      className="btn btn2"
                      href={item.code}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </JackInTheBox>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
