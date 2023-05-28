import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./navbar.css";

const MyCustomNavbar = () => {
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar key={expand} className="navbar" expand={expand}>
          <Container fluid>
            <Navbar.Brand href="#" className="navbar__brand">
              <img
                className="navbar__logo"
                src="/assets/images/logo.png"
                alt="logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`navbar-offcanvas-expand-${expand}`}
              className="navbar__toggle"
            />
            <Navbar.Offcanvas
              id={`navbar-offcanvas-expand-${expand}`}
              aria-labelledby={`navbar-offcanvas-expand-${expand}`}
              placement="end"
              className="navbar__offcanvas"
            >
              <Offcanvas.Header
                closeButton
                className="navbar__offcanvas-header"
              >
                <Offcanvas.Title
                  id={`navbar-offcanvas-expand-${expand}`}
                  className="navbar__offcanvas-title"
                >
                  Meny
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="navbar__offcanvas-body">
                <Nav className="navbar__nav justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#home" className="navbar__link">
                    Hjem
                  </Nav.Link>
                  <Nav.Link href="#approach" className="navbar__link">
                    Vår tilnærming
                  </Nav.Link>
                  <Nav.Link href="#products" className="navbar__link">
                    Våre produkter
                  </Nav.Link>
                  <Nav.Link href="#contact" className="navbar__link">
                    Kontakt oss
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default MyCustomNavbar;
