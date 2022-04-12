//functions
import { useState } from "react";
import getWindowDimensions from "../../universal/Functions";
import { Link } from "react-scroll";
//styles
import { Wrapper, Menulink, Menu, HamburgerContainer } from "./Navbar.styles";
import { Spiral as Hamburger } from "hamburger-react";

const Navbar = () => {
  const { width } = getWindowDimensions();
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState({
    home: false,
    about: false,
    services: false,
    portfolio: false,
    contact: false,
  });

  return (
    <Wrapper>
      <div className="navbar__inner-container">
        <Link
          className="logo-active"
          to="hero"
          spy={true}
          smooth={true}
          offset={-100}
          duration={300}
          style={{ textDecoration: "none", color: "var(--color--dark)" }}
        >
          {" "}
          <h3>MOJO</h3>
        </Link>

        {width < 800 && (
          <HamburgerContainer>
            <Hamburger
              label="Show menu"
              size={40}
              toggled={isOpen}
              toggle={() => setIsOpen(!isOpen)}
              color="var(--color--dark)"
            ></Hamburger>
          </HamburgerContainer>
        )}
        {(isOpen || width > 800) && (
          <Menu isOpen={isOpen}>
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
              style={{ textDecoration: "none" }}
            >
              <Menulink
                className={active.home ? "manu-link-active" : ""}
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                HJEM
              </Menulink>
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={300}
            >
              <Menulink
                className={active.about ? "manu-link-active" : ""}
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                OM
              </Menulink>
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
            >
              <Menulink
                className={active.services ? "manu-link-active" : ""}
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                TJENESTER
              </Menulink>
            </Link>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
            >
              <Menulink
                className={active.portfolio ? "manu-link-active" : ""}
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                PORTFØLJE
              </Menulink>
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
            >
              <Menulink
                className={active.contact ? "manu-link-active" : ""}
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                KONTAKT
              </Menulink>
            </Link>
          </Menu>
        )}
      </div>
    </Wrapper>
  );
};

export default Navbar;
