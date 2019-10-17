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
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Form from '../forms/Form';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
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
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [ModuleID, setModuleID] = useState('');
  const [ModuleLocation, setModuleLocation] = useState('');

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <TextField
      id="ModuleID"
      label="Module ID"
      value={ModuleID}
      onChange={e => setModuleID(e.target.value)}
      className={classes.textField}
    />
    <TextField
      id="ModuleLocation"
      label="Module Location"
      value={ModuleLocation}
      onChange={e => setModuleLocation(e.target.value)}
      className={classes.textField}
    />

    <Card className={classes.card}/>
    <CardHeader
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
    />
    <CardContent>
      {<Typography >
        <p>Module ID: {ModuleID}</p>
        <p>Module Location: {ModuleLocation}</p>
        <p>{Form.data}</p>
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
    <Collapse in={expanded} timeout="auto" unmountOnExit />

    <Card className={classes.card}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />

      <CardContent>
        {<Typography >
          <p>Module ID: {ModuleID}</p>
          <p>Module Location: {ModuleLocation}</p>
          <p>{Form.data}</p> {/*Trying to display value from form submition... Not working*/}
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
    </div>
  );
}
