import { ReactNode } from "react";
import "./Modal.scss";

interface ModalProps {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ title, isOpen, onClose, children }: ModalProps) => {
  const modalClasses = isOpen ? "modal active" : "modal";
  const overlayClasses = isOpen ? "modal-overlay active" : "modal-overlay";

  return (
    <div className={overlayClasses} onClick={onClose}>
      <div className={modalClasses} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h5 className="modal-title">{title ? title : ""}</h5>
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
