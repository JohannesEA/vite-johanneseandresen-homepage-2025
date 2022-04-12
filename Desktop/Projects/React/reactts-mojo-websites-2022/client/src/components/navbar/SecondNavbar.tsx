//functions
import { useState } from "react";
import { Link } from "react-router-dom";
//styles
import { Wrapper, Menulink } from "./Navbar.styles";

const SecondNavbar = () => {
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
        <Link className="logo-active" to="/">
          {" "}
          <h3>MOJO</h3>
        </Link>

        <Link className="logo-active" to="/">
          <Menulink
            className={active.home ? "manu-link-active" : ""}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            HJEM
          </Menulink>
        </Link>
      </div>
    </Wrapper>
  );
};

export default SecondNavbar;
