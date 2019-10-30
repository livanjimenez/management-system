import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Form from '../forms/Form';
import Checkboxes from '../modules/Checkbox';
import FloatingActionButtons from '../modules/AddButton';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 300,
      width: 500,
      height: 'auto',
    },
    media: {
      //height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  }));

const ModuleInputs = ({ idx, moduleState, handleModuleChange }) => {
    const moduleId = `name-${idx}`;
    const locationId = `location-${idx}`;

    
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [ModuleID, setModuleID] = useState('');
    const [ModuleLocation, setModuleLocation] = useState('');
    const [state, setState] = React.useState({
      checkedA: true,
    });
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
    return (
        <Card className={classes.card} id='card'>
      <CardHeader
        action={
          Checkboxes()
        }
        title="Module S/N: "
      />

      <CardContent>
        {<Typography >
          <p>Module ID: {ModuleID}</p>
          <p>Module Location: {ModuleLocation}</p>
        
        </Typography>}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Module log to be shown here.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    );
};

ModuleInputs.propTypes = {
    idx: PropTypes.number,
    moduleState: PropTypes.array,
    handleModuleChange: PropTypes.func,
};

export default ModuleInputs;