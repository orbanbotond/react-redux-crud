import React, {PropTypes} from 'react';  
import { Link, Navlink } from 'react-router-dom';

const Header = () => {  
  return (
    <nav>
      <NavLink to="/" 
        activeClassName="active">Home</NavLink>
      {" | "}
      <Link to="/cats" activeClassName="active">Cats</Link>
    </nav>
  );
};

export default Header;  