const SliderNavigation = () => {
  return (
    <div className="section-slider-footer slider-navigation">
      <a className="left">
        <span className="btn btn-arrow">
          <span className="icon">
            <span className="arrow-left"></span>
          </span>
        </span>
      </a>
      <a className="right">
        <span className="btn btn-arrow">
          <span className="icon">
            <span className="arrow-right"></span>
          </span>
        </span>
      </a>
      <div className="text">
       <p>Browse Projects</p>
      </div>
    </div>
    );
}
 
export default SliderNavigation;