import { useState } from "react";
import { Menu } from "@mui/icons-material";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className={open ? "navContainer" : "navContainer close"}>
      <div
        className={open ? "menuBar menuBarOpen" : "menuBar"}
        onClick={() => setOpen(!open)}
      >
        <Menu />
      </div>

      <div className="subContainer" id="home">
        <div className={open ? "navMenu" : "navMenu noMenu"}>
          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#projects">Projects</a>

          <a href="#articles">Articles</a>

          <a href="#">GitHub</a>

          <a href="#">LinkedIn</a>

          <a href="#">Medium</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
