import React from 'react';
import { Link } from 'react-router-dom';


class Footer extends React.Component {
    state = {
        images: [],
    };

   render() {
    return(
        <div>
         <footer className="footer-distributed">
           <div className="footer-right">
            <p className="footer-company-about">
                <span>About me</span>
                I'm Vivian Gomez, an student of System and Computing Engineering at Universidad de los Andes. Additionally, I study an specialization in Visual Computing, which is one of my favorites fields in my major.
                I am a creative person, leader, well work in teams and I ever want to learn all that I can. Currently, I'm very interested in web development, data visualization, video games development and the creation of software to solution problems and help the people.            
                </p>

            <div className="footer-icons">
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/viviangomezcc/"><i className="fab fa-instagram"></i></a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/VivianGomez"><i className="fab fa-linkedin"></i></a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/VivianGomez?tab=repositories"><i className="fab fa-github"></i></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/vivi_15gmz3b9a"><i className="fab fa-behance"></i></a>
            </div>

            </div>

            <div className="footer-center verticalAling">
                <h3 align="center">Vivian Gomez</h3>
                <h6 align="center" className="footer-company-name">Copyright &copy; 2019</h6>
                 <center>
                    <div align="center">                      
                        <h5><i className="fa fa-envelope"></i><a href="mailto:viviangomezjobs@gmail.com">viviangomezjobs@gmail.com</a></h5>
                    </div>
                 </center>                
            </div>

            <div className="footer-right">

            <p className="footer-company-about">
                <span>My skills</span>
                During my major, I have learned a lot of technologies to develop applications in different environments. 
                I learned about web and mobile technologies such as HTML, CSS, JavaScript, Android Java and Kotlin. 
                Additionaly, I have passion for the design, User Interface (UI) and User Experience (UX), for this, 
                I have learned Corel Painter Essentials, Photoshop and Cinema 4D, in which I make designs, icons and 3D models.
            </p>

            <div className="footer-icons">

                <a href="#"><i className="fab fa-java"></i></a>
                <a href="#"><i className="fas fa-database"></i></a>
                <a href="#"><i className="fab fa-html5"></i></a>
                <a href="#"><i className="fab fa-css3-alt"></i></a>
                <a href="#"><i className="fab fa-js-square"></i></a>
                <a href="#"><i className="fab fa-android"></i></a>
                <a href="#"><i className="fab fa-github"></i></a>
                <a href="#"><img src={require('.././images/c#30x30.png')} className="responsive"/></a>
                <a href="#"><img src={require('.././images/c4d30x30.png')} className="responsive"/></a>
            </div>

            </div>
            </footer>                           
        </div>
    )
 }
}

export default Footer;

