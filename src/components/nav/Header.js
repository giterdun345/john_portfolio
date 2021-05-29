import HamburgerMenu from './HamburgerMenu'
import Hamburger from './Hamburger'
import Logo from './Logo'
import TopMenu from './TopMenu'
import SidebarNav from './SidebarNav'

const Header = () => {
  return ( 
    <header className="page-header navbar page-header-alpha scrolled-white">
      <Hamburger />
      <Logo />
        <div className="all-menu-wrapper" id="navbarMenu">
            <TopMenu />
            <HamburgerMenu />
            <SidebarNav />
        </div>
    </header>
   );
}
 
export default Header;