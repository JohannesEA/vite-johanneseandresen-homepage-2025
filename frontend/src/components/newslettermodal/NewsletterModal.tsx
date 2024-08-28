import { useState } from "react";
import { Modal } from "react-bootstrap";
import NewsletterSubscribe from "../../components/newsletter-form/NewsletterSubscribe";
import "./NewsletterModal.css";

const NewsletterModal = () => {
  const [isOpen, setIsOpen] = useState(
    localStorage.getItem("modalClosed") === null
  );

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("modalClosed", "true");
  };

  return (
    <Modal className="modal__container" show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton />
      <Modal.Body>
        <NewsletterSubscribe />
      </Modal.Body>
    </Modal>
  );
};

export default NewsletterModal;
