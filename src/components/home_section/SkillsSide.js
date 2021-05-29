const SkillsSide = () => {
  return ( 
    <div className="section-aside small-relative  aside-middle">
          <ul className="nav nav-btns-list">
            <li className="nav-item">
              <div className="btn-framed" href="#services/0">
                <span className="icon">
                  <i className="fa fa-laptop"></i>
                </span>
                <span className="text">
                  <span className="b-title">Languages</span>
                  <span className="b-desc">JavaScript, Python, SQL</span>
                </span>
              </div>
            </li>
            <li className="nav-item">
              <a className="btn-framed" href="#services/1">
                <span className="icon">FE</span>
                <span className="text">
                  <span className="b-title">Frontend</span>
                  <span className="b-desc">React, Sass, HTML, CSS</span>
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="btn-framed" href="#services/2">
                <span className="icon">BE</span>
                <span className="text">
                  <span className="b-title">Backend</span>
                  <span className="b-desc">Node, Django, PostgreSQL, graphQL</span>
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="btn-framed" href="#contact">
                <span className="icon">
                  <i className="fa fa-check"></i>
                </span>
                <span className="text">
                  <span className="b-title">Extras</span>
                  <span className="b-desc">Data Science, Data Visualizations, Gatsby, Netlify</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
   );
}
 
export default SkillsSide;