import "./About.css";

const About = () => {
  return (
    <div className="aboutContainer" id="about">
      <h2 className="aboutHead">Samuel Omolaiye in a Nutshell</h2>
      <div className="aboutIntro">
        <img src="/assets/images/c4.jpg" alt="" />
      </div>
      <div className="remainText">
        <p>
          {" "}
          I am a data scientist with a passion for using data to drive strategic
          decision-making and solve real-world problems. With a strong
          background in statistics, machine learning, and programming, I am
          skilled in using data analysis tools and techniques to uncover
          insights and patterns in large and complex data sets. I am proficient
          in programming languages such as Python and R, and have experience
          working with databases and SQL. But what really sets me apart is my
          ability to understand the business context in which I am working. I
          have a keen sense of the key business problems and opportunities, and
          can design data-driven solutions that have a real impact on the bottom
          line. I am able to communicate complex technical concepts to
          non-technical stakeholders in a clear and compelling way, and
          collaborate effectively with teams from different backgrounds and
          disciplines.
        </p>
        <p>
          My portfolio showcases some of the projects that I have worked on,
          including data visualizations, predictive modeling, and machine
          learning applications. Each project is accompanied by a detailed
          description of the problem I was trying to solve, the methodology I
          used, and the results I achieved. I hope that my portfolio will
          demonstrate my skills as a data scientist and my ability to apply
          those skills to a wide range of business problems. Thank you for
          taking the time to explore my portfolio. If you have any questions or
          would like to discuss a potential project, please do not hesitate to
          contact me.
        </p>
      </div>
    </div>
  );
};

export default About;
