import React from 'react';
import '../thumbnailGallery.css';
import ModalViewer from './ModalViewer';

class Projects extends React.Component {

   constructor(){
    super();
    this.state = {
      pictures: [],
      rutas:[],
      albumActual:[],
      show:false
    };
  }

  componentDidMount(){
    fetch('https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=0e64fbdf50fd58a395b0edd73ae1552d&photoset_id=72157709340336991&user_id=182323904%40N08&format=json&nojsoncallback=1')
    .then(function(response){
      return response.json();
    })
    .then(function(j){
      let rutes = []
      let picArray = j.photoset.photo.map((pic) => {
        var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
        rutes.push(srcPath)        
      })
      this.setState({pictures: picArray, rutas: rutes});
    }.bind(this))
  }

  render() {
    return (
      <div className="container-fluid backgg">
       <div>
        <div className="container gallery-container">
          <h1>My projects</h1>
          <p className="page-description text-center">See my work in web and mobile applications</p>
          <div className="tz-gallery">
              <div className="row">
                  <div className="col-sm-6 col-md-4">
                  <div className="thumbnail"> 
                    <img width="50%" src={require('.././images/LogoFoohealli.png')} className="responsive"/>
                    <div className="caption">
                      <h5><b>Foohealli</b></h5>
                      <h6>Foohealli is an application that seeks to improve communication between doctors, nutritionists and patients in order to achieve successful nutritional treatments.</h6>
                        <p>
                        See more <a target="_blank" rel="noopener noreferrer" href="https://foohealli-app.herokuapp.com/"><i className="fas fa-globe"></i></a> - <a target="_blank" rel="noopener noreferrer" href="https://github.com/VivianGomez/canal-nutricion"><i className="fab fa-github text-dark"></i></a>
                        </p>
                    </div>
                    </div>
                   </div>
                  <div className="col-sm-6 col-md-4">
                  <div className="thumbnail"> 
                    <img width="50%" src={require('.././images/LogoVPP.png')} className="responsive"/>
                     <div className="caption">
                        <h5><b>SII-Cuidamos</b></h5>
                        <h6>This application exposes public investment projects in Colombia in order that citizens can make a correct follow-up to the development and implementation of them.</h6>
                          <p>
                          See more <a target="_blank" rel="noopener noreferrer" href="http://vpp.ineffableinventions.com.co/proyectos"><i className="fas fa-globe"></i></a> - <a target="_blank" rel="noopener noreferrer" href="https://github.com/gabrielpintop/veeduria-proyectos-publicos"><i className="fab fa-github text-dark"></i></a>
                          </p>
                     </div>
                    </div>
                   </div>
                  <div className="col-sm-6 col-md-4">
                  <div className="thumbnail"> 
                    <img width="43%" src={require('.././images/LogoPlanTuU.png')} className="responsive"/>
                     <div className="caption">
                        <h5><b>Plan Tú U</b></h5>
                        <h6>This application seeks to retain graduates Uniandinos through a system of points from which they obtain benefits. The application allows them to see the benefits they can obtain and manage their points, among other feature</h6>
                          <p>
                          See more <a target="_blank" rel="noopener noreferrer" href="https://plan-tu-u.herokuapp.com/"><i className="fas fa-globe"></i></a> - <a target="_blank" rel="noopener noreferrer" href="https://github.com/gabrielpintop/plan-tu-u"><i className="fab fa-github text-dark"></i></a>
                          </p>
                     </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>          
        </div>
      </div>
      
    );
  }

}

export default Projects;