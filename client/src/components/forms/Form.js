import React, { useState } from 'react';
import ModuleInputs from './ModuleInputs';
import Styles from './styles.css'

{/*import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  menu: {
    width: 200,
  },
  fab: {
    margin: theme.spacing(2),
  },
}));

export default function OutlinedTextFields() {
  const classes = useStyles();
  // const [values, setValues] = useState({
  //   name: '',
  // });

  const [data, setData] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    //alert(`Data enter: ${data}`);
  };

  // const handleChange = name => event => {
  //   setValues({ ...values, [name]: event.target.value });
  // };

  return (
    <form className={classes.container} noValidate autoComplete="off" onSubmit={handleSubmit}>

      <TextField
        id="data"
        label="Data"
        value={data}
        onChange={e => setData(e.target.value)}
        className={classes.textField}
      />

      <Fab color="secondary" type="submit" className={classes.fab}>
        <AddIcon />
      </Fab>

    </form>
  );
}*/}

const Form = () => {
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

    return (
        <form>
            <label htmlFor="Project">Project</label>
            <input
                type="text"
                name="project"
                id="project"
                value={projectState.project}
                onChange={handleProjectChange}
            />
            <label htmlFor="description">Description</label>
            <input
                type="text"
                name="description"
                id="description"
                value={projectState.description}
                onChange={handleProjectChange}
            />
            <input
                type="button"
                value="Add New Module"
                onClick={addModule}
            />
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
            <input type="submit" value="Submit" />
        </form>
    );
};

export default Form;