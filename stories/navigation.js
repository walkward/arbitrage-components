import React from 'react';
import { storiesOf } from '@storybook/react';
import { Row } from '../src/components/Grid';

storiesOf('Navigation', module)
  .add('Sidebar', () => (
    <Row pt={3} />
  ))
  .add('Pagination', () => (
    <Row pt={3} />
  ));
