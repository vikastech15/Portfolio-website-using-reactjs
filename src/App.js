import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import ProjectCard from './components/ProjectCard'
import AboutMe from './components/AboutMe'
import SkillCard from './components/SkillCard'
import ContactForm from './components/ContactForm'
import AnimatedCursor from "react-animated-cursor"


function App() {
  return (
    <>
    <AnimatedCursor
      color="#fff"
      innerSize={8}
      outerSize={50}
      innerScale={1}
      outerScale={2.2}
      outerAlpha={0}
      outerStyle={{
        background: '#ffffff',
        mixBlendMode: 'exclusion'
      }}
      innerStyle={{
        backgroundColor: '#22c1c3'
      }}
    />
    <div>
      <Navbar />
      <HomeBanner id = "home"/>
      <ProjectCard
        id = "project"
        className = "odd"
        projectTitle="Portfolio Website using React-js"
        projectDesc="Crafted a dynamic and responsive portfolio website with HTML, CSS, JavaScript, and React.js, 
integrating interactive elements and a polished design to highlight professional achievements to 
showcase projects and skills"
        projectLink="https://github.com/vikastech15/Portfolio-website-using-reactjs.git"
        deployedProjectLink="https://github.com/vikastech15/Portfolio-website-using-reactjs.git"
        projectImg={require('./images/portfolio.png')}
      />

      <ProjectCard
        projectTitle="Real-Time Quiz Application"
        projectDesc="Our real-time quiz application, built with Node.js, HTML, CSS, and JavaScript, offers an interactive and engaging platform for hosting and participating in live quizzes"
        projectLink="https://github.com/vikastech15/realtime-quiz-app-mongoDb"
        deployedProjectLink="https://github.com/vikastech15/realtime-quiz-app-mongoDb"
        projectImg={require('./images/quiz app.png')}
      />

      {/* <ProjectCard
        className = "odd"
        projectTitle="Rog-free: accessible anytime, anywhere"
        projectDesc="An approach to target and heal specific health conditions by transforming the living room into a yoga studio"
        projectLink="https://github.com/Deepajha14/Rog-Free"
        deployedProjectLink="https://deepajha14.github.io/Rog-Free/"
        projectImg={require('./images/projecTarot.png')}
      /> */}
      <AboutMe id = 'about' />
      <SkillCard id = 'skills' />
      <ContactForm id = 'contact' />
      <Footer />
    </div>
    </>
  );
}

export default App;
