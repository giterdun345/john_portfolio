const CoverBackground = () => {
  return ( 
    <div className="page-cover" id="parallax-cover">
      <div data-depth="0.2" className="cover-bg bg-img" data-image-src="./img/bg-default5.jpg" />
      <div className="cover-bg-mask bg-color" data-bgcolor="rgba(2, 3, 10, 0.7)" />
    </div>
   );
}
 
export default CoverBackground;