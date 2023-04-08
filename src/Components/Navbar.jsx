export default function Navbar() {
  return (
    <header data-bs-theme="dark">
      <nav className="navbar shadow fixed-top">
        <div className="container">
          <div className="navbar-brandr">
            <img
              src="static/eielogo.png"
              alt="EIE logo"
              width="64px"
              type="image/png"
            />
            <h4 className="d-inline">Blaze 2K23</h4>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end navcolor"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Navigation
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" href="#About">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Events">
                    Events
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Contact">
                    Contact
                  </a>
                </li>
                <li className="nav-item d-flex justify-content-center align-items-center flex-column">
                  <img
                    src="static/eielogo.png"
                    alt="EIE logo"
                    width="300px"
                    type="image/png"
                  />
                  <h6>
                    &copy; Copyright 2023
                    <br /> All rights reserved
                  </h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
