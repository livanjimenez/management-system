import React from 'react'; 
import { makeStyles } from'@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
}));

const SignUp = ({ loading, user, onBlur, onChange, onSubmit }) => {
  const { user_name, email, password, errors } = user;
  
  return (
    <div>
      <Container>
        
      </Container>
    </div>
  );
};

export default SignUp;