const SidebarNav = () => {
  return ( 
    // className: text-only / icon-only-->
    <nav className="navbar-sidebar font-primary">
      <ul className="navbar-nav" id="qmenu">
        <li className="nav-item" data-menuanchor="home">
          <a href="#home">
              <span className="icon">H</span>
              <span className="txt">Home</span>
          </a>
        </li>
        <li className="nav-item" data-menuanchor="projects">
          <a href="#projects">
              <span className="icon">P</span>
              <span className="txt">Projects</span>
          </a>
        </li>
        <li className="nav-item" data-menuanchor="contact">
          <a href="#contact">
              <span className="icon">C</span>
              <span className="txt">Contact</span>
          </a>
        </li>
      </ul>
    </nav>
   );
}
 
export default SidebarNav;