import React from 'react';
import { Content } from 'mui-layout';
import { Typography } from '@material-ui/core';
import Form from './Form';

const AmeContent = () => {
  return (
    <div>
      <Content>
        <Typography variant="h6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam
          aliquam sem et tortor consequat id porta. Adipiscing commodo elit
          at imperdiet. Lacus sed turpis tincidunt id aliquet risus feugiat
          in ante. Cras tincidunt lobortis feugiat vivamus at augue eget
          arcu. Hendrerit dolor magna eget est. Fames ac turpis egestas
          maecenas. Cras semper auctor neque vitae tempus quam pellentesque.
          Amet nisl purus in mollis nunc sed id semper. Molestie ac feugiat
          sed lectus vestibulum mattis ullamcorper velit sed. Id aliquet
          lectus proin nibh nisl condimentum.
          </Typography>

          <Form />
      </Content>
    </div>
  );
};

export default AmeContent;