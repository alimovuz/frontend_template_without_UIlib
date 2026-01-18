  /* Modal.tsx */
  import { useEffect } from "react";
  import { createPortal } from "react-dom";
  import type { ModalProps } from "./types";
  import "./style.css"

  const Modal: React.FC<ModalProps> = ({ isOpen, close, className = "", children, header }) => {
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }

      return () => {
        document.body.style.overflow = "auto";
      };
    }, [isOpen]);

    if (!isOpen) return null;

    return createPortal(
      <>
        <div className="backdrop">
          <div className={`custom-modal bg-white ${className}`}>
            <div className="modal-header">
              {header && (
                <h2 className="font-interMedium text-xl">{header}</h2>
              )}
              <button className="close-btn" onClick={close}>
              close
              </button>
            </div>
            <div className="modal-content">{children}</div>
          </div>
        </div>
      </>,
      document.getElementById("modal-root") as HTMLElement
    );
  };

  export default Modal;