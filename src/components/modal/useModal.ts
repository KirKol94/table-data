import { useCallback, useEffect } from "react";

interface IUseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface IModalData {
  modalElement: HTMLDivElement;
  handleModalClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  handleModalKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void;
}

export const useModal = ({ onClose, isOpen }: IUseModalProps): IModalData => {
  const modalRoot = document.getElementById("modal-root");
  const modalElement = document.createElement("div");

  const handleModalClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
  };

  const handleCloseOnEsc = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  const handleModalKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const modalWrapper = event.currentTarget;

    if (event.key === "Tab" && modalWrapper) {
      const modalElements = modalWrapper.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      const firstElement = modalElements[0];
      const lastElement = modalElements[modalElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      modalRoot?.appendChild(modalElement);
      window.addEventListener("keydown", handleCloseOnEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleCloseOnEsc);
    };
  }, [isOpen, modalElement, modalRoot, handleCloseOnEsc]);

  return { modalElement, handleModalClick, handleModalKeyDown };
};
