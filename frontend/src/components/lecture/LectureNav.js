import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { logout } from '../common/utils';

function LectureNav() {
  const navigate = useNavigate()
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-4">
        <a className="navbar-brand" href="#">
          GradeBook Lecture
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            
            <li className="nav-item">
              <Link to="/lecture/home">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
            <a style={{cursor:'pointer'}} onClick={() => logout('lecture',navigate)} className="nav-link">Logout</a>

            </li>
          </ul>
        </div>
      </nav>
      
      <div className="container">
      <Outlet />
      </div>
    </div>
  );
}

export default LectureNav