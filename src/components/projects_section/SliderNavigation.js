const SliderNavigation = () => {
  return (
    <div className="section-slider-footer slider-navigation">
      <div className="left">
        <span className="btn btn-arrow">
          <span className="icon">
            <span className="arrow-left"></span>
          </span>
        </span>
      </div>
      <div className="right">
        <span className="btn btn-arrow">
          <span className="icon">
            <span className="arrow-right"></span>
          </span>
        </span>
      </div>
      <div className="text">
       <p>Browse Projects</p>
      </div>
    </div>
    );
}
 
export default SliderNavigation;