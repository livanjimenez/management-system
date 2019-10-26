import React, { useState } from 'react';
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
    maxWidth: 345,
    width: 500,
    height: 200,
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

export default function Modules() {
  const [projectState, setProjectState] = useState({
      project: '',
      description: '',
  });

  const handleProjectChange = (e) => setProjectState({
      ...projectState,
      [e.target.name]: [e.target.value],
  });

  const blankModule = { name: '', location: '' };
  const [moduleState, setModuleState] = useState([
      { ...blankModule },
  ]);

  const addModule = () => {
      setModuleState([...moduleState, { ...blankModule }]);
  };

  const handleModuleChange = (e) => {
      const updatedModules = [...moduleState];
      updatedModules[e.target.dataset.idx][e.target.className] = e.target.value;
      setModuleState(updatedModules);
  };


  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [ModuleID, setModuleID] = useState('');
  const [ModuleLocation, setModuleLocation] = useState('');
  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <React.Fragment>
      

    <Card className={classes.card} id='card'>
      <CardHeader
        action={
          Checkboxes()
        }
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


    <Card className={classes.card} id='card'>
      <CardHeader
        action={
          Checkboxes()
        }
      />

      <CardContent>
        {<Typography >
          <p>Module ID: </p>
          <p>Module Location: </p>
        
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



    <Card className={classes.card} id='card'>
      <CardHeader
        action={
          Checkboxes()
        }
      />

      <CardContent>
        {<Typography >
          <p>Module ID: </p>
          <p>Module Location: </p>
        
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



    <Card className={classes.card} id='card'>
      <CardHeader
        action={
          Checkboxes()
        }
      />

      <CardContent>
        {<Typography >
          <p>Module ID: </p>
          <p>Module Location: </p>
        
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

    
    </React.Fragment>
  );
}
