import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { TextField, Button, Card } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import WithLayout from '../../components/templates/WithLayout';
import { createUserFb } from '../../api/firebase';
import { addUserAPI } from '../../api/users';

const Signup: React.FC = () => {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordConfirmError, setPasswordConfirmError] = useState(false);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const currentName = e.target.value;
    setName(currentName);
    currentName.length <= 0 ? setNameError(true) : setNameError(false);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    currentEmail.length < 10 ? setEmailError(true) : setEmailError(false);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    currentPassword.length < 6
      ? setPasswordError(true)
      : setPasswordError(false);
  };

  const handlePasswordConfirmChange = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    const currentPasswordConfirm = e.target.value;
    setPasswordConfirm(currentPasswordConfirm);
    currentPasswordConfirm.length < 6
      ? setPasswordConfirmError(true)
      : setPasswordConfirmError(false);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return;
    }

    try {
      const { user } = await createUserFb(email, password);
      const data = await addUserAPI({ uid: user.uid, name, email });
      console.log(data);
      router.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <FlexCard>
      <h3>Sign up</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          label="Name"
          fullWidth
          error={nameError}
          onChange={handleNameChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Email"
          fullWidth
          error={emailError}
          onChange={handleEmailChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Password"
          type="password"
          fullWidth
          error={passwordError}
          onChange={handlePasswordChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Password Confirmation"
          type="password"
          fullWidth
          error={passwordConfirmError}
          onChange={handlePasswordConfirmChange}
        />
        <RightFlex>
          <Button
            size="large"
            endIcon={<Icon>send</Icon>}
            type="submit"
            color="primary"
            disabled={
              nameError ||
              emailError ||
              passwordError ||
              passwordConfirmError ||
              name.length === 0 ||
              email.length === 0 ||
              password.length === 0 ||
              passwordConfirm.length === 0
            }
          >
            Send
          </Button>
        </RightFlex>
      </form>
    </FlexCard>
  );
};

const FlexCard = styled(Card)`
  padding: 50px;
  width: 35%;
  margin 0 auto;
`;

const RightFlex = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
`;

export default WithLayout(Signup);
