import React from 'react';
import PropTypes from 'prop-types';

const ModuleInputs = ({ idx, moduleState, handleModuleChange }) => {
    const moduleId = `name-${idx}`;
    const locationId = `location-${idx}`;
    return (
        <div key={`module-${idx}`}>
            <label htmlFor={moduleId}>{`Module #${idx + 1}`}</label>
            <input
                type="text"
                name={moduleId}
                data-idx={idx}
                id={moduleId}
                className="name"
                value={moduleState[idx].name}
                onChange={handleModuleChange}
            />
            <label htmlFor={locationId}>Location</label>
            <input
                type="text"
                name={locationId}
                data-idx={idx}
                id={locationId}
                className="location"
                value={moduleState[idx].location}
                onChange={handleModuleChange}
            />
        </div>
    );
};

ModuleInputs.propTypes = {
    idx: PropTypes.number,
    moduleState: PropTypes.array,
    handleModuleChange: PropTypes.func,
};

export default ModuleInputs;