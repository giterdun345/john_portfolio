const Logo = () => {
  return (
    <div className="navbar-brand" href="/">
        <span className="logo">
            <img className="light-logo" src="img/logo.png" alt="Logo" />
        </span>
        {/* <!-- logo Subtitle --> */}
        <span className="text">
            <span className="line">Software Developer</span>
            <span className="line sub">Portfolio</span>
        </span>
    </div>
  );
}
 
export default Logo;