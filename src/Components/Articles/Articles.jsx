import "./Articles.css";
import { ArticleData } from "../../Utils/ArticleData";

const Articles = () => {
  return (
    <div className="articleContainer" id="articles">
      <h2 className="projectHead">Articles</h2>

      <div className="projectGrid">
        {ArticleData.map((project) => {
          return (
            <div className="projectBox" key={project.title}>
              <h2 className="projectTitle">{project.title}</h2>
              <p className="projectText">{project.text}</p>
              <img src={project.img} alt="" className="projectImg" />
              <div className="alink">
                <a
                  href={project.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Articles;
