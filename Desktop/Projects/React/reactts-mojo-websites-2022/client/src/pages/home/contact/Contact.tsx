import { useState, MouseEvent, ChangeEvent, useEffect } from "react";
import { ConfirmMessage, ErrorMessage, Wrapper } from "./Contact.styles";
import { send } from "emailjs-com";

const Contact = () => {
  const [messageState, setMessageState] = useState({
    isError: false,
    isSuccess: false,
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  //Request message state => the userrequest that will get validated and sent to our mailbox
  const [requestMessage, setRequestMessage] = useState({
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

  console.log(requestMessage);
  return (
    <Wrapper id="contact">
      <h2 className="contact__title">KONTAKT OSS</h2>
      <div className="contact-info__container">
        <p className="contact__title">+47 99509035</p>
        <p className="contact__title">mojo.websites1@gmail.com</p>
      </div>

      <form className="contact__form">
        <h4>Send oss en mail</h4>
        <br></br>
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
          placeholder="Navn.."
        />
        <button
          disabled={messageState.isSuccess}
          onClick={handleSendRequest}
          className="button contact__button"
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

export default Contact;
