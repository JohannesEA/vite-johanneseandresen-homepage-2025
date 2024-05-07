//functions
import { useState } from "react";
import getWindowDimensions from "../../universal/Functions";
import { Link } from "react-scroll";
//styles
import { Wrapper, Menulink, Menu, HamburgerContainer } from "./Navbar.styles";
import { Spiral as Hamburger } from "hamburger-react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Navbar = () => {
  const { width } = getWindowDimensions();
  const [isOpen, setIsOpen] = useState(false);

  const menu = useSelector((state: RootState) => state.menu);

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
          <h3>MOJO</h3>
        </Link>

        {width < 800 && <HamburgerContainer></HamburgerContainer>}
        {(menu.menuIsActive || width > 800) && (
          <Menu isOpen={menu.menuIsActive}>
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
              style={{ textDecoration: "none" }}
            >
              <Menulink
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
