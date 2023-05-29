import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Form as BootstrapForm, Container } from "react-bootstrap";
import "./contact-form.css";
import MyButton from "../button/MuButton";
import SendEmailAnimations from "../../animations/SendAnimation";

interface FormValues {
  email: string;
  title: string;
  description: string;
}

const ContactForm: React.FC = () => {
  const [showSendAnimation, setShowSendAnimation] = useState<boolean>(false);
  const initialValues: FormValues = {
    email: "",
    title: "",
    description: "",
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
    <Container className="contact-form large-margin-bottom">
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
          )
        }
      </Formik>
    </Container>
  );
};

export default ContactForm;
