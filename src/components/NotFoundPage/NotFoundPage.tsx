import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import arrowBack from '../../icons/arrow_back.svg';
import '../../styles/blocks/notfoundpage.scss';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="main">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="notfoundpage__back-button"
      >
        <img src={arrowBack} alt="arrow_back" />
        Back
      </button>

      <h1 className="notfoundpage__header">Page not found</h1>
      <Link to="/" className="notfoundpage__home-button">
        Use me to back HomePage
      </Link>
    </div>
  );
};
