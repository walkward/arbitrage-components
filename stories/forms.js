import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from 'grid-styled';
import {
  Input, Select, Textarea, Radio,
} from '../src/components/Forms';

storiesOf('Forms', module)
  .add('Default', () => {
    const options = Array(10).fill().map((o, i) => ({
      text: `Option ${i + 1}`,
      value: `option${i + 1}`,
    }));

    return (
      <Box p={3} width={500}>
        <Input type="number" name="numberInput" label="Number Input" />

        <Input type="text" name="textInput" label="Text Input" />

        <Input type="password" name="passwordInput" label="Password Input" />

        <Select options={options} name="selectInput" label="Select Element" />

        <Select options={options} name="selectMultipleInput" label="Select Multiple Element" multiple />

        <Textarea name="textareaInput" label="Textarea Element" />

        <fieldset>
          <legend>Choose Your Favorite</legend>
          <Radio type="radio" name="radioInput" label="Radio Element 1" value="element1" />
          <Radio type="radio" name="radioInput" label="Radio Element 2" value="element2" />
        </fieldset>

        <fieldset className="large-7 cell">
          <legend>Check these out</legend>
          <input id="checkbox1" type="checkbox" />
          <label htmlFor="checkbox1">Checkbox 1</label>
          <input id="checkbox2" type="checkbox" />
          <label htmlFor="checkbox2">Checkbox 2</label>
          <input id="checkbox3" type="checkbox" />
          <label htmlFor="checkbox3">Checkbox 3</label>
        </fieldset>
        <br />
      </Box>
    );
  });
