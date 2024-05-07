//functions
import { useState } from "react";
import { Link } from "react-router-dom";
//styles
import { Wrapper, Menulink } from "./Navbar.styles";

const SecondNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <div className="navbar__inner-container ">
        <Link className="logo-active" to="/">
          <h3>MOJO</h3>
        </Link>

        <Link className="logo-active" to="/">
          <Menulink
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
