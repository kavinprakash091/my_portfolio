import './App.css';
import Home from './portfolioComponents/Home/Home';
import Aboutme from './portfolioComponents/AboutMe/Details';
import Resume from './portfolioComponents/Resume/Resume';
import Achievements from './portfolioComponents/Achievements/Achievements';
import Contactme from './portfolioComponents/ContactMe/Contactme';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Aboutme header="About me" subheader="Why Choose Me?"></Aboutme>
      <Resume header="Resume" subheader="My formal Bio Details"></Resume>
      <Achievements header="Achievements" subheader="How my Performance?"></Achievements>
      <Contactme header="Contact Me" subheader="Lets Keep in Touch"></Contactme>
    </div>
  );
}

export default App;
