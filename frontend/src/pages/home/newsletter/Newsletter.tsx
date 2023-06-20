import React from "react";
import "./newsletter.css";
import NewsletterSubscribe from "../../../components/newsletter-form/NewsletterSubscribe";

const Newsletter: React.FC = () => {
  return (
    <div className="newsletter">
      <h1 className="medium-margin-bottom large-margin-top">
        Meld deg på vårt nyhetsbrev
      </h1>
      <NewsletterSubscribe />
    </div>
  );
};

export default Newsletter;
