import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="main">
      <h1>Page not found</h1>
      <Link to="/">Go HomePage</Link>
    </div>
  );
};
