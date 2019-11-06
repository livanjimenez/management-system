import React from 'react';
import { Content } from 'mui-layout';

import ModuleForms from '../forms/Module.Forms';
import ModuleDisplayData from '../modules/Module.DisplayData';
export default function Home() {
  return (
    <div>
      <Content>
        <h1>HOME PAGE IS HERE!</h1>
        <Content>
        <ModuleForms />
        <ModuleDisplayData />
      </Content>
      </Content>
    </div>
  );
}