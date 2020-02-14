import React, { FormEvent, useState, ChangeEvent, Dispatch } from 'react';
import { addPost, PostAction } from '../../store/actions/posts';
import { addPostAPI } from '../../api/posts';
import { TextField, Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import styled from 'styled-components';

interface Props {
  dispatch: Dispatch<PostAction>;
  handleClose: () => void;
}

const PostForm: React.FC<Props> = ({ dispatch, handleClose }: Props) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const post = await addPostAPI({ title, body });
    dispatch(addPost(post));
    handleClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="standard-basic"
        label="Title"
        fullWidth
        onChange={(e: ChangeEvent<HTMLInputElement>): void =>
          setTitle(e.target.value)
        }
      />
      <br />
      <TextField
        id="standard-basic"
        label="Body"
        fullWidth
        onChange={(e: ChangeEvent<HTMLInputElement>): void =>
          setBody(e.target.value)
        }
      />
      <RightFlex>
        <Button
          size="large"
          endIcon={<Icon>send</Icon>}
          type="submit"
          color="primary"
        >
          Send
        </Button>
      </RightFlex>
    </form>
  );
};

const RightFlex = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
`;

export default PostForm;
