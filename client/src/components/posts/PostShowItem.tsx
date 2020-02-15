import React from 'react';
import { Post } from '../../interfaces';
import SimpleCard from '../atoms/SimpleCard';

interface Props {
  post: Post;
}

export type PostShowItemProps = Props;

const PostShowItem: React.FC<Props> = ({ post }: Props) => {
  return (
    <SimpleCard
      title={post.title}
      body={post.body}
      subText1={`created: ${post.createdAt}`}
      subText2={`updated: ${post.updatedAt}`}
    />
  );
};

export default PostShowItem;
