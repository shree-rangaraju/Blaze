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
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav nav-underline ms-auto align-items-center">
              <a class="nav-link fs-5" href="#About">
                About
              </a>
              <a class="nav-link fs-5" href="#Events">
                Events
              </a>
              <a class="nav-link fs-5" href="#Contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
