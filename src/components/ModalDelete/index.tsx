import { useDispatch } from "react-redux";
import { useModal } from "../../hooks/useModal";
import { deletePost } from "../../actions/deletePosts";
import { fetchPosts } from "../../actions/getPosts";
import { AppDispatch } from "../../redux/store/store";
import { ButtonContainer, Container } from "./styled";

export function ModalDelete() {
  const { toggleOpen, id } = useModal();

  const dispatch = useDispatch<AppDispatch>();

  async function handleDelete() {
    await dispatch(deletePost(Number(id)));
    toggleOpen();
    await dispatch(fetchPosts());
  }

  return (
    <Container>
      <h1>Are you sure you want to delete this item?</h1>

      <ButtonContainer>
        <button onClick={() => toggleOpen()}>Cancel</button>
        <button onClick={() => handleDelete()}>Delete</button>
      </ButtonContainer>
    </Container>
  );
}
