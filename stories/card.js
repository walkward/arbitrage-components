import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Flex } from 'grid-styled';
import Card from '../src/components/Card';

const children = (text, header) => (
  <div>
    <h3>{header}</h3>
    <span>{text}</span>
  </div>
);

storiesOf('Card', module)
  .add('Default', () => (
    <Box p={3}>
      <Card>
        {children('Here is some text for the card.', 'Cards!!!')}
      </Card>
      <Flex>
        <Card mr={3}>
          {children('Here a card within a flex container.')}
        </Card>
        <Card>
          {children('Here a card right next door!')}
        </Card>
      </Flex>
    </Box>
  ));
