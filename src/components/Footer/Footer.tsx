/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import FullLogo from '../../img/FullLogo.svg';
import BackButton from '../../img/backButton.svg';
import { goToTop } from '../../utils/utilsCatalog';

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
              <a
                className="footer__nav-link"
                href="https://github.com/FE-SEP22-FulFilled"
                target="_blank"
                rel="noreferrer"
              >
                github
              </a>
            </li>

            <li className="footer__nav-item">
              <a
                className="footer__nav-link"
                href="mailto:mate.academy@gmail.com"
              >
                contacts
              </a>
            </li>

            <li className="footer__nav-item">
              <Link to="/" onClick={goToTop} className="footer__nav-link">
                rights
              </Link>
            </li>
          </ul>
        </nav>

        <div className="footer__back-to-top">
          Back to top
          <button
            type="button"
            className="footer__back-to-top--link"
            onClick={goToTop}
          >
            <img src={BackButton} alt="button back to top" />
          </button>
        </div>
      </footer>
    </div>
  );
};
