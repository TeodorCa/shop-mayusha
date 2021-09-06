import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import { ReactComponent as Mail } from '../assets/icons/mail.svg';
import { ReactComponent as Phone } from '../assets/icons/phone.svg';
import { ReactComponent as Github } from '../assets/icons/github.svg';
import { ReactComponent as Linkedin } from '../assets/icons/linkedin.svg';


const Footer = () => {

    return(
        <footer className="bg-light py-4">
            <div className="container-fluid container-min-max-width d-flex justify-content-around">
                <div className="footer-items d-flex flex-column">
                    <h2 className="h4 text-center">Linkuri Rapide:</h2>
                    <Link to="/about">About</Link>
                    <Link to="/terms-and-conditions">Termeni si conditii</Link>
                </div>
                <div className="footer-items d-flex flex-column">
                    <h2 className="h4 text-center">Contacteaza-ma</h2>
                        <div className="d-flex">
                            <a href="mailto:cazangiu.teodor@gmail.com">
                            <Mail className="mr-1 mb-1" />
                            cazangiu.teodor@gmail.com
                            </a>
                        </div>
                        <div className="d-flex">
                            <Phone />
                            <p className="ml-1">+40744444444</p>
                        </div>

                        
                </div>

                <div className="footer-items d-flex flex-column">
                     <h2 className="h4 text-center">Social Media: </h2>
                        <div className="d-flex">
                            <a href="https://github.com/TeodorCa">
                                <Github className="mr-1 mb-1" />
                                TeodorCa
                            </a>
                        </div>
                        <div className="d-flex">
                            <a href="https://www.linkedin.com/in/teodor-cazangiu-9b697a147/">
                                <Linkedin className="mr-1 mb-1" />
                                Teodor Cazangiu
                            </a>
                        </div> 
                            
                </div>
            </div>  
            <div className="text-center mt-4">
                <p className="footer-items col-12 text-center">&copy; Teodor Cazangiu 2021</p>
            </div>
                  
        </footer>

    );

}

export default Footer;