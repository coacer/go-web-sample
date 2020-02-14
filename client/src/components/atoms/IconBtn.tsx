import React from 'react';
import { Icon, IconButton } from '@material-ui/core';
import styled from 'styled-components';

interface Props {
  size: number;
  icon: string;
  onClick?: () => void;
}

export type NewPostButtonProps = Props;

const NewPostButton: React.FC<Props> = ({
  size = 20,
  icon,
  onClick = null,
}: Props) => {
  return (
    <IconButton onClick={onClick}>
      <Icon style={{ fontSize: size }} color="primary">
        {icon}
      </Icon>
    </IconButton>
  );
};

export default NewPostButton;
