
import PageLoader from './components/PageLoader'
import Header from'./components/nav/Header'
import CoverBackground from './components/cover/CoverBackground'
import CoverFrame from './components/cover/CoverFrame'
import HomeSection from './components/home_section/HomeSection'
import About from './components/about_section/About'
import Projects from './components/projects_section/Projects'
import Buffer from './components/Buffer'
import Contact from './components/contact_section/Contact'

const App = ()=>{
  return (
    <div id="menu" className=" body body-page">
      <PageLoader />
      <Header />
      <CoverBackground />
      <CoverFrame />
      <main className="page-main page-fullpage main-anim scroll-fullpage" id="mainpage">
        <HomeSection />
        <About />
        <Projects />
        <Buffer />    
        <Contact />
      </main>
    </div>
  );
}

export default App;
