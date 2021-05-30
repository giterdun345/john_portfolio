const ActionBUttons = () => {
  return ( 
    <div className="btns-action anim-4">
      <a href="https://github.com/giterdun345" className="btn btn-social" target="_blank" rel="noreferrer">
        <i className="icon fa fa-github-square"></i>
      </a>
      <a href="https://www.linkedin.com/in/jm-ketterer/" className="btn btn-social" target="_blank" rel="noreferrer">
        <i className="icon fa fa-linkedin"></i>
      </a>
      <a className="btn btn-arrow btn-primary" href="#contact/message">
        <span className="icon">
          <span className="arrow-right"></span>
        </span>
        <span className="text">Send A Message</span>
      </a>
  </div>
   );
}
 
export default ActionBUttons;