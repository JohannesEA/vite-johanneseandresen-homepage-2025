import { Wrapper } from "./Navbar.styles";
import { Link } from "react-scroll";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import getWindowDimensions from "../../Functions";

const Navbar = () => {
  const [responsiveNavbarActive, setResponsiveNavbarActive] = useState(false);
  const { width } = getWindowDimensions();

  return (
    <Wrapper>
      <div className="navbar__inner-container">
        <img
          className="navbar__logo"
          src="/assets/logos/Bærum Trefelling.jpg"
          alt="baerum trefelling logo"
        />
        {width < 800 && (
          <Hamburger
            color="var(--color--secondary)"
            onToggle={() => setResponsiveNavbarActive(!responsiveNavbarActive)}
          />
        )}

        {width > 800 && (
          <div
            className={
              !responsiveNavbarActive
                ? "navbar__links"
                : "navbar__links navbar__links--active"
            }
          >
            <Link
              className="navbar__link"
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
            >
              Hjem
            </Link>
            <Link
              className="navbar__link"
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
            >
              Om
            </Link>
            <Link
              className="navbar__link"
              to="services"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
            >
              Tjenester
            </Link>
            <Link
              className="navbar__link"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
            >
              Kontakt
            </Link>
          </div>
        )}

        {width > 800 ||
          (responsiveNavbarActive && (
            <div
              className={
                !responsiveNavbarActive
                  ? "navbar__links"
                  : "navbar__links navbar__links--active"
              }
            >
              <Link
                className="navbar__link"
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={300}
              >
                Hjem
              </Link>
              <Link
                className="navbar__link"
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={300}
              >
                Om
              </Link>
              <Link
                className="navbar__link"
                to="services"
                spy={true}
                smooth={true}
                offset={-100}
                duration={300}
              >
                Tjenester
              </Link>
              <Link
                className="navbar__link"
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={300}
              >
                Kontakt
              </Link>
            </div>
          ))}
      </div>
    </Wrapper>
  );
};

export default Navbar;
