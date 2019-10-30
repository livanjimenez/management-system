import React, { useState } from 'react';
import ModuleInputs from '../modules/ModuleInputs';
import './styles.css';

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

