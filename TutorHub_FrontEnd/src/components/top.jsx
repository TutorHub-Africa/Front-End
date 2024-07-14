import '../styles/header/top.css';

import phoneIcon from "../assets/header/phone.png";
import twitterIcon from '../assets/header/Symbol-1.png';
import whatsappIcon from '../assets/header/Symbol-2.png';
import linkedinIcon from '../assets/header/Symbol-3.png';
import youtubeIcon from '../assets/header/Symbol-4.png';
import facebookIcon from '../assets/header/Symbol-5.png';


function Top(){
    return (
    <div className="container">
        <div className="contact-info">
            <img src={phoneIcon} alt="Phone" className="header-icon" />
            <span>Call us: +2519------</span>
        </div>

        <div className="social-media">
            <span>Follow Us On :</span>
            <a href="#"><img src={facebookIcon} alt="Facebook" className="header-icon" /></a>
            <a href="#"><img src={twitterIcon} alt="Twitter" className="header-icon" /></a>
            <a href="#"><img src={whatsappIcon} alt="WhatsApp" className="header-icon" /></a>
            <a href="#"><img src={linkedinIcon} alt="LinkedIn" className="header-icon" /></a>
            <a href="#"><img src={youtubeIcon} alt="YouTube" className="header-icon" /></a>
        </div>
    </div>
    );
}

export default Top;