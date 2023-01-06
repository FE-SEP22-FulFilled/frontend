import React from 'react';
import './Footer.scss';
import FullLogo from '../../img/FullLogo.svg';
import BackButton from '../../img/backButton.svg';

export const Footer: React.FC = () => {
  return (
    <div className="footer__container">
      <footer className="footer">
        <div className="footer__logo">
          <a href="#home">
            <img className="footer__logo--image" src={FullLogo} alt="logo" />
          </a>
        </div>
        <nav className="footer__nav">
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <a className="footer__nav-link" href="#apple">
                github
              </a>
            </li>

            <li className="footer__nav-item">
              <a className="footer__nav-link" href="#phones">
                contacts
              </a>
            </li>

            <li className="footer__nav-item">
              <a className="footer__nav-link" href="#tablets">
                rights
              </a>
            </li>
          </ul>
        </nav>

        <div className="footer__back-to-top">
          Back to top
          <a href="#home" className="footer__back-to-top--link">
            <img src={BackButton} alt="button back to top" />
          </a>
        </div>
      </footer>
    </div>
  );
};
