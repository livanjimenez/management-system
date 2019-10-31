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
import ModuleInputs from '../modules/ModuleInputs';


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 300,
    width: 500,
    height: 'auto',
  },
  media: {
    //height: 0,
    paddingTop: 19, // 16:9
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

      {
        moduleState.map((val, idx) => (
          <ModuleInputs
            key={`module-${idx}`}
            idx={idx}
            moduleState={moduleState}
            handleModuleChange={handleModuleChange}
          />
        ))

      }

      <button onClick={addModule}>
        Add Module
    </button>

    </React.Fragment>

  );
}

