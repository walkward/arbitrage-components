import React from 'react';
import { storiesOf } from '@storybook/react';

import { primary } from '../src/styles/colors';
import { Row, Column } from '../src/components/Grid';
import Card from '../src/components/Card';

storiesOf('Grid', module)
  .add('Grid Styled', () => (
    <Row pt={3} style={{ background: primary }}>

      <Column style={{ background: primary }}>
        <Card>
          <h5>Padding is blue.</h5>
          <h5>Content is white.</h5>
        </Card>
      </Column>

      <Column style={{ background: primary }}>
        <Card>
          <h5>Column A</h5>
        </Card>
      </Column>

      <Column style={{ background: primary }}>
        <Card>
          <h5>Column B</h5>
        </Card>
      </Column>

      <Column style={{ background: primary }}>
        <Card>
          <h5>Column C</h5>
        </Card>
      </Column>

      <Column width={1 / 2} style={{ background: primary }}>
        <Card>
          <h5>1/2 Column</h5>
        </Card>
      </Column>

      <Column width={1 / 4} style={{ background: primary }}>
        <Card>
          <h5>1/4 Column</h5>
        </Card>
      </Column>

      <Column width={[1, 1 / 2]} style={{ background: primary }}>
        <Card>
          <h5>We are...</h5>
        </Card>
      </Column>

      <Column width={[1, 1 / 2]} style={{ background: primary }}>
        <Card>
          <h5>responsive columns!</h5>
        </Card>
      </Column>

    </Row>
  ))
  .add('Card', () => (
    <Row p={3}>

      <Column>
        <Card>
          <h3>Cards!!!</h3>
          <p className="margin-0">Here a card within a row container.</p>
        </Card>
      </Column>

      <Column>
        <Card>
          <p className="margin-0">Here a card right next door!</p>
        </Card>
      </Column>

    </Row>
  ));
