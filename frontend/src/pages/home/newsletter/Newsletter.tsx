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
  };

  useEffect(() => {
    if (showSendAnimation) {
      setTimeout(() => setShowSendAnimation(false), 6000);
    }
  }, [showSendAnimation]);

  return (
    <div className="newsletter">
      <h1 className="large-margin-bottom">Meld deg på vårt nyhetsbrev</h1>

      <Container className="contact-form">
        {!showSendAnimation && (
          <h3>Skriv inn din epost-adresse og meld deg på vårt nyhetsbrev</h3>
        )}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) =>
            showSendAnimation ? (
              <SendEmailAnimations />
            ) : (
              <>
                {" "}
                <Form className="contact-form__form">
                  <BootstrapForm.Group className="contact-form__group">
                    <BootstrapForm.Label className="contact-form__label">
                      Epost
                    </BootstrapForm.Label>
                    <Field
                      name="email"
                      type="text"
                      className={
                        "form-control contact-form__input" +
                        (errors.email && touched.email ? " is-invalid" : "")
                      }
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="invalid-feedback"
                    />
                  </BootstrapForm.Group>
                  <MyButton
                    text={"Meld deg på"}
                    onPress={() => setShowSendAnimation(true)}
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
