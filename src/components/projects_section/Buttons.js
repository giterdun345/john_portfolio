const Buttons = ({demo, source}) => {
  return ( 
    <div>
      <a className="btn btn-outline btn-primary" href={demo} target="_blank" rel="noreferrer">
        <span className="text">Demo</span>
        <span className="icon">
          <span className="arrow-right"></span>
        </span>
      </a>
      <a className="btn btn-outline btn-primary" href={source} target="_blank" rel="noreferrer">
        <span className="text">Source</span>
        <span className="icon">
          <span className="arrow-right"></span>
        </span>
      </a>
    </div>
    
   );
}
 
export default Buttons;