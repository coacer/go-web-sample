import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

interface Props {
  title: string;
  body: string;
  rightBtn?: JSX.Element;
}

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});

const SimpleCard: React.FC<Props> = ({ title, body, rightBtn }: Props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Flex>
        <div>
          <CardContent>
            <Typography variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" component="p">
              {body}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </div>
        {rightBtn && <CardActions>{rightBtn}</CardActions>}
      </Flex>
    </Card>
  );
};

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default SimpleCard;
