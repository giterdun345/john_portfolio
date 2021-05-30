const SlideFooter = () => {
  return ( 
    <div className="slide-footer section-footer footer-register">
      <form className="send_email_form form-container form-container-transparent form-container-white"method="post" action="ajaxserver/serverfile.php">
        <div className="form-input">
          {/* <div className="form-group form-success-gone"> */}
            {/* <!-- <label for="reg-email">Email</label> --> */}
            {/* <div className="f-input"> */}
              {/* <input id="reg-email" name="email" className="form-control form-control-outline form-control-white"
              type="email" required placeholder="your@email.address" data-validation-type="email"
              /> */}
              {/* <div className="btns-action">
                <button id="submit-email" name="submit_email" className="btn btn-arrow btn-primary form-success-gone">
                  <span className="icon">
                    <i className="ion ion-checkmark"></i>
                  </span>
                  <span className="text">Register to newsletter</span>
                </button>
              </div> */}
            {/* </div> */}
          {/* </div> */}
          <div className="form-group mb-0">
            <div>
              <p className="email-ok invisible form-text-feedback form-success-visible">Your email has been registered, thank you.</p>
            </div>
          </div>
        </div>
      </form>
    </div>

   );
}
 
export default SlideFooter;