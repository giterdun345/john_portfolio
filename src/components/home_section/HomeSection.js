import SkillsSide from './SkillsSide'
import Footer from './Footer'

const HomeSection = () => {
  return ( 
  <div className="section section-home fullscreen-md fp-auto-height-responsive main-home border-sm section-centered"data-section="home">
    {/* <!-- Begin of section wrapper --> */}
    <div className="section-wrapper fullwidth with-margin v-center">
      {/* <!-- content --> */}
      <div className="section-content anim">
        <div className="row">
          <div className="col-12 col-lg-8 text-left">
            {/* <!-- title --> */}
            <div className="title-desc">
              <h1 className="display-4 display-title display-decor home-title text-slide-in anim-1-off">
                John Ketterer</h1>
            </div>
          </div>

          <div className="col-12 col-lg-6 text-left">
            {/* <!-- description --> */}
            <div className="title-desc">
              <p className="anim-4">We are the best home designer in town.</p>
            </div>
            {/* <!-- Action button --> */}
            <div className="btns-action anim-5">
              <a href="#contact" className="btn btn-social">
                <i className="icon fa fa-phone"></i>
              </a>
              <a className="btn btn-arrow btn-primary" href="#about">
                <span className="icon">
                  <span className="arrow-right"></span>
                </span>
                <span className="text">About</span>
              </a>
            </div>
          </div>
        </div>
      </div>
        <SkillsSide />
        {/* <!-- Arrows scroll down/up --> */}
        <Footer />
      </div>
    </div>
   );
}
 
export default HomeSection;