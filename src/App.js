import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../src/components/Navigation/Navigation'
import HomeSection from '../src/components/HomeSection/HomeSection'
import ExperienceSection from './components/ExperienceSection/ExperienceSection';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <HomeSection/>
      <ExperienceSection />
    </div>
  );
}

export default App;
