import { useDispatch } from "react-redux";
import { useModal } from "../../hooks/useModal";
import { editPost } from "../../actions/editPosts";
import { AppDispatch } from "../../redux/store/store";
import { Post } from "../Post";
import { ButtonContainer, Container } from "./styled";
import { useState } from "react";
import { fetchPosts } from "../../actions/getPosts";

export function ModalEdit() {
  const { toggleOpenEdit, idEdit } = useModal();
  const dispatch = useDispatch<AppDispatch>();
  const [title, setTitleEdit] = useState("");
  const [content, setContentEdit] = useState("");

  async function handleEdit() {
    if (title && content) {
      await dispatch(editPost({ id: idEdit, content, title }));
      toggleOpenEdit();
      await dispatch(fetchPosts());
    }
  }
  return (
    <Container>
      <Post
        title="Edit item"
        isEdited
        setTitleEdit={setTitleEdit}
        setContentEdit={setContentEdit}
      />

      <ButtonContainer>
        <button onClick={() => toggleOpenEdit()}>Cancel</button>
        <button
          disabled={title.length < 1 || content.length < 1}
          onClick={() => handleEdit()}
        >
          Save
        </button>
      </ButtonContainer>
    </Container>
  );
}
