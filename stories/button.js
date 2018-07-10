import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from 'grid-styled';
import Button from '../src/components/Button';

const children = (
  <span>
    Click Me!
  </span>
);

storiesOf('Button', module)
  .add('Default', () => (
    <Box p={3}>
      <Button>
        {children}
      </Button>
    </Box>
  ))
  .add('Alert', () => {
    const alert = () => window.alert('Clicked!') // eslint-disable-line
    return (
      <Box p={3}>
        <Button color="alert" onClick={alert}>
          {children}
        </Button>
      </Box>
    );
  });
