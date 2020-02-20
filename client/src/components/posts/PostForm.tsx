import React, { useContext, useState, FormEvent, ChangeEvent } from 'react';
import { PostsContext } from '../../contexts';
import { addPost } from '../../store/actions/posts';
import { addPostAPI } from '../../api/posts';
import { TextField, Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import styled from 'styled-components';

interface Props {
  handleClose: () => void;
}

const PostForm: React.FC<Props> = ({ handleClose }: Props) => {
  const { postsDispatch } = useContext(PostsContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [bodyError, setBodyError] = useState(false);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const currentTitle = e.target.value;
    setTitle(currentTitle);
    currentTitle.length < 5 ? setTitleError(true) : setTitleError(false);
  };

  const handleBodyChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const currentBody = e.target.value;
    setBody(currentBody);
    currentBody.length < 8 ? setBodyError(true) : setBodyError(false);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    try {
      e.preventDefault();
      const post = await addPostAPI({ title, body });
      postsDispatch(addPost(post));
      handleClose();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="standard-basic"
        label="Title"
        fullWidth
        error={titleError}
        onChange={handleTitleChange}
      />
      <br />
      <TextField
        id="standard-basic"
        label="Body"
        fullWidth
        error={bodyError}
        onChange={handleBodyChange}
      />
      <RightFlex>
        <Button
          size="large"
          endIcon={<Icon>send</Icon>}
          type="submit"
          color="primary"
          disabled={
            titleError || bodyError || title.length === 0 || body.length === 0
          }
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
