import MailchimpSubscribe from "react-mailchimp-subscribe";
import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import "./Newsletter.css";
import { Form as BootstrapForm } from "react-bootstrap";

const url =
  "https://hotmail.us21.list-manage.com/subscribe/post?u=ec0e3a9b8ba9b4a0421eb48f4&amp;id=6d473d44a3&amp;f_id=00645ee1f0";

const NewsletterSubscribe = () => {
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [sendStatus, setSendStatus] = useState<string>("");

  const getMessage = (
    status: "error" | "success" | "sending" | null
  ): string => {
    switch (status) {
      case "error":
        return "En feil oppstod under påmelding. Prøv igjen.";
      case "success":
        return "Takk for at du abonnerer! Sjekk e-posten din for bekreftelse.";
      case "sending":
        return "Sender inn din påmelding...";
      case null:
        return "Klar for å abonnere. Fyll inn din e-post nedenfor.";
      default:
        return "Ukjent status. Prøv igjen.";
    }
  };

  // Email validation
  const validateEmail = (email: string) => {
    // Regular expression for email validation
    const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return reg.test(email);
  };

  console.log(sendStatus);

  useEffect(() => {
    if (sendStatus === "success") {
      setTimeout(() => {
        setEmail("");
        setEmailError("");
      }, 3000);
    }
  }, [sendStatus]);

  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => {
        return (
          <form
            className="newsletter__form"
            onSubmit={(e: FormEvent) => {
              e.preventDefault();
              if (validateEmail(email)) {
                setEmailError("");
                subscribe({ EMAIL: email });
                setSendStatus("success");
              } else {
                setEmailError("Vennligst skriv inn en gyldig e-post");
                setSendStatus("error");
              }
            }}
            method="post"
          >
            <h2 className="newsletter__title">
              Vær den første til å oppdage sesongens vakreste blomster direkte
              fra vår gård
            </h2>
            <BootstrapForm.Label className="newsletter__label">
              Epost
            </BootstrapForm.Label>

            <input
              className="newsletter__input"
              type="email"
              name="EMAIL"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
                setEmailError("");
              }}
              placeholder="Skriv inn din epost"
            />
            {emailError && (
              <div className="newsletter__status newsletter__status--error">
                {emailError}
              </div>
            )}
            {status === "sending" && (
              <div className="newsletter__status newsletter__status--sending">
                {getMessage(status)}
              </div>
            )}
            {status === "error" && (
              <div className="newsletter__status newsletter__status--error">
                {getMessage(status)}
              </div>
            )}
            {status === "success" && (
              <div className="newsletter__status newsletter__status--success">
                {getMessage(status)}
              </div>
            )}

            <input
              className="newsletter__submit"
              type="submit"
              value="Meld deg på"
            />
          </form>
        );
      }}
    />
  );
};

export default NewsletterSubscribe;
