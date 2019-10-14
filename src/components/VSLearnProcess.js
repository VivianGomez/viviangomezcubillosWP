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
            preview="false"
            />
            </div>
            <div className="tz-gallery">
          <div className="caption">
            <h5><b>Week 2: Pitcher/Glass - square base, circular mouth -</b></h5>
            <h6>Second experience with WebGL, practice of geometry concepts </h6>
            </div>
            <Codepen 
            title="Week 2: Pitcher/Glass - square base, circular mouth -"
            hash="jONMMOJ" 
            user="viviangomez" 
            height="500px"
            defaultTab="js,result"
            loader={() => <div>Loading...</div>}
            preview="false"
            />
            </div>
          <div className="tz-gallery">
          <div className="caption">
            <h5><b>Week 3: "Movable helicopter"</b></h5>
            <h6>Application of transformations: rotation, scale, translation </h6>
            </div>
            <Codepen 
            title="Week 3: ''Movable helicopter''"
            hash="QWLMYmr" 
            user="viviangomez" 
            height="500px"
            defaultTab="js,result"
            loader={() => <div>Loading...</div>}
            preview="false"
            />
          </div>
          <div className="tz-gallery">
          <div className="caption">
            <h5><b>Week 4: Movable helicopter around an object</b></h5>
            <h6>WebGL Scene graph and rotation </h6>
            </div>
            <Codepen 
            title="Semana 4: Move around an object"
            hash="aboqGGm" 
            user="viviangomez" 
            height="500px"
            defaultTab="js,result"
            loader={() => <div>Loading...</div>}
            preview="false"
            />
          </div>
          <div className="tz-gallery">
          <div className="caption">
            <h5><b>Week 5: Camera controls</b></h5>
            <h6>Change the view matrix of the camera </h6>
            </div>
            <Codepen 
            title="Week 5: Camera controls"
            hash="ExYpQaB" 
            user="viviangomez" 
            height="500px"
            defaultTab="js,result"
            loader={() => <div>Loading...</div>}
            preview="false"
            />
          </div>
          <div className="tz-gallery">
          <div className="caption">
            <h5><b>Week 8: Textures - Ice cream flavors</b></h5>
            <h6>Change the textures of primitives </h6>
            </div>
            <Codepen 
            title="Week 8: Textures - Ice cream flavors"
            hash="ExxKKvy" 
            user="viviangomez" 
            height="500px"
            defaultTab="js,result"
            loader={() => <div>Loading...</div>}
            preview="false"
            />
          </div>
         </div>    
         </div>          
        </div>
      </div>
      
    );
  }

}

export default VSLearnProcess;