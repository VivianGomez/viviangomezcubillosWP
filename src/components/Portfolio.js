import React from 'react';
import '../thumbnailGallery.css';
import ModalViewer from './ModalViewer';

class Portfolio extends React.Component {

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
          <h1>My portfolio</h1>
          <p className="page-description text-center">See my work in design and UI/UX</p>
          <div className="tz-gallery">
              <div className="row">
                  <div className="col-sm-6 col-md-4">
                    <ModalViewer titulo="San Fransokyo" contenido="3D rendering of San Fransokyo, micro-city in isometric view." portada={this.state.rutas[3]} behance="https://www.behance.net/gallery/77361479/San-Fransokyo" imagenes={this.state.albumActual} idAlbum="72157709276468837"/>                           
                  </div>
                  <div className="col-sm-6 col-md-4">
                    <ModalViewer titulo="Golden Dragon Fruit" contenido="3D modeling of an artistic still life (with Dragon fruits and Aubergines), with golden texture." portada={this.state.rutas[2]} behance="https://www.behance.net/gallery/77035029/Golden-dragon-fruit" imagenes={this.state.albumActual} idAlbum="72157709339207002"/>                           
                  </div>
                  <div className="col-sm-6 col-md-4">
                    <ModalViewer titulo="Green Monster" contenido="Character inspired on nature. Check in behance a -Walking cycle- animation." portada={this.state.rutas[0]} behance="https://www.behance.net/gallery/80184127/Walking-monster" imagenes={this.state.albumActual} idAlbum="72157709346849877"/>                           
                  </div>
                  <div className="col-sm-6 col-md-4">
                    <ModalViewer titulo="Tooney dooney animations" contenido="Microanimations and simple modeling of three cartoon characters." portada={this.state.rutas[1]} behance="https://www.behance.net/gallery/80471221/Tooney-dooney-(microanimations)" imagenes={this.state.albumActual} idAlbum="72157709347086486"/>                                         
                  </div>
              </div>
            </div>
          </div>        
        </div>
      </div>
      
    );
  }

}

export default Portfolio;