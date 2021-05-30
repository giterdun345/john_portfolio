import Footer from '../Footer'
import ActionButtons from './ActionButtons'
import ContactInfo from './ContactInfo'
import SlideFooter from './SlideFooter'
import MessageSlide from './MessageSlide'

const Contact = () => {
  return (
     <div className="section section-contact fp-auto-height-responsive no-slide-arrows " data-section="contact" > 
      <div className="slide" id="information" data-anchor="information">
        <div className="section-wrapper fullwidth fullheight center-lg-v with-margin padding-wrapper-topbottom">
          <div className="section-content fullwidth anim text-left">
            {/* <div className="col-12 col-md-8 col-lg-6  text-left center-v"> */}
              <div className="f-wrapper">
                <ContactInfo />
                <ActionButtons />
              </div>
            {/* </div> */}
          </div>
        </div>
        {/* <SlideFooter /> */}
      </div>
      {/* <!-- begin of message slide --> */}
      <MessageSlide />
    <Footer />
 </div>
    );
}
 
export default Contact;