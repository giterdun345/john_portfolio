import MessageContainer from './MessageContainer'

const MessageSlide = () => {
  return ( 
    <div className="slide" id="message" data-anchor="message">
      <div className="section-wrapper fullwidth fullheight center-lg-v with-margin padding-wrapper-topbottom">
          <div className="section-content fullwidth anim text-left">  
            <div className="title-desc">
              <div className="anim-2">
                <h2 className="display-4 display-title display-decor">Send A Message</h2>
              </div>
            </div>
            <MessageContainer />  
          </div>
        <div className="section-aside aside-bottom anim small-relative">
        </div>
      </div>
    </div>
   );
}
 
export default MessageSlide;