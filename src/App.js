import Navbar from "./components/Navbar/navbar"
import Intro from "./components/Intro/intro"
import Projects from "./components/Projects/projects"
import Skills from "./components/Skills/skills"
import Contacts from "./components/Contacts/contact"
import Footer from "./components/Footer/footer"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;