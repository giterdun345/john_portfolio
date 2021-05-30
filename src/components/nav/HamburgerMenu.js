const HamburgerMenu = () => {
  
  return ( 
    <nav className="navbar-mainmenu">
            <div className="click-exit"></div>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#home">Home
                        <span className="sr-only">(current)</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#projects">Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
        
   );
}
 
export default HamburgerMenu;