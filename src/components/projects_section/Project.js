import Buttons from './Buttons'
const Project = ({image, title, description, demo, source}) => {
  return ( 
    <div className="slide">
        <div className="slide-wrapper">
          <div className="item-wrapper anim">
            <div className="illustr zoomout-1">
              <div className="img bg-img" data-image-src={image}></div>
            </div>
            <div className="legend">
              <div className="title anim-1">
                <h3 className="display-decor display-title">{title}</h3>
              </div>
              <div className="content anim-2">
                <p>{description}</p>
               <Buttons demo={demo} source={source}/>
              </div>
            </div>
          </div>
        </div>
      </div>
   );
}
 
export default Project;