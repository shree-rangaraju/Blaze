export default function Navbar() {
  return (
    <header data-bs-theme="dark">
      <nav className="navbar shadow navbar-expand-lg fixed-top">
        <div className="container">
          <div className="navbar-brandr">
            <img
              src="static/eielogo.png"
              alt="EIE logo"
              width="64px"
              type="image/png"
            />
            <h4 className="d-inline">BLAZE 2K23</h4>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav nav-underline ms-auto align-items-center">
              <a className="nav-link fs-5" href="#About">
                About
              </a>
              <a className="nav-link fs-5" href="#Events">
                Events
              </a>
              <a className="nav-link fs-5" href="#Contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
