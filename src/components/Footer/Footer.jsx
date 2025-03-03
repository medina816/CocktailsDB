import React from 'react';
import { FaFacebookF, FaTwitter, FaDiscord } from 'react-icons/fa';
import './footer.css';

function Footer() {
    return (
        <footer className="footer">
    
            <hr className="footer-line" />
            
            <div className="footer-info">
                <p>© 2025 TheCocktailDB.</p>
                <p>Proudly built in the UK 🇬🇧</p>
            </div>
  
                <img src="https://www.thecocktaildb.com/images/logo-tsdb.png" alt="Logo 1" />
                <img src="https://www.thecocktaildb.com/images/logo-tadb.png" alt="Logo 2" />
                <img src="https://www.thecocktaildb.com/images/logo-tmdb.png" alt="Logo 3" />
            <div className="footer-socials">
                <FaFacebookF className="social-icon" />
                <FaTwitter className="social-icon" />
                <FaDiscord className="social-icon" />
            </div>
           
            <div className="footer-links">
                <a href="#">Missing API</a>
                <a href="#">About</a>
                <a href="#">Fan</a>
                <a href="#">Contact</a>
            </div>
        </footer>
    );
}

export default Footer;
