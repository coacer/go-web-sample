import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

interface Props {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  btn: JSX.Element;
  show: JSX.Element;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      width: '70%',
      height: '500px',
    },
  })
);

const TransitionsModal: React.FC<Props> = ({
  open,
  handleOpen,
  handleClose,
  btn,
  show,
}: Props) => {
  const classes = useStyles();

  return (
    <div>
      <div onClick={handleOpen}>{btn}</div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div id="transition-modal-description">{show}</div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default TransitionsModal;
