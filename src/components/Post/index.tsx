/* eslint-disable @typescript-eslint/no-empty-function */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store/store";
import { Button } from "../Button";
import { Input } from "../Input";
import { ButtonContainer, Container, Content, Header } from "./styled";
import { createPost } from "../../actions/postPosts";
import { fetchPosts } from "../../actions/getPosts";

type PostProps = {
  title: string;
  isEdited?: boolean;
  setTitleEdit?: (title: string) => void;
  setContentEdit?: (content: string) => void;
};

export function Post({
  title,
  isEdited = false,
  setContentEdit = () => {},
  setTitleEdit = () => {},
}: PostProps) {
  const [titleBody, setTitleBody] = useState("");
  const [contentBody, setContentBody] = useState("");
  const username = localStorage.getItem("username") as string;

  const dispatch = useDispatch<AppDispatch>();

  const debounce = (func: any, timeout = 1000) => {
    let timer: any;
    return (...args: any) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, timeout);
    };
  };

  const handleTitle = (t: string) => {
    setTitleBody(t);
    setTitleEdit(t);
  };

  const handleContent = (c: string) => {
    setContentBody(c);
    setContentEdit(c);
  };

  const handleSubmit = async () => {
    const data = {
      title: titleBody,
      content: contentBody,
      username,
    };
    await dispatch(createPost(data));
    await dispatch(fetchPosts());

    setTitleBody("");
    setContentBody("");
  };

  return (
    <Container isEdited={isEdited}>
      <Header>{title}</Header>

      <Content>
        <h4>Title</h4>
        <Input
          value={titleBody}
          onChange={(e) => debounce(handleTitle(e.target.value))}
        />

        <h4>Content</h4>

        <textarea
          value={contentBody}
          onChange={(e) => handleContent(e.target.value)}
        ></textarea>
        {!isEdited && (
          <ButtonContainer>
            <div>
              <Button
                disabled={titleBody.length < 1 || contentBody.length < 1}
                onClick={handleSubmit}
              >
                Create
              </Button>
            </div>
          </ButtonContainer>
        )}
      </Content>
    </Container>
  );
}
