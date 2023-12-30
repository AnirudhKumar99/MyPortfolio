import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../src/components/Navigation/Navigation";
import HomeSection from "../src/components/HomeSection/HomeSection";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import ContactSection from "./components/ContactSection/ContactSection";

function App() {
  return (
    <div className="App">
      <Navigation />
      <HomeSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default App;
