import React from 'react';
import {Link} from "react-router-dom";

import '../assets/styles/header.css';

const header = () => {
  return (
    <div className="header sticky">
      <div className="header-right">
        <Link to="/" className="active">
          Logout
        </Link>
      </div>
    </div>
  );
};

export default header;
