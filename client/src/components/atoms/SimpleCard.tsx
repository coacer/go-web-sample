import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

interface Props {
  title: string;
  body: string;
  subText1?: string;
  subText2?: string;
  mainBtn?: JSX.Element;
  rightBtn?: JSX.Element;
}

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  pos: {
    marginBottom: 12,
  },
});

const SimpleCard: React.FC<Props> = ({
  title,
  body,
  subText1,
  subText2,
  mainBtn,
  rightBtn,
}: Props) => {
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
            {subText1 && (
              <Typography className={classes.pos} color="textSecondary">
                {subText1}
              </Typography>
            )}
            {subText2 && (
              <Typography className={classes.pos} color="textSecondary">
                {subText2}
              </Typography>
            )}
          </CardContent>
          <CardActions>{mainBtn}</CardActions>
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
