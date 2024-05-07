import { Wrapper } from "./OrderWebsiteModal.styles";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { useState, MouseEvent, ChangeEvent, useEffect } from "react";
import { send } from "emailjs-com";
import {
  ConfirmMessage,
  ErrorMessage,
} from "../../../pages/home/contact/Contact.styles";

interface IOrderWebsiteModal {
  onClose: () => void;
}

const OrderWebsiteModal = ({ onClose }: IOrderWebsiteModal) => {
  const [messageState, setMessageState] = useState({
    isError: false,
    isSuccess: false,
    message: "",
  });
  const [active, setActive] = useState({
    information: false,
    ecommerce: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const [requestMessage, setRequestMessage] = useState({
    type: "",
    name: "",
    email: "",
    phoneNumber: "",
    title: "",
    message: "",
  });

  const validation = (
    name: string,
    email: string,
    phonenumber: string,
    title: string,
    message: string
  ) => {
    if (
      name !== "" &&
      email !== "" &&
      phonenumber !== "" &&
      title !== "" &&
      message !== ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleSendRequest = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessageState({
      isError: false,
      isSuccess: false,
      message: "",
    });
    if (
      validation(
        requestMessage.name,
        requestMessage.email,
        requestMessage.phoneNumber,
        requestMessage.title,
        requestMessage.message
      )
    ) {
      send(
        "service_d92dhff",
        "template_qlfe9vt",
        requestMessage,
        "user_nXc7ccykjAkWk2linJAyS"
      ).then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          setMessageState({
            isError: false,
            isSuccess: true,
            message:
              "Takk for at du ønsker å komme i kontakt med oss. Vi svarer så fort vi kan😁",
          });
          setIsLoading(false);
        },
        function (error) {
          console.log("FAILED...", error);
          setMessageState({
            isError: true,
            isSuccess: false,
            message: "Noe gikk galt under sendingen.. Prøv igjen.",
          });
          setIsLoading(false);
        }
      );
    } else {
      setMessageState({
        isError: true,
        isSuccess: false,
        message:
          "Alle inputfelt må være fylt ut med korrekt informasjon. Prøv igjen.",
      });
      setIsLoading(false);
    }
  };

  const handleChangeForInput = (e: ChangeEvent<HTMLInputElement>) => {
    setRequestMessage({ ...requestMessage, [e.target.name]: e.target.value });
  };

  const handleChangeForTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setRequestMessage({ ...requestMessage, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const handleResetForm = () => {
      if (messageState.isSuccess) {
        setRequestMessage({
          type: "",
          name: "",
          email: "",
          phoneNumber: "",
          title: "",
          message: "",
        });

        setMessageState({
          isError: messageState.isError,
          isSuccess: false,
          message: messageState.message,
        });
      }
    };
    setInterval(handleResetForm, 5000);
  }, [messageState]);

  const handleSelectType = (type: string) => {
    setRequestMessage({ ...requestMessage, type: type });
  };

  return (
    <Wrapper>
      <form className="order-website-modal-contact__form">
        <AiOutlineCloseSquare
          className="order-website-modal__close-button"
          color="var(--color--dark)"
          onClick={onClose}
          size={30}
        />
        <p className="order-website-modal-contact__form-text">
          Send oss en forespørsel og vi svarer så raskt vi kan 🤖
        </p>
        <br />

        <div className="order-website-modal__select-container">
          <div
            className={
              !active.information
                ? "order-website-modal__select"
                : "order-website-modal__select order-website-modal__select--information"
            }
            onClick={() => {
              setActive({ information: true, ecommerce: false });
              handleSelectType("Informasjon");
            }}
          >
            <p>Informasjon</p>
            <img
              className="order-website-modal__img"
              src="/assets/icons/icon6.png"
              alt="information__icon"
            />
            <p>Pris fra 6500 ,-</p>
          </div>
          <div
            className={
              !active.ecommerce
                ? "order-website-modal__select"
                : "order-website-modal__select order-website-modal__select--ecommerce"
            }
            onClick={() => {
              setActive({ information: false, ecommerce: true });
              handleSelectType("Nettbutikk");
            }}
          >
            <p>Nettbutikk</p>
            <img
              className="order-website-modal__img"
              src="/assets/icons/icon5.png"
              alt="ecommerse__icon"
            />
            <p>Pris fra 15000 ,-</p>
          </div>
        </div>

        <input
          onChange={handleChangeForInput}
          value={requestMessage.name}
          type="text"
          name="name"
          className="contact__input"
          placeholder="Navn.."
        />
        <input
          onChange={handleChangeForInput}
          value={requestMessage.email}
          type="text"
          name="email"
          className="contact__input"
          placeholder="Epost.."
        />
        <input
          onChange={handleChangeForInput}
          value={requestMessage.phoneNumber}
          type="text"
          name="phoneNumber"
          className="contact__input"
          placeholder="Mobilnummer.."
        />
        <input
          onChange={handleChangeForInput}
          value={requestMessage.title}
          type="text"
          name="title"
          className="contact__input"
          placeholder="Tittel.."
        />

        <textarea
          onChange={handleChangeForTextArea}
          value={requestMessage.message}
          name="message"
          className="contact__input"
          placeholder="Forespørsel.."
        />
        <button
          disabled={messageState.isSuccess}
          onClick={handleSendRequest}
          className="button order-website__button"
        >
          SEND
        </button>
        {messageState.isError && (
          <ErrorMessage>{messageState.message}</ErrorMessage>
        )}

        {isLoading && <p>Sender melding..</p>}

        {messageState.isSuccess && (
          <ConfirmMessage>{messageState.message}</ConfirmMessage>
        )}
      </form>
    </Wrapper>
  );
};

export default OrderWebsiteModal;
