import About from "./Components/About/About";
import Articles from "./Components/Articles/Articles";
import Footer from "./Components/Footer/Footer";
import "./Components/Header/Header";
import Header from "./Components/Header/Header";
import Project from "./Components/Project/Project";
import Slider from "./Components/Slider/Slider";
function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <About />
      <Project />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
