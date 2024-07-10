import React from 'react';
import './Footer.css';

import vector from '../assets/images/Vector.png'
import google from '../assets/images/googleIcon.png';
import gmail from '../assets/images/gmailIcon.png';
import twitter from '../assets/images/twitterIcon.png';
import facebook from '../assets/images/fbIcon.png';

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="footer-content">
                <div className="footer-logo text-left">
                    <img src={vector} alt="Unique Store" />
                    <p>Unique Store</p>
                </div>
                <div className="footer-links">
                    <ul>
                        <li>About us</li>
                        <li>Press</li>
                        <li>Terms of service</li>
                        <li>Privacy policy</li>
                        <li>Terms and conditions</li>
                    </ul>
                    <ul>
                        <li>Contact us</li>
                        <li>FAQ</li>
                        <li>Help center</li>
                        <li>Support</li>
                        <li>Follow us</li>
                    </ul>
                </div>
                <div className="footer-social">
                    <a href="/"><img src={google} alt="Google" /></a>
                    <a href="/"><img src={gmail} alt="Gmail" /></a>
                    <a href="/"><img src={twitter} alt="Twitter" /></a>
                    <a href="/"><img src={facebook} alt="Facebook" height={18} /></a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Unique store 2024. All rights reserved</p>
            </div>
        </div>
    </footer>
);

export default Footer;
