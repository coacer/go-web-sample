import React from 'react';
import { Post } from '../../interfaces';
import SimpleCard from '../atoms/SimpleCard';
import styled from 'styled-components';

interface Props {
  post: Post;
}

export type PostListItemProps = Props;

const PostListItem: React.FC<Props> = ({ post }: Props) => {
  return (
    <Wrapper key={post.id}>
      <SimpleCard title={post.title} body={post.body} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 50%;
  margin: 0 auto 20px auto;
`;

export default PostListItem;
