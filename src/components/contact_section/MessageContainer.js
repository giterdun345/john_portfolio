const MessageContainer = () => {
  return ( 
      <div className="message-form">
        <div className="form-container form-container-card">
          <form className="send_message_form message form" 
                method="post" 
                action="https://formspree.io/f/moqydjkn" 
                id="contact-form"
                >
            <div className="form-group name">
              <input id="mes-name" name="name" type="text" placeholder="Name" className="form-control form-control-outline thick form-success-clean"required />
            </div>
            <div className="form-group email">
              <input id="mes-email" type="email" placeholder="Email" name="email" className="form-control form-control-outline thick form-success-clean"required />
            </div>
            <div className="form-group no-border">
              <textarea id="mes-text" placeholder="Message ..." name="message" className="form-control form-control-outline thick form-success-clean"required />
            </div>
            <div>
              <p className="message-ok invisible form-text-feedback form-success-visible">Your message has been sent, thank you.</p>
            </div>
            <div className="btns text-left d-flex justify-content-between">
              <a className="btn btn-arrow" href="#contact/information">
                <span className="icon">
                  <span className="arrow-left"></span>
                </span>
                <span className="text">Contact Info</span>
              </a>
              <button className="btn btn-outline" name="submit" type="submit" style={{width: "20rem"}}>
                <span className="txt">Send Now</span>
                <span className="arrow-icon"></span>
              </button>
              {/* added for bug */}
              <div/>
            </div>
          </form>
        </div>
      </div>
   );
}
 
export default MessageContainer;