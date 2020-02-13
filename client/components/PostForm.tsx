import { FormEvent } from 'react';

interface Props {
  onSubmit: (e: FormEvent) => void
}

const PostForm: React.FC<Props> = ({ onSubmit }) => {

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="title">Title</label>
      <input name="title" id="title" type="text" /><br/>
      <label htmlFor="body">Body</label>
      <input name="body" id="body" type="text" /><br/>
      <input type="submit" value="投稿"/>
    </form>
  );
};

export default PostForm;
