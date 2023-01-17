import "./App.css";
import Home from "./portfolioComponents/Home/Home";
import Aboutme from "./portfolioComponents/AboutMe/Details";
import Resume from "./portfolioComponents/Resume/Resume";
import Achievements from "./portfolioComponents/Achievements/Achievements";
import Contactme from "./portfolioComponents/ContactMe/Contactme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer position="top-right" limit={1}></ToastContainer>
      <Home></Home>
      <Aboutme header="About me" subheader="Why Choose Me?"></Aboutme>
      <Resume header="Resume" subheader="My formal Bio Details"></Resume>
      <Achievements
        header="Projects Demo"
        subheader="How my Performance?"
      ></Achievements>
      <Contactme header="Contact Me" subheader="Lets Keep in Touch"></Contactme>
    </div>
  );
}

export default App;
