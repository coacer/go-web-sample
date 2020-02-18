import React from 'react';
import { Post } from '../../interfaces';
import PostListItem from './PostListItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

interface Props {
  posts: Post[];
}

export type PostListProps = Props;

const PostList: React.FC<Props> = ({ posts }: Props) => {
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
