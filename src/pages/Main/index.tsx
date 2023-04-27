import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ButtonContainer, ContainerHeader, Content, Header } from "./styled";
import { AppDispatch, RootState } from "../../redux/store/store";
import { PostTypes } from "../../@types/pots";
import { fetchPosts, fetchPostsFiltered } from "../../actions/getPosts";

import { Post } from "../../components/Post";
import { ViewPost } from "../../components/ViewPost";

function verifyUser(postUsername: string, currentUser: string): boolean {
  return postUsername === currentUser;
}

export function MainScreen(): JSX.Element {
  const username = localStorage.getItem("username") as string;

  const dispatch = useDispatch<AppDispatch>();
  const postData = useSelector<RootState>(
    (state) => state.posts.data
  ) as PostTypes;

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  function handleNextPosts() {
    dispatch(fetchPostsFiltered(postData.next));
  }

  function handlePreviousPosts() {
    dispatch(fetchPostsFiltered(postData.previous));
  }

  return (
    <>
      <ContainerHeader>
        <Header>
          <h1>CodeLeap Network</h1>
        </Header>
      </ContainerHeader>
      <Content>
        <Post title="What’s on your mind?" />

        {postData?.results?.map((post) => (
          <ViewPost
            key={post.id}
            id={post.id}
            title={post.title}
            created_datetime={post.created_datetime}
            username={post.username}
            content={post.content}
            isMyPost={verifyUser(post.username, username)}
          />
        ))}

        <ButtonContainer>
          <button disabled={!postData.previous} onClick={handlePreviousPosts}>
            previous
          </button>
          <button disabled={!postData.next} onClick={handleNextPosts}>
            next
          </button>
        </ButtonContainer>
      </Content>
    </>
  );
}
