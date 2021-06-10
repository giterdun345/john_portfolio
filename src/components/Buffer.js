import Footer from './Footer'

const Buffer = () => {
  return ( 
    <div className="section section-description fp-auto-height-responsive section-text-dark" data-section="about-performance">
      <div className="section-cover-full fit bg-color" data-bgcolor="rgba(255,255,255,1)">
      </div>
      <div className="section-wrapper fullwidth fullheight center-lg-v with-margin padding-wrapper-topbottom">
        <div className="section-content fullwidth anim">
          <div className="row">
              <div className="wrapper">
                <div className="title-desc">
                  <h2 className="display-4 display-title anim-1" style={{width: "100%"}}>  
                    Tenacious, Creative and Handy.
                    <br/> Let's do this.
                  </h2>
                    <p className="anim-2 desc-decor">
                      I'm looking for a good opportunity to be a creative player on a growing team.
                      As a member of your team, you will get a loyal worker that you can rely on.
                      I am a life long learner. From years of teaching and owning a business, I know what
                      it takes to have a customer focused approach and bring value to the team.
                      When something needs to get done, I get it done. 
                      <br/>
                      Let's set up a time to talk. 
                      
                    </p>
                </div>
                <div className="btns-action anim-3">
                  <a className="btn btn-arrow btn-primary" href="#contact">
                    <span className="icon">
                      <span className="arrow-right"></span>
                    </span>
                    <span className="text">Reach Out</span>
                  </a>
                </div>
              </div>
          </div> 
        </div> 
        <Footer />
      </div>
    </div>
   );
}
 
export default Buffer;