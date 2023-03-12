import {
  ArrowBackIos,
  ArrowForwardIos,
  Circle,
  CircleOutlined,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import "./Slider.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = 3;
  let slideInterval;

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };
  const auto = () => {
    slideInterval = setInterval(nextSlide, 5000);
  };

  useEffect(() => {
    auto();
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="sliderContainer">
      <IconButton
        style={{
          position: "absolute",
          top: "46%",
          left: "20px",
          color: "#fff",
          zIndex: "2",
          background: "#181818",
        }}
        onClick={prevSlide}
      >
        <ArrowBackIos />
      </IconButton>
      <IconButton
        style={{
          position: "absolute",
          top: "46%",
          right: "20px",
          color: "#fff",
          zIndex: "2",
          background: "#181818",
        }}
        onClick={nextSlide}
      >
        <ArrowForwardIos />
      </IconButton>

      <div
        className={
          currentSlide === 0
            ? "slide swipeN"
            : currentSlide === 1
            ? "slide swipeF"
            : "slide swipeS"
        }
      >
        <img src="/assets/images/c1.jpg" alt="" />
        <div>
          <p>Hi, I am Samuel Omolaiye.</p>
        </div>
      </div>
      <div
        className={
          currentSlide === 0
            ? "slide swipeN"
            : currentSlide === 1
            ? "slide swipeF"
            : "slide swipeS"
        }
      >
        <img src="/assets/images/c3.jpg" alt="" />
        <div>
          <p>Welcome to my data science portfolio!</p>
        </div>
      </div>
      <div
        className={
          currentSlide === 0
            ? "slide swipeN"
            : currentSlide === 1
            ? "slide swipeF"
            : "slide swipeS"
        }
      >
        <img src="/assets/images/c2.jpg" alt="" />
        <div>
          <p>You can find my work, thoughts, and ideas here.</p>
        </div>
      </div>
      <div className="dotsContainer">
        <Circle
          className={currentSlide === 0 ? "dot lightDot" : "dot"}
          onClick={() => setCurrentSlide(0)}
        />
        <Circle
          className={currentSlide === 1 ? "dot lightDot" : "dot"}
          onClick={() => setCurrentSlide(1)}
        />
        <Circle
          className={currentSlide === 2 ? "dot lightDot" : "dot"}
          onClick={() => setCurrentSlide(2)}
        />
      </div>
    </div>
  );
};

export default Slider;
