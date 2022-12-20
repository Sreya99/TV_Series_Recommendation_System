import { Link } from "react-router-dom";
import {auth} from '../firebase-config.js'
import {onAuthStateChanged, signOut} from 'firebase/auth';
import {useState} from 'react';

const Navbar = () => {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="navbar">
      <div className="container">
        <nav className="navbar__nav">
          <h3 className="nav__brand">
            <Link to="/">
              <i className="fas fa-video"></i> TV SERIES RECOMMENDATION
            </Link>
          </h3>
          <ul className="nav__links">
            <li className="links__link">
              <Link to="/">HOME</Link>
            </li>
            <li className="links__link">
              <Link to="/about">ABOUT</Link>
            </li>
            <li className="links__link">
            {user ? <button className="nav_button" type="button" onClick={logout}>LOGOUT</button> : <Link to="/login">LOGIN</Link> }
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
