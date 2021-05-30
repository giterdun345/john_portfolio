const MessageSlide = () => {
  return ( 
    <div className="slide" id="message" data-anchor="message">
        {/* <!-- Begin of slide section wrapper --> */}
        <div className="section-wrapper fullwidth fullheight center-lg-v with-margin padding-wrapper-topbottom">
          {/* <!-- main content --> */}
          <div className="row  justify-content-between">
            <div className="col-12 col-md-12 col-lg-7 col-xl-6">
              {/* <!-- content --> */}
              <div className="section-content fullwidth anim text-left" style={{width:"60rem"}}>
                {/* <!-- title and description --> */}
                <div className="title-desc">
                  <div className="anim-2">
                    <h2 className="display-4 display-title display-decor">Send A Message</h2>
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
                          <span className="text">Contact Info</span>
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

            {/* <div className="col-12 col-md-6 col-lg-4">
            </div> */}
          </div>


          {/* <!-- aside content --> */}
          <div className="section-aside aside-bottom anim small-relative">

          </div>
        </div>
        {/* <!-- End of slide section wrapper --> */}
      </div>
   );
}
 
export default MessageSlide;