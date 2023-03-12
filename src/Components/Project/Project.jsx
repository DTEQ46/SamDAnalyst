import "./Project.css";
import { ProjectData } from "../../Utils/ProjectData";

const Project = () => {
  return (
    <div className="projectContainer" id="projects">
      <h2 className="projectHead">Projects</h2>

      <div className="projectGrid">
        {ProjectData.map((project) => {
          return (
            <div className="projectBox" key={project.title}>
              <h2 className="projectTitle">{project.title}</h2>
              <p className="projectText">{project.text}</p>
              <img src={project.img} alt="" className="projectImg" />
              <div className="link">
                <a
                  href={project.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog Post
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
