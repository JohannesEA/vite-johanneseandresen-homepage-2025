import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Form as BootstrapForm, Container } from "react-bootstrap";
import "./contact-form.css";
import MyButton from "../button/MuButton";
import SendEmailAnimations from "../../animations/SendAnimation";
import ErrorAnimation from "../../animations/ErrorAnimation"; // Assuming this is the error animation component
import { send } from "emailjs-com";

interface FormValues {
  email: string;
  title: string;
  description: string;
}

const ContactForm: React.FC = () => {
  const [showSendAnimation, setShowSendAnimation] = useState<boolean>(false);
  const [showErrorAnimation, setShowErrorAnimation] = useState<boolean>(false);

  const initialValues: FormValues = {
    email: "",
    title: "",
    description: "",
  };

  const handleSendMail = (values: any, resetForm: () => void): void => {
    setShowSendAnimation(true);
    send(
      "service_y2fxe3s",
      "template_235aqmb",
      values,
      "jYJcd4xVij8uUuT8G"
    ).then(function (response) {
      if (response.status === 200) {
        setShowSendAnimation(true);
        resetForm();
      } else {
        setShowErrorAnimation(true);
      }
    });
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(
        "Ugyldig epost. En gyldig epost skal inneholde '@' og et domene (f.eks. 'eksempel.com')."
      )
      .required("Du må fylle inn din epost adresse."),
    title: Yup.string()
      .min(5, "Tittelen må være minst 5 tegn lang.")
      .max(50, "Tittelen kan ikke være mer enn 50 tegn lang.")
      .required("Du må fylle inn tittel."),
    description: Yup.string()
      .min(20, "Meldingen må være minst 20 tegn lang.")
      .max(500, "Meldingen kan ikke være mer enn 500 tegn lang.")
      .required("Du må skrive en melding."),
  });

  useEffect(() => {
    if (showSendAnimation) {
      setTimeout(() => setShowSendAnimation(false), 6000);
    }
  }, [showSendAnimation]);

  useEffect(() => {
    if (showErrorAnimation) {
      setTimeout(() => setShowErrorAnimation(false), 3000);
    }
  }, [showErrorAnimation]);

  return (
    <Container className="contact-form large-margin-bottom">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => handleSendMail(values, resetForm)}
      >
        {({ errors, touched, handleSubmit }) => {
          if (showErrorAnimation) {
            return (
              <ErrorAnimation text="Det har skjedd en feil. Prøv igjen." />
            );
          } else if (showSendAnimation) {
            return <SendEmailAnimations />;
          } else {
            return (
              <>
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
                  <BootstrapForm.Group className="contact-form__group">
                    <BootstrapForm.Label className="contact-form__label">
                      Tittel
                    </BootstrapForm.Label>
                    <Field
                      name="title"
                      type="text"
                      className={
                        "form-control contact-form__input" +
                        (errors.title && touched.title ? " is-invalid" : "")
                      }
                    />
                    <ErrorMessage
                      name="title"
                      component="div"
                      className="invalid-feedback"
                    />
                  </BootstrapForm.Group>
                  <BootstrapForm.Group className="contact-form__group">
                    <BootstrapForm.Label className="contact-form__label">
                      Melding
                    </BootstrapForm.Label>
                    <Field
                      name="description"
                      as="textarea"
                      className={
                        "form-control contact-form__input" +
                        (errors.description && touched.description
                          ? " is-invalid"
                          : "")
                      }
                    />
                    <ErrorMessage
                      name="description"
                      component="div"
                      className="invalid-feedback"
                    />
                  </BootstrapForm.Group>
                  <MyButton text={"Send melding"} onPress={handleSubmit} />
                </Form>
              </>
            );
          }
        }}
      </Formik>
    </Container>
  );
};

export default ContactForm;
