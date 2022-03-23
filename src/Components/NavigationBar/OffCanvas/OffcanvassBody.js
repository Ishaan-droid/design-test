import { Link, NavLink } from 'react-router-dom';
import { Nav, NavDropdown, Offcanvas } from 'react-bootstrap';

export default function OffcanvassBody() {
  return (
    <Offcanvas.Body>
      <Nav className="justify-content-end flex-grow-1 pe-3">
        <NavLink as={Link} to="/design">
          Design Your Firm
        </NavLink>
        <NavLink as={Link} to="/run">
          Run Your Firm
        </NavLink>
        <NavLink as={Link} to="/explore">
          Explore
        </NavLink>
        <NavLink as={Link} to="/leaderboard">
          Leaderboards
        </NavLink>
        <NavDropdown title="More" id="offcanvasNavbarDropdown">
          <NavDropdown.Item href="#action3">View Teams</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Help / FAQ</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Offcanvas.Body>
  );
}
