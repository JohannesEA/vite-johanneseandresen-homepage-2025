import React, { useState } from "react";
import Hamburger from "hamburger-react";
import useScreenSize from "../../hooks/useScreenSize";
import "./Navbar.scss";
import { Link } from "react-scroll";

const Navbar: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const links = ["Om", "Kontakt"];
  const screenSize = useScreenSize();

  return (
    <nav className="navbar">
      <Link
        activeClass="active"
        className="navbar__link"
        to={"om"}
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onClick={() => setOpen(false)}
      >
        <img className="navbar__logo" src="/assets/logo.png" alt="Logo" />
      </Link>
      {screenSize.width > 500 ? (
        <div className="navbar__links-container">
          {links.map((link, index) => (
            <Link
              key={index}
              activeClass="active"
              className="navbar__link"
              to={link.toLowerCase()}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setOpen(false)}
            >
              {link}
            </Link>
          ))}
        </div>
      ) : (
        <>
          <Hamburger toggled={isOpen} toggle={setOpen} color="#f2f2f2" />
          <div
            className={`navbar__links-container--active ${
              isOpen ? "is-open" : ""
            }`}
          >
            {links.map((link, index) => (
              <a
                key={index}
                className="navbar__link"
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
