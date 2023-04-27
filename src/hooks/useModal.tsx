/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useContext, useState } from "react";

type ModalContextProps = {
  open: boolean;
  toggleOpen: () => void;
  id: number;
  toggleId: (id: number) => void;
  openEdit: boolean;
  toggleOpenEdit: () => void;
  idEdit: number;
  toggleIdEdit: (idEdit: number) => void;
};

export const ModalContext = createContext<ModalContextProps>({
  open: false,
  toggleOpen: () => {},
  id: 0,
  toggleId: () => {},
  openEdit: false,
  toggleOpenEdit: () => {},
  idEdit: 0,
  toggleIdEdit: () => {},
});

export function ModalProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [id, setId] = useState<number>(0);
  const [idEdit, setIdEdit] = useState<number>(0);

  function toggleOpen() {
    setOpen((prevOpen) => !prevOpen);
  }

  function toggleId(id: number) {
    setId(id);
  }

  function toggleOpenEdit() {
    setOpenEdit((prevOpenEdit) => !prevOpenEdit);
  }

  function toggleIdEdit(idEdit: number) {
    setIdEdit(idEdit);
  }

  return (
    <ModalContext.Provider
      value={{
        open,
        toggleOpen,
        id,
        toggleId,
        openEdit,
        toggleOpenEdit,
        idEdit,
        toggleIdEdit,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const {
    open,
    toggleOpen,
    id,
    toggleId,
    openEdit,
    toggleOpenEdit,
    idEdit,
    toggleIdEdit,
  } = useContext(ModalContext);

  return {
    open,
    toggleOpen,
    id,
    toggleId,
    openEdit,
    toggleOpenEdit,
    idEdit,
    toggleIdEdit,
  };
}
