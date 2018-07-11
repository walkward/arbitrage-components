import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from 'grid-styled';
import Button from '../src/components/Button';

const children = (text = 'Click Me!') => (
  <span>{text}</span>
);

storiesOf('Button', module)
  .add('Default', () => (
    <Box p={3} width={750}>
      <Button>
        {children('Default Color')}
      </Button>
      <Button color="secondary">
        {children('Secondary Color')}
      </Button>
      <Button color="success">
        {children('Success Color')}
      </Button>
      <Button color="alert">
        {children('Alert Color')}
      </Button>
      <Button color="warning">
        {children('Warning Color')}
      </Button>
      <br />
      <Button>
        {children('Default Type')}
      </Button>
      <Button type="hollow" color="primary">
        {children('Hollow Type')}
      </Button>
      <Button type="outline" color="secondary">
        {children('Outline Type')}
      </Button>
      <br />
      <Button size="tiny">
        {children('Tiny Size')}
      </Button>
      <Button size="small">
        {children('Small Size')}
      </Button>
      <Button size="default">
        {children('Default Size')}
      </Button>
      <Button size="large">
        {children('Large Size')}
      </Button>
      <br />
      <Button expanded>
        {children('Expanded')}
      </Button>
    </Box>
  ))
  .add('Alert', () => {
    const alert = () => window.alert('Clicked!') // eslint-disable-line
    return (
      <Box p={3}>
        <Button color="alert" onClick={alert}>
          {children()}
        </Button>
      </Box>
    );
  });
