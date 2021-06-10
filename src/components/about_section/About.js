import Footer from '../Footer'
const About = () => {
  return ( 
    <div className="section section-description fp-auto-height-responsive " data-section="about">
      <div className="section-cover-tier left fit bg-img" data-image-src="./img/johnk2.png">
      </div>
      {/* <!-- Begin of section wrapper --> */}
      <div className="section-wrapper fullwidth fullheight with-margin center-lg-v padding-wrapper-topbottom">
        <div className="section-content anim">
          <div className="row  justify-content-between">
            <div className="col-12 col-lg-4" />
            <div className="col-12 col-lg-6 text-left center-v">
              <div className="wrapper">
                <div className="title-desc">
                  <h2 className="display-4 display-title display-decor anim-1">
                    Hello World.
                  </h2>
                  <p className="anim-2 desc-decor">
                  I am a software developer based out of Jacksonville, Fl
                  experienced in frontend and backend development with a specialization in data science and API service.
                  I love building websites that solve problems and puts a smile on the customer's face.
                  Currently I am learning about UI/UX to create an optimal experience for users. 
                  I'm always looking forward to learning new things and expanding my tech toolbox.
                  </p>
                </div>
                <div className="btns-action anim-3">
                  <a href="https://github.com/giterdun345" className="btn btn-social">
                    <i className="icon fa fa-github-square"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/jm-ketterer/" className="btn btn-social">
                    <i className="icon fa fa-linkedin"></i>
                  </a>
                  <a className="btn btn-outline btn-primary" href="#projects">
                    <span className="text">Projects</span>
                    <span className="icon">
                      <span className="arrow-right"></span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {/* <!-- End of section wrapper --> */}
    </div>
    
   );
}
 
export default About;