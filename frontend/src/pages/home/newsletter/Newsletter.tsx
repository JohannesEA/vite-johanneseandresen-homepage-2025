import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Form as BootstrapForm, Container } from "react-bootstrap";
import "./newsletter.css";
import MyButton from "../../../components/button/MuButton";
import SendEmailAnimations from "../../../animations/SendAnimation";

interface FormValues {
  email: string;
}

const Newsletter: React.FC = () => {
  const [showSendAnimation, setShowSendAnimation] = useState<boolean>(false);
  const initialValues: FormValues = {
    email: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(
        "Ugyldig epost. En gyldig epost skal inneholde '@' og et domene (f.eks. 'eksempel.com')."
      )
      .required("Du må fylle inn din epost adresse."),
  });

  const onSubmit = (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    // handle form submission here
    console.log(values);
    setSubmitting(false);
    setShowSendAnimation(true);
  };

  useEffect(() => {
    if (showSendAnimation) {
      setTimeout(() => setShowSendAnimation(false), 6000);
    }
  }, [showSendAnimation]);

  return (
    <div className="newsletter">
      <h1 className="medium-margin-bottom large-margin-top">
        Meld deg på vårt nyhetsbrev
      </h1>

      <Container className="newsletter-contact-form">
        {!showSendAnimation && (
          <div className="newsletter-contact-form__title">
            <p>Skriv inn din epost-adresse og meld deg på vårt nyhetsbrev.</p>
          </div>
        )}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched, handleSubmit }) =>
            showSendAnimation ? (
              <SendEmailAnimations />
            ) : (
              <>
                {" "}
                <Form className="newsletter-contact-form__form">
                  <BootstrapForm.Group className="newsletter-contact-form__group">
                    <BootstrapForm.Label className="newsletter-contact-form__label">
                      Epost
                    </BootstrapForm.Label>
                    <Field
                      name="email"
                      type="text"
                      className={
                        "newsletter-form-control newsletter-contact-form__input" +
                        (errors.email && touched.email ? " is-invalid" : "")
                      }
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="newsletter-invalid-feedback"
                    />
                  </BootstrapForm.Group>
                  <MyButton
                    text={"Meld deg på"}
                    onPress={handleSubmit}
                    color="gold"
                  />
                </Form>
              </>
            )
          }
        </Formik>
      </Container>
    </div>
  );
};

export default Newsletter;
