import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-scroll";

import "./navbar.css";
import { useState, useEffect } from "react";

const MyCustomNavbar = () => {
  const [showNav, setShowNav] = useState(true);
  const [showOffcanvas, setShowOffcanvas] = useState<boolean>(false);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos <= 0) {
        setShowNav(true);
      } else if (prevScrollPos < currentScrollPos) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          className={`navbar ${showNav ? "sticky-top" : "hide"}`}
          expand={expand}
        >
          <Container fluid className="navbar__container">
            <Navbar.Brand href="#" className="navbar__brand">
              <Link
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <img
                  className="navbar__logo"
                  src="/assets/images/logo.png"
                  alt="logo"
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`navbar-offcanvas-expand-${expand}`}
              className="navbar__toggle"
              onClick={() => setShowOffcanvas(!showOffcanvas)}
            />
            <Navbar.Offcanvas
              id={`navbar-offcanvas-expand-${expand}`}
              aria-labelledby={`navbar-offcanvas-expand-${expand}`}
              placement="end"
              className="navbar__offcanvas"
              show={showOffcanvas}
              onHide={() => setShowOffcanvas(!showOffcanvas)}
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
                  <Link
                    activeClass="active"
                    to="hero"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="navbar__link"
                    onClick={() => setShowOffcanvas(false)}
                  >
                    Hjem
                  </Link>
                  <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="navbar__link"
                    data-bs-toggle="collapse"
                    onClick={() => setShowOffcanvas(false)}
                  >
                    Om
                  </Link>
                  <Link
                    activeClass="active"
                    to="products"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="navbar__link"
                    onClick={() => setShowOffcanvas(false)}
                  >
                    Våre produkter
                  </Link>
                  <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="navbar__link"
                    onClick={() => setShowOffcanvas(false)}
                  >
                    Kontakt oss
                  </Link>
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
