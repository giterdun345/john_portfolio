const Buttons = ({demo, source}) => {
  return ( 
    <div>
      <a className="btn btn-outline btn-primary" href={demo}>
                    <span className="text">Demo</span>
                    <span className="icon">
                      <span className="arrow-right"></span>
                    </span>
      </a>
      <a className="btn btn-outline btn-primary" href={source}>
                    <span className="text">Source</span>
                    <span className="icon">
                      <span className="arrow-right"></span>
                    </span>
      </a>
    </div>
    
   );
}
 
export default Buttons;