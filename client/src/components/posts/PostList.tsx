import React, { useContext } from 'react';
import PostListItem from './PostListItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { PostsContext } from '../../contexts';

const PostList: React.FC = () => {
  const { posts } = useContext(PostsContext);

  return (
    <FadeWrapper>
      {posts.map(post => (
        <CSSTransition key={post.id} timeout={500} classNames="fade">
          <PostListItem post={post} />
        </CSSTransition>
      ))}
    </FadeWrapper>
  );
};

const FadeWrapper = styled(TransitionGroup)`
  .fade-enter {
    opacity: 0;
    transform: translate(-100px);
  }

  .fade-enter-active {
    opacity: 1;
    transform: translate(0);
    transition: 0.5s ease;
  }

  .fade-exit {
    opacity: 1;
    transform: translate(0);
    transition: 0.5s ease;
  }

  .fade-exit-active {
    opacity: 0;
    transform: translate(100px);
  }
`;

export default PostList;
