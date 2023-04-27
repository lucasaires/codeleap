import React from "react";
import Modal from "react-modal";
import { useModal } from "../../hooks/useModal";

Modal.setAppElement("#root");

export function ModalComponent({ children }: { children: React.ReactNode }) {
  const { open, toggleOpen, openEdit, toggleOpenEdit } = useModal();

  function handleClose() {
    if (open) toggleOpen();
    if (openEdit) toggleOpenEdit();
  }
  return (
    <div>
      <Modal
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0 ,0, 0.8)",
          },
          content: {
            background: "transparent",
            border: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
        isOpen={open || openEdit}
        onRequestClose={() => handleClose()}
      >
        {children}
      </Modal>
    </div>
  );
}
