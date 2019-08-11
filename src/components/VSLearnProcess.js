import React from 'react';
import '../thumbnailGallery.css';
import Codepen from "react-codepen-embed";

class VSLearnProcess extends React.Component {

   constructor(){
    super();
    this.state = {
      pictures: [],
      rutas:[],
      albumActual:[],
      show:false
    };
  }

  render() {
    return (
      <div className="container-fluid backgg">
       <div>
        <div className="container gallery-container">
          <h1>Visual computing work</h1>
          <p className="page-description text-center">See my learning process in Visual Computing course, pens in WebGL</p>
          <div className="tz-gallery">
          <div className="caption">
            <h5><b>Week 1: Rotating rectangular box </b></h5>
            <h6>First experience with WebGL: Example of a rotating box, changing the cube to a rectangle 2 high, 1 wide and 1 deep </h6>
            </div>
            <Codepen 
            title="Week 1: Rotating rectangular box "
            hash="PMyOyp" 
            user="viviangomez" 
            height="500px"
            defaultTab="html,result"
            loader={() => <div>Loading...</div>}
            />
            </div>
          </div>          
        </div>
      </div>
      
    );
  }

}

export default VSLearnProcess;