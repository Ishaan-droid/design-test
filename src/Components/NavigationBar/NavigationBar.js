import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
import OffcanvassBody from './OffCanvas/OffcanvassBody';
import './NavigationBar.css';

import logo from '../../Assets/Images/logo.svg';
import threeDots from '../../Assets/Images/three-dots-icon.svg';
import mapIcon from '../../Assets/Images/map-icon.svg';

import leaderboardsIcon from '../../Assets/Images/leaderboards-icon.svg';
import peopleIcon from '../../Assets/Images/people-icon.svg';
import helpIcon from '../../Assets/Images/help-icon.svg';

const NavigationBar = () => {
  const activeClass = navData =>
    navData.isActive ? ' navbar-normal router-active-link' : 'navbar-normal';

  return (
    <Navbar expand="lg" bg="white" variant="dark">
      <Navbar.Brand as={Link} to="/">
        <img
          src={logo}
          alt="company_logo"
          width="120"
          height="28"
          className="d-inline-block align-top me-3 right-border"
          as={Link}
          to="/"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <NavLink className={activeClass} as={Link} to="/design">
            Design Your Firm
          </NavLink>
          <NavLink as={Link} to="/run" className={activeClass}>
            Run Your Firm
          </NavLink>
        </Nav>
        <Nav className="">
          <NavLink as={Link} to="/explore" className={activeClass}>
            <img src={mapIcon} alt="map_icon" className="me-2 mb-2 nav-icons" />
            Explore
          </NavLink>
          <NavLink as={Link} to="/leaderboard" className={activeClass}>
            <img src={leaderboardsIcon} alt="leaderboard" className="me-2 mb-2 nav-icons" />
            Leaderboards
          </NavLink>
          <NavDropdown
            title={
              <img src={threeDots} className="mt-2" alt={'three_dots'} width="25" height="25" />
            }
            id="collasible-nav-dropdown"
            align={'end'}
          >
            <NavDropdown.Item>
              <img
                src={peopleIcon}
                width="20"
                height="20"
                alt="people_icon"
                className="me-2 mb-1"
              />
              View Teams
            </NavDropdown.Item>
            <NavDropdown.Item>
              <img src={helpIcon} width="20" height="20" alt="help_icon" className="me-2 mb-1" />
              Help / FAQ
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton />
          <OffcanvassBody />
        </Navbar.Offcanvas>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
