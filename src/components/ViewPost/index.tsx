import { Container, Content, Header, Icons, InfoUser } from "./styled";
import { TbTrashXFilled } from "react-icons/tb";
import { BiEdit } from "react-icons/bi";
import { ModalComponent } from "../Modal";
import { useModal } from "../../hooks/useModal";
import { ModalDelete } from "../ModalDelete";
import { ModalEdit } from "../ModalEdit";
import { getTime } from "../../utils/getTime";

type ViewPostProps = {
  id: number;
  title: string;
  username: string;
  created_datetime: Date;
  content: string;
  isMyPost?: boolean;
};

export function ViewPost({
  id,
  title,
  content,
  username,
  created_datetime,
  isMyPost = false,
}: ViewPostProps) {
  const { open, toggleOpen, toggleId, openEdit, toggleOpenEdit, toggleIdEdit } =
    useModal();

  let data = {
    id: 0,
    title: "",
    content: "",
    username: "",
  };
  function handleModalDelete() {
    toggleId(id);
    toggleOpen();
  }

  function handleModalEdit() {
    toggleIdEdit(id);
    data = {
      id,
      title,
      content,
      username,
    };
    toggleOpenEdit();
  }

  return (
    <Container>
      <Header>
        <h1>{title}</h1>

        {isMyPost && (
          <Icons>
            <TbTrashXFilled size={24} onClick={handleModalDelete} />
            <BiEdit size={24} onClick={handleModalEdit} />
          </Icons>
        )}
      </Header>

      <InfoUser>
        <h4>{username}</h4>

        <span>
          {getTime(created_datetime)?.info || "few seconds"}{" "}
          {getTime(created_datetime)?.nickname || "" + " ago"}
        </span>
      </InfoUser>

      <Content>{content}</Content>
      {open && (
        <ModalComponent>
          <ModalDelete />
        </ModalComponent>
      )}
      {openEdit && (
        <ModalComponent>
          <ModalEdit
          />
        </ModalComponent>
      )}
    </Container>
  );
}
