const TopMenu = () => {
  return ( 
    <nav className="navbar-topmenu">
      <ul className="navbar-social">
          <li className="nav-item">
              <a href="https://github.com/giterdun345" className="btn-social" target="_blank" rel="noreferrer">
                  <i className="icon fa fa-github-square"></i>
              </a>
          </li>
          <li className="nav-item">
              <a href="https://www.linkedin.com/in/jm-ketterer/" className="btn-social" target="_blank" rel="noreferrer">
                  <i className="icon fa fa-linkedin"></i>
              </a>
          </li>
      </ul>
    </nav>
   );
}
 
export default TopMenu;