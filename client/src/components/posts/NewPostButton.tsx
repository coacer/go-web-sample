import React from 'react';
import { Icon, IconButton } from '@material-ui/core';
import styled from 'styled-components';

interface Props {
  onClick: () => void;
}

export type NewPostButtonProps = Props;

const NewPostButton: React.FC<Props> = ({ onClick }: Props) => {
  return (
    <Wrapper>
      <IconButton onClick={onClick}>
        <Icon style={{ fontSize: 50 }} color="primary">
          add_circle
        </Icon>
      </IconButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 50px;
  left: 50px;
`;

export default NewPostButton;
