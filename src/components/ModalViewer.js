import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
 
export default class ModalViewer extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      photoIndex: 0,
      isOpen: false,
      cargado: false,
      portada: this.props.portada,
      titulo: this.props.titulo,
      contenido: this.props.contenido,
      behance: this.props.behance,
      idAlbum: this.props.idAlbum,
      images: []
    };
  }

  componentWillReceiveProps(nextProps) {
		this.setState(
		  {
        portada: nextProps.portada,
        behance: nextProps.behance,
        titulo: nextProps.titulo,
        idAlbum: nextProps.idAlbum,
        contenido: nextProps.contenido
    	},
		);
	}

  cargarAlbum(){
    if(this.state.isOpen){
      fetch('https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=0e64fbdf50fd58a395b0edd73ae1552d&photoset_id='+this.state.idAlbum+'&user_id=182323904%40N08&format=json&nojsoncallback=1')
      .then(function(response){
        return response.json();
      })
      .then(function(j){
        let albs = []
        let picArray = j.photoset.photo.map((pic) => {
          var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
          albs.push(srcPath)        
        })
        this.setState({images: albs, cargado: true});
      }.bind(this))
    }
  }

  render() {
    const { photoIndex, isOpen } = this.state;
 
    return (
      <div className="thumbnail"> 
        {this.cargarAlbum()}       
        <img src={this.state.portada} onClick={() => this.setState({ isOpen: true })}></img>
         <div className="caption">
          <h5><b>{this.state.titulo}</b></h5>
          <h6>{this.state.contenido}</h6>
            <p>
            Show in <a target="_blank" rel="noopener noreferrer" href={this.state.behance}><i className="fab fa-behance text-primary"></i> </a>
            </p>
         </div>
        {isOpen && this.state.cargado &&(
          <Lightbox
            mainSrc={this.state.images[photoIndex]}
            nextSrc={this.state.images[(photoIndex + 1) % this.state.images.length]}
            prevSrc={this.state.images[(photoIndex + this.state.images.length - 1) % this.state.images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + this.state.images.length - 1) % this.state.images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % this.state.images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}