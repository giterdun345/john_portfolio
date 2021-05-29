
import PageLoader from './components/PageLoader'
import Header from'./components/nav/Header'
import CoverBackground from './components/cover/CoverBackground'
import CoverFrame from './components/cover/CoverFrame'
import HomeSection from './components/home_section/HomeSection'
import About from './components/about_section/About'
import Projects from './components/projects_section/Projects'

const App = ()=>{
  return (
    <body id="menu" className="body-page">
      <PageLoader />
      <Header />
      <CoverBackground />
      <CoverFrame />
      <main className="page-main page-fullpage main-anim scroll-fullpage" id="mainpage">
        <HomeSection />
        <About />
        <Projects />
    
    {/* <!-- End of projects / gallery slider section --> */}

    {/* <!-- Begin of description with performance section --> */}
    <div className="section section-description fp-auto-height-responsive section-text-dark"
    data-section="about-performance">
      <div className="section-cover-full fit bg-color" data-bgcolor="rgba(255,255,255,1)"></div>

      {/* <!-- Begin of section wrapper --> */}
      <div className="section-wrapper fullwidth fullheight center-lg-v with-margin padding-wrapper-topbottom">

        {/* <!-- content --> */}
        <div className="section-content fullwidth anim">
          <div className="row">
            <div className="col-12 col-lg-6 text-left center-v">
              <div className="wrapper">
                {/* <!-- title and description --> */}
                <div className="title-desc">
                  <h2 className="display-4 display-title anim-1">We are
                    <span className="stroke-off">strong</span>
                  </h2>
                  <p className="anim-2 desc-decor">Our customers trust us. At bottom, you can see our awesome performance.
                    Lorem ipsum magicum dolor sit amet consectetur.
                  </p>
                </div>

                {/* <!-- Action button --> */}
                <div className="btns-action anim-3">
                  <a className="btn btn-arrow btn-primary" href="#contact">
                    <span className="icon">
                      <span className="arrow-right"></span>
                    </span>
                    <span className="text">Start a Project</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- icons or analytics --> */}
          <div className="num-grid">
            <div className="row anim-list">
              <div className="col-6 col-lg-3 item">
                <div className="num-wrapper">
                  <div className="num">1200</div>
                  <div className="desc">Customers</div>
                </div>
              </div>
              <div className="col-6 col-lg-3 item">
                <div className="num-wrapper">
                  <div className="num">100+</div>
                  <div className="desc">Partners</div>
                </div>
              </div>
              <div className="col-6 col-lg-3 item">
                <div className="num-wrapper">
                  <div className="num">20+</div>
                  <div className="desc">Products</div>
                </div>
              </div>
              <div className="col-6 col-lg-3 item">
                <div className="num-wrapper">
                  <div className="num">2400</div>
                  <div className="desc">Working Hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* <!-- Arrows scroll down/up --> */}
        <footer className="section-footer scrolldown">
          <a className="up">
            <span className="btn btn-arrow">
              <span className="icon">
                <span className="arrow-up"></span>
              </span>
            </span>
          </a>
          <a className="down">
            <span className="btn btn-arrow">
              <span className="icon">
                <span className="arrow-down"></span>
              </span>
            </span>
          </a>
        </footer>
      </div>
      {/* <!-- End of section wrapper --> */}
    </div>
    {/* <!-- End of description with performance section --> */}

    {/* <!-- Begin of contact section --> */}
    <div className="section section-contact fp-auto-height-responsive no-slide-arrows " data-section="contact">
      <div className="section-cover-tier right fit bg-img" data-image-src="./img/items/img-sample2-square.jpg">
      </div>

      {/* <!-- begin of information slide --> */}
      <div className="slide" id="information" data-anchor="information">
        {/* <!-- Begin of slide section wrapper --> */}
        <div className="section-wrapper fullwidth fullheight center-lg-v with-margin padding-wrapper-topbottom">
          {/* <!-- content --> */}
          <div className="section-content fullwidth anim text-left">
            {/* <!-- main content --> */}
            <div className="row justify-content-between">
              <div className="col-12 col-md-8 col-lg-6  text-left center-v">
                <div className="f-wrapper">
                  {/* <!-- title and description --> */}
                  <div className="title-desc">
                    <div className="anim-2">
                      <h2 className="display-4 display-title display-decor">Contact</h2>
                      <p className="desc-decor">For questions about our company and products found on our stores,
                        just contact us.</p>
                    </div>
                    <div className="address-container anim-3">

                      <div className="row">
                        <div className="col-12 col-md-12 col-xl-6">
                          <h4>Contact</h4>
                          <p className="mb-0">
                            +0 1 234 567 89
                            <br />ouremail@domain.com
                          </p>
                        </div>
                        <div className="col-12 col-md-12 col-xl-6">
                          <h4>Address</h4>
                          <p className="mb-0">12 Street Turning Place
                            <br />South Est, Antartica
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Action button --> */}
                  <div className="btns-action anim-4">
                    <a href="//twitter.com/miradontsoa" className="btn btn-social">
                      <i className="icon fa fa-twitter"></i>
                    </a>
                    <a href="//linkedin.com/miradontsoa" className="btn btn-social">
                      <i className="icon fa fa-linkedin"></i>
                    </a>

                    <a className="btn btn-arrow btn-primary" href="#contact/message">
                      <span className="icon">
                        <span className="arrow-right"></span>
                      </span>
                      <span className="text">Send Message</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="d-none d-md-block col-12 col-md-4 col-lg-4">
              </div>
            </div>

          </div>

        </div>
        {/* <!-- End of slide section wrapper --> */}

        {/* <!-- begin of slide footer --> */}
        <div className="slide-footer section-footer footer-register">
          <form className="send_email_form form-container form-container-transparent form-container-white"
          method="post" action="ajaxserver/serverfile.php">
            <div className="form-desc">
              {/* <!-- Optioanl text here --> */}
              {/* <!-- <p className="invite">Register email to newsletter :</p> --> */}
            </div>
            <div className="form-input">
              <div className="form-group form-success-gone">
                {/* <!-- <label for="reg-email">Email</label> --> */}
                <div className="f-input">
                  <input id="reg-email" name="email" className="form-control form-control-outline form-control-white"
                  type="email" required placeholder="your@email.address" data-validation-type="email"
                  />
                  <div className="btns-action">
                    <button id="submit-email" name="submit_email" className="btn btn-arrow btn-primary form-success-gone">
                      <span className="icon">
                        <i className="ion ion-checkmark"></i>
                      </span>
                      <span className="text">Register to newsletter</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="form-group mb-0">
                <div>
                  <p className="email-ok invisible form-text-feedback form-success-visible">Your email has been registred, thank you.</p>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* <!-- end of slide footer --> */}
      </div>


      {/* <!-- begin of message slide --> */}
      <div className="slide" id="message" data-anchor="message">
        {/* <!-- Begin of slide section wrapper --> */}
        <div className="section-wrapper fullwidth fullheight center-lg-v with-margin padding-wrapper-topbottom">
          {/* <!-- main content --> */}
          <div className="row  justify-content-between">
            <div className="col-12 col-md-12 col-lg-7 col-xl-6">
              {/* <!-- content --> */}
              <div className="section-content fullwidth anim text-left">
                {/* <!-- title and description --> */}
                <div className="title-desc">
                  <div className="anim-2">
                    <h2 className="display-4 display-title display-decor">Email Us</h2>
                    <p className="desc-decor">For questions about our company and products found on our stores.
                      Cras vitae neque molestie, rhoncus ipsum sit amet, lobortis
                      dui. Fusce in urna sem.</p>
                  </div>
                </div>
                {/* <!-- begin of message container --> */}
                <div className="message-form">
                  <div className="form-container form-container-card">
                    {/* <!-- Message form container --> */}
                    <form className="send_message_form message form" method="post" action="ajaxserver/serverfile.php"
                    id="message_form">
                      <div className="form-group name">
                        <input id="mes-name" name="name" type="text" placeholder="Name" className="form-control form-control-outline thick form-success-clean"
                        required />
                      </div>
                      <div className="form-group email">
                        <input id="mes-email" type="email" placeholder="Email" name="email" className="form-control form-control-outline thick form-success-clean"
                        required />
                      </div>
                      <div className="form-group no-border">
                        <textarea id="mes-text" placeholder="Message ..." name="message" className="form-control form-control-outline thick form-success-clean"
                        required></textarea>

                        <div>
                          <p className="message-ok invisible form-text-feedback form-success-visible">Your message has been sent, thank you.</p>
                        </div>
                      </div>

                      <div className="btns text-left d-flex justify-content-between">

                        <a className="btn btn-arrow" href="#contact/information">
                          <span className="icon">
                            <span className="arrow-left"></span>
                          </span>
                          <span className="text">Information</span>
                        </a>
                        <button id="submit-message" className="btn btn-outline email_b" name="submit_message">
                          <span className="txt">Send Now</span>
                          <span className="arrow-icon"></span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                {/* <!-- end of message container --> */}

              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
            </div>
          </div>


          {/* <!-- aside content --> */}
          <div className="section-aside aside-bottom anim small-relative">

          </div>
        </div>
        {/* <!-- End of slide section wrapper --> */}
      </div>




      {/* <!-- Arrows scroll down/up --> */}
      <footer className="section-footer scrolldown">
        <a className="up">
          <span className="btn btn-arrow">
            <span className="icon">
              <span className="arrow-up"></span>
            </span>
          </span>
        </a>
      </footer>
    </div>
    {/* <!-- End of contact section --> */}
  </main>
  {/* <!-- END OF page main content --> */}
</body>
  );
}

export default App;
