import React from "react";
import {Link} from "react-router-dom";
import "../styles/nav.css";


function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
          लेन-देन
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="./Login">Login</Link>
              </li>
              <li className="nav-item">
                <form action="../../backend/Logout" method="post">
                  <Link className="nav-link" to="./Logout">Logout</Link>
                </form>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
            </ul>
            <form className="d-flex" >
              
              <select name="category" className="navbarcat" id="cat" placeholder="Category">
                    <option value="none">All Categories</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Stationary">Stationary</option>
                    <option value="Locomotives">Locomotives</option>
                    <option value="Books">Books</option>
              </select>
                <button className="btn btn-outline-success filter" type="submit">
                  Filter
                </button>

            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
