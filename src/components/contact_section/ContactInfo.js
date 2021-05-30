const ContactInfo = () => {
  return ( 
    <div className="title-desc">
      <div className="anim-2">
        <h2 className="display-4 display-title display-decor">Contact</h2>
          <p className="desc-decor">
            Please contact me if you have any questions, would like to collaborate or would like to hire me.
            <br/>
            I look forward to hearing from you. 
          </p>
      </div>
      <div className="address-container anim-3">
        <div className="row">
          <div className="col-12 col-md-12 col-xl-6">
            <h4>Contact</h4>
            <p className="mb-0">
              <a href='tel:345-916-5022'>345-916-5022</a>
              <br />
              <a href="mail:johnmketterer@gmail.com">johnmketterer@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default ContactInfo;