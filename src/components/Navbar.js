import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/PNG/SankalanLogo.webp';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isOffcanvasOpen: false,
      activePath: window.location.pathname // Track active path
    };
    this.offcanvasElement = null;
  }

  componentDidMount() {
    // Initialize Bootstrap Offcanvas
    this.offcanvasElement = new window.bootstrap.Offcanvas(document.getElementById('offcanvasNavbar'));
    this.offcanvasElement._element.addEventListener('shown.bs.offcanvas', this.handleShow);
    this.offcanvasElement._element.addEventListener('hidden.bs.offcanvas', this.handleHide);

    // Listen for popstate changes (browser back/forward)
    window.addEventListener('popstate', this.updateActivePath);
  }

  componentWillUnmount() {
    if (this.offcanvasElement) {
      this.offcanvasElement._element.removeEventListener('shown.bs.offcanvas', this.handleShow);
      this.offcanvasElement._element.removeEventListener('hidden.bs.offcanvas', this.handleHide);
    }
    window.removeEventListener('popstate', this.updateActivePath);
  }

  updateActivePath = () => {
    this.setState({ activePath: window.location.pathname });
    this.props.setActivePath(window.location.pathname); // Inform parent component if necessary
  };

  handleShow = () => {
    this.setState({ isOffcanvasOpen: true });
  };

  handleHide = () => {
    this.setState({ isOffcanvasOpen: false });
  };

  toggleOffcanvas = () => {
    if (this.state.isOffcanvasOpen) {
      this.offcanvasElement.hide();
    } else {
      this.offcanvasElement.show();
    }
  };

  handleLinkClick = (path) => {
    this.props.setActivePath(path); // Synchronize with parent or sibling component
    // Close the offcanvas
  if (this.offcanvasElement) {
    this.offcanvasElement.hide();
  }
  };

  render() {
    const { isOffcanvasOpen} = this.state;
    const {activePath}=this.props;
    console.log(activePath);
    return (
      <div>
        <nav className="navbar navbar-expand-lg custom-navbar">
          <div className="container-fluid">
            <Link
              className={`navbar-brand ${activePath === "/" ? "active" : ""}`}
              to="/"
              onClick={() => this.handleLinkClick("/")}
            >
              <img src={logo} alt="Sankalan Logo" width="100" height="70" />
            </Link>
            <button
              className={`navbar-toggler ${isOffcanvasOpen ? '' : 'collapsed'}`}
              type="button"
              aria-expanded={isOffcanvasOpen}
              aria-label="Toggle navigation"
              onClick={this.toggleOffcanvas}
            >
              <span className="toggler-icon top-bar"></span>
              <span className="toggler-icon middle-bar"></span>
              <span className="toggler-icon bottom-bar"></span>
            </button>
            <div
              className="offcanvas offcanvas-end custom-offcanvas"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              tabIndex="-1"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  <img src={logo} alt="Sankalan Logo" width="50" height="35" />
                </h5>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav mx-auto mb-2 mt-4 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${activePath === "/" ? "active" : ""}`}
                      to="/"
                      onClick={() => this.handleLinkClick("/")}
                    >
                      HOME
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${activePath === "/events" ? "active" : ""}`}
                      to="/events"
                      onClick={() => this.handleLinkClick("/events")}
                    >
                      EVENTS
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${activePath === "/team" ? "active" : ""}`}
                      to="/team"
                      onClick={() => this.handleLinkClick("/team")}
                    >
                      TEAM
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${activePath === "/sponsors" ? "active" : ""}`}
                      to="/sponsors"
                      onClick={() => this.handleLinkClick("/sponsors")}
                    >
                      SPONSORS
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${activePath === "/faq" ? "active" : ""}`}
                      to="/faq"
                      onClick={() => this.handleLinkClick("/faq")}
                    >
                      FAQ
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${activePath === "/updates" ? "active" : ""}`}
                      to="/updates"
                      onClick={() => this.handleLinkClick("/updates")}
                    >
                      UPDATES
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link
                      className={`nav-link${activePath === "/updates" ? "active" : ""}`}
                      to="/updates"
                      onClick={() => this.handleLinkClick("/updates")}
                    >
                      UPDATES
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
