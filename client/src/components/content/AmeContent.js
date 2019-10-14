import React from 'react';
import { Content } from 'mui-layout';
import Form from '../forms/Form';
import Modules from '../modules/Modules';

const AmeContent = () => {
  return (
    <div>
      <Content>
        <Form />
        <Modules />
      </Content>
    </div>
  );
};

export default AmeContent;