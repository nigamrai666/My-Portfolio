import './App.css';
import Navbar from './components/Navbar';
import Box1 from './components/Box1';
import Box2 from './components/Box2';
import SkillBox from './components/SkillBox';
import MyProjects from './components/MyProjects';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div id="home" className="wrapper">
        <Navbar />
      </div>
      <section  id="about" className='bg-gray-800 sec-1 px-2 w-full h-800 lg:h-500 md:h-500'>
        <div className='w-full h-800 text-white lg:h-500 md:h-500 flex align-middle justify-center flex-col lg:flex-row md:flex-row'>
          <div className="box1 flex align-middle justify-center">
            <Box1 />
          </div>
          <div className="box2 flex align-middle justify-center">
            <Box2 />
          </div>
        </div>
      </section>
      <section id="skills" className='skills'>
        <div className="w-full min-h-screen flex align-middle justify-center flex-col lg:flex-row md:flex-row">
          <div className="skillbox flex align-middle justify-center">
            <SkillBox />
          </div>
        </div>
      </section>
      <section id="projects" className='projects'>
        <div className="w-full min-h-screen flex align-middle justify-center flex-col lg:flex-row md:flex-row">
          <div className="projectbox flex align-middle justify-center">
            <MyProjects />
          </div>
        </div>
      </section>
      <section id="contact">
      <Footer />  {/* Add Footer component here */}
      </section>
      
    </>
  );
}

export default App;
