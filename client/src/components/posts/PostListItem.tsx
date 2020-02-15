import React, { useContext } from 'react';
import AppContext from '../../contexts';
import { Post } from '../../interfaces';
import SimpleCard from '../atoms/SimpleCard';
import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import { deletePost } from '../../store/actions/posts';
import { deletePostAPI } from '../../api/posts';

interface Props {
  post: Post;
}

export type PostListItemProps = Props;

const PostListItem: React.FC<Props> = ({ post }: Props) => {
  const { dispatch } = useContext(AppContext);

  const handleClick = (id: number): void => {
    deletePostAPI(id)
      .then(res => dispatch(deletePost(id)))
      .catch(e => console.log(e.message));
  };

  return (
    <Wrapper key={post.id}>
      <SimpleCard
        title={post.title}
        body={post.body}
        rightBtn={
          <IconButton onClick={e => handleClick(post.id)}>
            <DeleteRoundedIcon color="secondary" fontSize="large" />
          </IconButton>
        }
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 50%;
  margin: 0 auto 20px auto;
`;

export default PostListItem;
