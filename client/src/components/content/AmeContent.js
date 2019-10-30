import React from 'react';
import { Content } from 'mui-layout';
import Form from '../forms/Form';
import Modules from '../modules/Modules';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';
import FloatingActionButtons from '../modules/AddButton';
import ContainedButtons from '../modules/Button';


const useStyles = makeStyles(theme => ({
  flexContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flex: 'auto',
  }
}));

const AmeContent = () => {
  const classes = useStyles();

  return (
    <div>
      <Content>
        <Container className={classes.flexContainer}>
          <Modules/>
        </Container>

        {ContainedButtons()}

      </Content>
    </div>
  );
};

export default AmeContent;