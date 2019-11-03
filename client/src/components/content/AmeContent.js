import React from 'react';
import { Content } from 'mui-layout';
import ModuleForms from '../forms/Module.Forms';
import ModuleDisplayData from '../modules/Module.DisplayData';

const AmeContent = () => {
  return (
    <div>
      <Content>
        <ModuleForms />
        <ModuleDisplayData />
      </Content>
    </div>
  );
};

export default AmeContent;