import MailchimpSubscribe from "react-mailchimp-subscribe";
import { ChangeEvent, FormEvent, useReducer, useEffect } from "react";
import { Form as BootstrapForm } from "react-bootstrap";
import "./Newsletter.css";

const url =
  "https://hotmail.us21.list-manage.com/subscribe/post?u=ec0e3a9b8ba9b4a0421eb48f4&amp;id=6d473d44a3&amp;f_id=00645ee1f0";

type State = {
  email: string;
  status: string;
  error: string;
};

type Action =
  | { type: "setEmail"; payload: string }
  | { type: "setStatus"; payload: string }
  | { type: "setError"; payload: string };

const initialState: State = { email: "", status: "", error: "" };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "setEmail":
      return { ...state, email: action.payload };
    case "setStatus":
      return { ...state, status: action.payload };
    case "setError":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const validateEmail = (email: string): boolean => {
  const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return reg.test(email);
};

const NewsletterSubscribe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.status === "success") {
      setTimeout(() => {
        dispatch({ type: "setEmail", payload: "" });
        dispatch({ type: "setError", payload: "" });
      }, 3000);
    }
  }, [state.status]);

  const getMessage = (
    status: "error" | "success" | "sending" | null
  ): string => {
    switch (status) {
      case "error":
        return "Oops! En feil oppstod. Vennligst prøv igjen.";
      case "success":
        return "Takk for at du abonnerer! Sjekk e-posten din for bekreftelse.";
      case "sending":
        return "Behandler abonnementet ditt...";
      case null:
        return "Klar til å abonnere? Skriv inn e-posten din nedenfor.";
      default:
        return "Ukjent status. Vennligst prøv igjen.";
    }
  };

  const onSubmit = (e: FormEvent, subscribe: any) => {
    e.preventDefault();
    if (validateEmail(state.email)) {
      dispatch({ type: "setError", payload: "" });
      subscribe({ EMAIL: state.email });
      dispatch({ type: "setStatus", payload: "success" });
    } else {
      dispatch({
        type: "setError",
        payload: "Vennligst skriv inn en gyldig e-postadresse",
      });
      dispatch({ type: "setStatus", payload: "error" });
    }
  };

  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <BootstrapForm
          className="newsletter__form"
          onSubmit={(e: FormEvent) => onSubmit(e, subscribe)}
          method="post"
        >
          <h2 className="newsletter__title">
            Abonner på vårt nyhetsbrev, og vær den første til å oppdage
            sesongens vakreste blomster direkte fra vår gård!
          </h2>
          <BootstrapForm.Label className="newsletter__label">
            E-post
          </BootstrapForm.Label>
          <BootstrapForm.Control
            className="newsletter__input"
            type="email"
            name="EMAIL"
            value={state.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              dispatch({ type: "setEmail", payload: e.target.value })
            }
            placeholder="Skriv inn din epost"
          />
          {state.error && <StatusMessage message={state.error} type="error" />}
          {status && (
            <StatusMessage message={getMessage(status)} type={status} />
          )}
          <BootstrapForm.Control
            className="newsletter__submit"
            type="submit"
            value="Abonner"
          />
        </BootstrapForm>
      )}
    />
  );
};

const StatusMessage = ({
  message,
  type,
}: {
  message: string;
  type: string;
}) => (
  <div className={`newsletter__status newsletter__status--${type}`}>
    {message}
  </div>
);

export default NewsletterSubscribe;
