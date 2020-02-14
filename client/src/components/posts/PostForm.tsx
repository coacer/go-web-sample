import { FormEvent, useState, ChangeEvent, Dispatch } from 'react';
import { addPost, PostAction } from '../../store/actions/posts';
import { addPostAPI } from '../../api/posts';

interface Props {
  dispatch: Dispatch<PostAction>;
}

const PostForm: React.FC<Props> = ({ dispatch }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const post = await addPostAPI({ title, body });
    dispatch(addPost(post));
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        onChange={(e: ChangeEvent<HTMLInputElement>): void =>
          setTitle(e.target.value)
        }
        value={title}
        id="title"
        type="text"
      />
      <br />
      <label htmlFor="body">Body</label>
      <input
        onChange={(e: ChangeEvent<HTMLInputElement>): void =>
          setBody(e.target.value)
        }
        value={body}
        id="body"
        type="text"
      />
      <br />
      <input type="submit" value="投稿" />
    </form>
  );
};

export default PostForm;
