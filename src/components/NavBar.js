import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

function NavBar(props) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const currentUser = props.currentUser;
  const handleSignOut = (event) => {
    signOut(getAuth());
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">

        <Link to="/" className="navbar-brand" href="index.html"><img src="/favicon.png" alt="Logo" width={28} height={28}
          className="d-inline-block align-text-top" /> JobTrackr</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleClick}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${click ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav me-auto" style={{ display: "flex" }}>
            <li className="nav-item" style={{ display: "inline-block" }}>
              <Link
                to="/home"
                className="nav-link nav-button"
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item" style={{ display: "inline-block" }}>
              <Link
                to="/checklist"
                className="nav-link nav-button"
                onClick={handleClick}
              >
                Checklist
              </Link>
            </li>
            <li className="nav-item" style={{ display: "inline-block" }}>
              <Link
                to="/add-job"
                className="nav-link nav-button"
                onClick={handleClick}
              >
                Job Log
              </Link>
            </li>
            <li className="nav-item" style={{ display: "inline-block" }}>
              <Link to="/about" className="nav-link nav-button" onClick={handleClick}>
                About
              </Link>
            </li>
            {currentUser && (
              <li className="nav-item" style={{ display: "inline-block" }}>
                <Link to="/profile" className="nav-link nav-button" onClick={handleClick}>
                  Profile
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div className="login-navbar">
          {currentUser ? (
            <button className="btn btn-light btn-sm"
              onClick={handleSignOut}>Sign Out</button>)
            : (
              <button className="btn btn-light btn-sm" style={{ display: "inline-block" }}>
                <a href="/login" className="login">Login</a></button>
            )}
        </div>
      </div>
    </nav>
  );
}
export default NavBar;