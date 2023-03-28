import React from "react";  
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Image, Button } from 'react-bootstrap';


const Footer = () => {


    return (

    <>
      <footer className=" footermobile mt-4">
        <div className="form 4 pt-4 inputContainer">
            <form action="get">
                <input type="email" placeholder="Update in your inbox..."></input>
                <Button className="btnHero hover3 ms-2">Go</Button>
            </form>
        </div>
        <div className="container-footer">
                        <div className="footer-menu 2">
                <ul className="footer-menu 2">
                    <li className="hover2">Home</li>
                    <li className="hover2">Pricing</li>
                    <li className="hover2">Products</li>
                    <li className="hover2">About Us</li>
                </ul>
            </div>
            <div className="footer-menu 3">
                <ul className="footer-menu 3">
                    <li className="hover2">Trainning</li>
                    <li className="hover2">Community</li>
                    <li className="hover2">Privacy Policy</li>
                </ul>
            </div>
        </div>
            <div>
                <ul className="footer-social 5">
                    <li><i className="fa-brands fa-facebook-f footersocial hover1"></i></li>
                    <li><i className="fa-brands fa-youtube footersocial hover1"></i></li>
                    <li><i className="fa-brands fa-twitter footersocial hover1"></i></li>
                    <li><i className="fa-brands fa-pinterest footersocial hover1"></i></li>
                    <li><i className="fa-brands fa-instagram footersocial hover1"></i></li>
                </ul>
            </div>
        
            <div >
        
            </div>
            <p className="copyright secondary 6">Copyright 2020. All Rights Reserved <br/>ISABEL PALACIOS</p>
    </footer>
    <footer className="footerdesk">
        <div className="logosocial">
            <Image className="logoDesk d-flex justify-content-center" src={process.env.PUBLIC_URL + '/csfooter.jpg'} />
            <div>
                <ul className="socialDesk">
                    <li><i className="fa-brands fa-facebook-f footersocial hover1"></i></li>
                    <li><i className="fa-brands fa-youtube footersocial hover1"></i></li>
                    <li><i className="fa-brands fa-twitter footersocial hover1"></i></li>
                    <li><i className="fa-brands fa-pinterest footersocial hover1"></i></li>
                    <li><i className="fa-brands fa-instagram footersocial hover1"></i></li>
                </ul>
            </div>
        </div>
        <div className="container-footer">
                        <div className="footer-menu">
                <ul className="footer-menu">
                    <li className="hover2">Home</li>
                    <li className="hover2">Pricing</li>
                    <li className="hover2">Products</li>
                    <li className="hover2">About Us</li>
                </ul>
            </div>
            <div className="footer-menu">
                <ul className="footer-menu">
                    <li className="hover2">Trainning</li>
                    <li className="hover2">Community</li>
                    <li className="hover2">Privacy Policy</li>
                </ul>
            </div>
        </div>
        <div className="form">
            <form action="get">
                <input type="email" placeholder="Ingresa tu correo..."></input>
                <Button className="btnHero hover3">Go</Button>
            </form>
            <p className="copyright secondary 6">Copyright 2020. All Rights Reserved <br/>ISABEL PALACIOS</p>
        </div>     
    </footer>
    </>    
);
}

export default Footer;