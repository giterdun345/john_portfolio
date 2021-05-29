import Title from './Title'
import SkillsSide from './SkillsSide'
import Footer from '../Footer'

const HomeSection = () => {
  return ( 
  <div className="section section-home fullscreen-md fp-auto-height-responsive main-home border-sm section-centered"data-section="home">
    {/* <!-- Begin of section wrapper --> */}
    <div className="section-wrapper fullwidth with-margin v-center">
        <Title />
        <SkillsSide />
        {/* <!-- Arrows scroll down/up --> */}
        <Footer />
      </div>
    </div>
   );
}
 
export default HomeSection;