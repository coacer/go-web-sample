import React, { useState, FormEvent, ChangeEvent } from 'react';
import styled from 'styled-components';
import { TextField, Button, Card } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import WithLayout from '../../components/templates/WithLayout';
import { createUserFb } from '../../api/firebase';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordConfirmError, setPasswordConfirmError] = useState(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    currentEmail.length < 15 ? setEmailError(true) : setEmailError(false);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    currentPassword.length < 9
      ? setPasswordError(true)
      : setPasswordError(false);
  };

  const handlePasswordConfirmChange = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    const currentPasswordConfirm = e.target.value;
    setPasswordConfirm(currentPasswordConfirm);
    currentPasswordConfirm.length < 9
      ? setPasswordConfirmError(true)
      : setPasswordConfirmError(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return;
    }

    createUserFb(email, password)
      .then(res => {
        console.log(res.user);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <FlexCard>
      <h3>Sign up</h3>
      <form onSubmit={handleSubmit}>
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
              emailError ||
              passwordError ||
              passwordConfirmError ||
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
