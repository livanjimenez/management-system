import React from 'react';
import { Content } from 'mui-layout';
import Form from './Form';
import Grids from './Grids';


const AmeContent = () => {
  return (
    <div>
      <Content>
       <Form/>
       <Grids/>       
      </Content>
    </div>
  );
};

export default AmeContent;