const SkillsSide = () => {
  return ( 
    <div className="section-aside small-relative  aside-middle">
          <ul className="nav nav-btns-list">
            <li className="nav-item">
              <a className="btn-framed" href="#services/0">
                <span className="icon">AR</span>
                <span className="text">
                  <span className="b-title">Architecture</span>
                  <span className="b-desc">Rural and City Architecture</span>
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="btn-framed" href="#services/1">
                <span className="icon">HD</span>
                <span className="text">
                  <span className="b-title">Home Design</span>
                  <span className="b-desc">Interior Design, Home Deco, Potager</span>
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="btn-framed" href="#services/2">
                <span className="icon">PB</span>
                <span className="text">
                  <span className="b-title">Plumbing</span>
                  <span className="b-desc">Electricity, Plumbing, and so on.</span>
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="btn-framed" href="#contact">
                <span className="icon">
                  <i className="fa fa-phone"></i>
                </span>
                <span className="text">
                  <span className="b-title">Have a project?</span>
                  <span className="b-desc">Phone us: +0 12 345 678</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
   );
}
 
export default SkillsSide;