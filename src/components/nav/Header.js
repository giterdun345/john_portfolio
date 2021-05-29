import HamburgerMenu from './HamburgerMenu'

const Header = () => {
  return ( 
    <header className="page-header navbar page-header-alpha scrolled-white">

      {/* <!-- Begin of menu icon toggler --> */}
      <button className="navbar-toggler site-menu-icon " id="navMenuIcon">
          {/* <!-- Available className : menu-icon-dot / menu-icon-thick /menu-icon-random --> */}
          <span className="menu-icon menu-icon-dot">
              <span className="bars">
                  <span className="bar1"></span>
                  <span className="bar2"></span>
                  <span className="bar3"></span>
              </span>
          </span>
      </button>
      {/* <!-- End of menu icon toggler --> */}

    {/* <!-- Begin of logo/brand --> */}
    <a className="navbar-brand" href="/">
        <span className="logo">
            <img className="light-logo" src="img/logo.png" alt="Logo" />
        </span>
        {/* <!-- logo Subtitle --> */}
        <span className="text">
            <span className="line">Software Developer</span>
            <span className="line sub">Portfolio</span>
        </span>
    </a>
    {/* <!-- End of logo/brand --> */}

    {/* <!-- begin of menu wrapper --> */}
    <div className="all-menu-wrapper" id="navbarMenu">
        {/* <!-- Begin of top menu --> */}
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
            {/* <!-- Begin of CTA Actions, & Icons menu (optional) --> */}
             <ul className="navbar-nav navbar-nav-actions">
                <li className="nav-item">
                    <a className="btn btn-outline btn-round" target="_blank" rel="noreferrer" href="https://themeforest.net/user/mivfx/portfolio">
                        <span className="text">Contact Now</span>
                        <span className="icon small">
                            <span className="fa fa-mail-forward"></span>
                        </span>
                    </a>
                </li>
            </ul>
            {/* <!-- End of CTA & Icons menu --> */}
        </nav>
        {/* <!-- End of top menu --> */}

        {/* <!-- Begin of hamburger mainmenu menu --> */}
        <HamburgerMenu />
        {/* <!-- End of hamburger mainmenu menu --> */}

        {/* <!-- Begin of sidebar nav menu params className: text-only / icon-only--> */}
        <nav className="navbar-sidebar font-primary">
            <ul className="navbar-nav" id="qmenu">
                <li className="nav-item" data-menuanchor="home">
                    <a href="#home">
                        <span className="icon">A</span>
                        <span className="txt">About</span>
                    </a>
                </li>
                <li className="nav-item" data-menuanchor="projects">
                    <a href="#projects">
                        <span className="icon">W</span>
                        <span className="txt">Works</span>
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
        {/* <!-- End of sidebar nav menu --> */}
    </div>
    {/* <!-- end of menu wrapper --> */}

</header>
   );
}
 
export default Header;



// <header className="page-header navbar page-header-alpha scrolled-white">

// {/* <!-- Begin of menu icon toggler --> */}
// <button className="navbar-toggler site-menu-icon" id="navMenuIcon">
//   {/* <!-- Available className : menu-icon-dot / menu-icon-thick /menu-icon-random --> */}
//   <span className="menu-icon menu-icon-normal">
//     <span className="bars">
//       <span className="bar1"></span>
//       <span className="bar2"></span>
//       <span className="bar3"></span>
//     </span>
//   </span>
// </button>
// {/* <!-- End of menu icon toggler --> */}

// {/* <!-- Begin of logo/brand --> */}
// <a className="navbar-brand" href="./#">
//   <span className="logo">
//     <img className="light-logo" src="img/logo.png" alt="Logo" />
//   </span>
//   {/* <!-- logo title (optional) --> */}
//   {/* <!-- <span className="text"> */}
//   {/* <span className="line">Brainux</span> */}
//   {/* <span className="line sub">Portfolio Template</span> */}
// {/* </span> --> */}
// </a>
// {/* <!-- End of logo/brand --> */}

// {/* <!-- begin of menu wrapper --> */}
// <div className="all-menu-wrapper" id="navbarMenu">
//   {/* <!-- Begin of top menu --> */}
//   <nav className="navbar-topmenu">
//     <ul className="navbar-social d-none d-lg-block">
//       <li className="nav-item">
//         <a href="//facebook.com/miradontsoa" className="btn-social">
//           <i className="icon fa fa-facebook"></i>
//         </a>
//       </li>
//       <li className="nav-item">
//         <a href="//twitter/miradontsoa" className="btn-social">
//           <i className="icon fa fa-twitter"></i>
//         </a>
//       </li>
//       <li className="nav-item">
//         <a href="//instagram.com/miradontsoa" className="btn-social">
//           <i className="icon fa fa-instagram"></i>
//         </a>
//       </li>
//     </ul>
//     {/* <!-- Begin of CTA Actions, & Icons menu (optional) --> */}
//     <ul className="navbar-nav navbar-nav-actions">
//       <li className="nav-item">
//         <a className="btn btn-outline btn-round" target="_blank" href="https://themeforest.net/user/mivfx/portfolio">
//           <span className="text">Buy Now</span>
//           <span className="icon big">
//             <span className="fa fa-cart-arrow-down"></span>
//           </span>
//         </a>
//       </li>
//     </ul>
//     {/* <!-- End of CTA & Icons menu --> */}
//   </nav>
//   {/* <!-- End of top menu --> */}

//   {/* <!-- Begin of hamburger mainmenu menu --> */}
//   <nav className="navbar-mainmenu">
//     <div className="click-exit"></div>
//     <ul className="navbar-nav mr-auto">
//       <li className="nav-item active">
//         <a className="nav-link" href="./index.html#home">About
//           <span className="sr-only">(current)</span>
//         </a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="./gallery.html">Projects</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="./item.html">Item</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="./index.html#home">Contact</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="./demo.html">Demo</a>
//       </li>
//     </ul>
//     <div className="menu-social">
//       <p className="note">Website made by
//         <a href="//highhay.com">
//           <span className="marked">Miradontsoa</span>
//         </a>
//       </p>
//       <ul className="social">
//         <li>
//           <a href="//facebook.com/miradontsoa">
//             <i className="icon fa fa-facebook"></i>
//           </a>
//         </li>
//         <li>
//           <a href="//twitter/miradontsoa">
//             <i className="icon fa fa-twitter"></i>
//           </a>
//         </li>
//         <li>
//           <a href="//instagram.com/miradontsoa">
//             <i className="icon fa fa-instagram"></i>
//           </a>
//         </li>
//       </ul>
//     </div>
//   </nav>
//   {/* <!-- End of hamburger mainmenu menu --> */}

//   {/* <!-- Begin of sidebar nav menu params className: text-only / icon-only--> */}
//   <nav className="navbar-sidebar font-primary">
//     <ul className="navbar-nav" id="qmenu">
//       <li className="nav-item" data-menuanchor="home">
//         <a href="#home">
//           <span className="icon">H</span>
//           <span className="txt">Home</span>
//         </a>
//       </li>
//       <li className="nav-item" data-menuanchor="about">
//         <a href="#about">
//           <span className="icon">A</span>
//           <span className="txt">About</span>
//         </a>
//       </li>
//       <li className="nav-item" data-menuanchor="projects">
//         <a href="#projects">
//           <span className="icon">W</span>
//           <span className="txt">Works</span>
//         </a>
//       </li>
//       <li className="nav-item" data-menuanchor="contact">
//         <a href="#contact">
//           <span className="icon">C</span>
//           <span className="txt">Contact</span>
//         </a>
//       </li>
//     </ul>
//   </nav>
//   {/* <!-- End of sidebar nav menu --> */}
// </div>
// {/* <!-- end of menu wrapper --> */}

// </header>
