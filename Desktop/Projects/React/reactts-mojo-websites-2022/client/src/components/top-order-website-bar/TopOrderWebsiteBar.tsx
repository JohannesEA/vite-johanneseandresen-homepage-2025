import { Wrapper } from "./TopOrderWebsiteBar.styles";
import { BsArrowRightShort } from "react-icons/bs";
import { useState } from "react";
import OrderWebsiteModal from "./order-website-modal/OrderWebsiteModal";
const TopOrderWebsiteBar = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <Wrapper>
      <div
        className="top-order-website-bar__link"
        onClick={() => setOpenModal(!openModal)}
      >
        {!openModal ? (
          <>
            BESTILL NETTSIDE <BsArrowRightShort />
          </>
        ) : (
          <>Lukk</>
        )}
      </div>

      {openModal && (
        <div className="modal__overlay hero__modal-overlay">
          <OrderWebsiteModal onClose={() => setOpenModal(false)} />
        </div>
      )}
    </Wrapper>
  );
};

export default TopOrderWebsiteBar;
