import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Mail } from '../assets/icons/mail.svg';
import { ReactComponent as Phone } from '../assets/icons/phone.svg';
import { ReactComponent as Github } from '../assets/icons/github.svg';
import { ReactComponent as Linkedin } from '../assets/icons/linkedin.svg';


const Footer = () => {

    return(
        <footer className="container-fluid bg-light py-4">
            <div className="row">
                <div className="col-4 d-flex flex-column">
                    <h2 className="h4">Linkuri Rapide:</h2>
                    <Link to="/about">About</Link>
                    <Link to="/terms-and-conditions">Termeni si conditii</Link>
                </div>
                <div className="col-4 d-flex flex-column">
                    <h2 className="h4">Contacteaza-ma</h2>
                        <div className="d-flex">
                            <Mail />
                            <p className="ml-1">cazangiu.teodor@gmail.com</p>
                        </div>
                        <div className="d-flex">
                            <Phone />
                            <p className="ml-1">+40746108252</p>
                        </div>

                        
                </div>

                <div className="col-4 d-flex flex-column">
                     <h2 className="h4">Social Media: </h2>
                        <div className="d-flex">
                            <Github />
                            <p className="ml-1">TeodorCa</p>
                        </div>
                        <div className="d-flex">
                            <Linkedin />
                            <p className="ml-1">+40746108252</p>
                        </div> 
                            
                </div>

                <div>
                    <p className="col-12 text-center">&copy; Teodor Cazangiu, 2020</p>
                </div>
            </div>        
        </footer>

    );

}

export default Footer;