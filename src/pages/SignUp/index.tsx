import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { fetchPosts } from "../../actions/getPosts";
import { AppDispatch } from "../../redux/store/store";
import { useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  Container,
  Description,
  Modal,
  Title,
} from "./styled";

export function SignUp() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();
  const handleSignUp = async () => {
    if (username.length > 0) {
      await dispatch(fetchPosts());

      localStorage.setItem("username", username);
      navigate("/main");
    }
  };

  return (
    <Container>
      <Modal>
        <Title>Welcome to CodeLeap network!</Title>
        <Description>Please enter your username</Description>
        <Input onChange={(e) => setUsername(e.target.value)} />
        <ButtonContainer>
          <div>
            <Button disabled={username.length < 1} onClick={handleSignUp}>
              ENTER
            </Button>
          </div>
        </ButtonContainer>
      </Modal>
    </Container>
  );
}

export default SignUp;
