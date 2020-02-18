import React, { useState, FormEvent } from 'react';
import WithLayout from '../../components/templates/WithLayout';
import firebase from '../../plugins/firebase';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    firebase
      .app()
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res.user);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(e): void => setEmail(e.target.value)} />
      <input onChange={(e): void => setPassword(e.target.value)} />
      <input onChange={(e): void => setPasswordConfirm(e.target.value)} />
      <button type="submit">Sign up</button>
    </form>
  );
};

export default WithLayout(Signup);
