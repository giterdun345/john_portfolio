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
                {/* <li className="nav-item">
                    <a className="nav-link" href="./demo.html">Demo</a>
                </li> */}
            </ul>
            <div className="menu-social">
                <p className="note">Website made with love by
                    <a href="//highhay.com">
                        <span className="marked">Miradontsoa</span>
                    </a>
                </p>
                <ul className="social">
                    <li>
                        <a href="//facebook.com/miradontsoa">
                            <i className="icon fa fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="//twitter/miradontsoa">
                            <i className="icon fa fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="//instagram.com/miradontsoa">
                            <i className="icon fa fa-instagram"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        
   );
}
 
export default HamburgerMenu;