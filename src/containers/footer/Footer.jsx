import React from "react";
import "./footer.css";
import gpt3Logo from "../../assets/logo.svg";

export const Footer = () => {
  return (
<div className="gpt3__footer section__padding">
  <div className="gpt3__footer__heading">
    <h1 className="gradient__text">
      Do you want to step in to the
      <br /> future before others
    </h1>
  </div>
  <div className="gpt3__footer__btn">
    <button>Request Early Access</button>
  </div>
  <div className="gpt3__footer__links">
    <div className="gpt3__logo">
      <img src={gpt3Logo} alt="footer-logo" />
      <p>Crechterwoord K12 182 DK Alknjkcb,
        <br /> All Rights Reserved</p>
    </div>
    <div className='gpt3__footer__links-content'>
    <div className="gpt3__footer__links-container">
      <h4 className="gpt3__footer__links-title">Links</h4>
      <ul className="gpt3__footer__links-items">
        <li className="gpt3__footer__links-item">Overons</li>
        <li className="gpt3__footer__links-item">Social Media</li>
        <li className="gpt3__footer__links-item">Counters</li>
        <li className="gpt3__footer__links-item">Contact</li>
      </ul>
    </div>
        <div className="gpt3__footer__links-container">
      <h4 className="gpt3__footer__links-title">Company</h4>
      <ul className="gpt3__footer__links-items">
        <li className="gpt3__footer__links-item">Terms & Conditions</li>
        <li className="gpt3__footer__links-item">Privacy Policy</li>
        <li className="gpt3__footer__links-item">Contact</li>
      </ul>
    </div>
        <div className="gpt3__footer__links-container">
      <h4 className="gpt3__footer__links-title">Get in touch</h4>
      <ul className="gpt3__footer__links-items">
        <li className="gpt3__footer__links-item">Crechterwoord K12 
          182 DK Alknjkcb
          </li>
        <li className="gpt3__footer__links-item">085-132567</li>
        <li className="gpt3__footer__links-item">info@payme.net</li>
      </ul>
    </div>
    </div>
  </div>
  <div className="gpt3__footer__copyright">
    <p>© 2021 GPT-3. All rights reserved.</p>
  </div>
</div>

  );
};

export default Footer;
