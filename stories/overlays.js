import React from 'react';
import { storiesOf } from '@storybook/react';
import { Row, Column } from '../src/components/Grid';
import Modal from '../src/components/Modal';

storiesOf('Overlays', module)
  .add('Modal', () => (
    <Row pt={3}>
      <Column>
        <Modal title="This is the modal title">
          <p>Here is the module content where you could add just about anything.</p>
        </Modal>
      </Column>
    </Row>
  ))
  .add('Toast', () => (
    <Row pt={3} />
  ));
