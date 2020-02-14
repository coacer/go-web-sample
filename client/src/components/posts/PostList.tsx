import React from 'react';
import { Post } from '../../interfaces';
import PostListItem from './PostListItem';

interface Props {
  posts: Post[];
}

export type PostListProps = Props;

const PostList: React.FC<Props> = ({ posts }: Props) => {
  return (
    <>
      {posts.map(post => (
        <PostListItem key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
