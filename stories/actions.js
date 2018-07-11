import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../src/components/Button';
import ButtonGroup from '../src/components/ButtonGroup';
import { Row, Column } from '../src/components/Grid';

storiesOf('Actions', module)
  .add('Buttons', () => (
    <Row pt={3}>

      <Column width={1}>
        <ButtonGroup>
          <Button>Default Color</Button>
          <Button color="secondary">Secondary Color</Button>
          <Button color="success">Success Color</Button>
          <Button color="alert">Alert Color</Button>
          <Button color="warning">Warning Color</Button>
        </ButtonGroup>
      </Column>

      <Column width={1}>
        <ButtonGroup>
          <Button>Default Type</Button>
          <Button type="hollow" color="primary">Hollow Type</Button>
          <Button type="outline" color="secondary">Outline Type</Button>
        </ButtonGroup>
      </Column>

      <Column width={1}>
        <ButtonGroup>
          <Button size="tiny">Tiny Size</Button>
          <Button size="small">Small Size</Button>
          <Button size="default">Default Size</Button>
          <Button size="large">Large Size</Button>
        </ButtonGroup>
      </Column>

      <Column width={1}>
        <Button expanded>Expanded</Button>
      </Column>

    </Row>
  ))
  .add('Button Group', () => (
    <Row pt={3}>

      <Column width={1}>
        <p>Using a button group adds space between buttons like this:</p>

        <ButtonGroup>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
        </ButtonGroup>
      </Column>

      <Column width={1}>
        <p>Instead of this:</p>

        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </Column>

    </Row>
  ))
  .add('Button Actions', () => {
    const alert = () => window.alert('Clicked!') // eslint-disable-line
    return (
      <Row pt={3}>
        <Column width={1}>
          <p>Buttons can handle clicks using their onClick prop.</p>
          <Button color="alert" onClick={alert}>Click me!</Button>
        </Column>
      </Row>
    );
  })
  .add('Button Text Toggle', () => (
    <Row pt={3}>
      <Column width={1}>
        <p>Can toggle their text using the toggleText prop</p>
      </Column>
    </Row>
  ));
