import { Wrapper } from "./Hero.styles";
import { Link } from "react-scroll";
import OrderWebsiteModal from "../../../components/top-order-website-bar/order-website-modal/OrderWebsiteModal";
import { useState } from "react";

const Hero = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <Wrapper id="hero">
      <div className="hero__container"></div>

      <div className="hero__text-container">
        <div className="hero__text-container--animation">
          <h2 className="hero__logo--title hero__logo--title--welcome">
            Velkommen til
          </h2>
          <div className="animation--one"></div>
        </div>

        <div className="hero__text-container--animation">
          <h1 className="hero__logo--title hero__logo--title--mojo">
            MOJO WEBSITES
          </h1>
          <div className="animation--two"></div>
        </div>

        <div className="hero__buttons">
          <Link
            className="button button--primary hero__button"
            to="services"
            spy={true}
            smooth={true}
            offset={-100}
            duration={300}
          >
            TJENESTER
          </Link>
          <button
            className={
              !openModal
                ? "button button--secondary hero__button"
                : "button button--secondary hero__button hero__button--active"
            }
            onClick={() => setOpenModal(!openModal)}
          >
            {!openModal ? <>BESTILL NETTSIDE</> : <>LUKK</>}
          </button>

          {openModal && (
            <div className="modal__overlay hero__modal-overlay">
              <OrderWebsiteModal onClose={() => setOpenModal(false)} />
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
