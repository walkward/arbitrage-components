import React from 'react';
import { storiesOf } from '@storybook/react';

import { Row, Column } from '../src/components/Grid';
import Input from '../src/components/Input';
import Select from '../src/components/Select';
import Textarea from '../src/components/Textarea';
import Radio from '../src/components/Radio';
import Checkbox from '../src/components/Checkbox';

storiesOf('Forms', module)
  .add('Form Wrapper', () => (
    <Row pt={3}>
      <Column>
        <p>Form Wrapper</p>
      </Column>
    </Row>
  ))
  .add('Input', () => (
    <Row pt={3} justifyContent="center">
      <Column>

        <Input type="number" name="numberInput" label="Number Input" />

        <Input type="text" name="textInput" label="Text Input" />

        <Input type="password" name="passwordInput" label="Password Input" />

        <Input type="color" name="colorInput" label="Color Input" />

        <Input type="date" name="dateInput" label="Date Input" />

        <Input type="month" name="monthInput" label="Month Input" />

        <Input type="search" name="searchInput" label="Search Input" />

        <Input type="time" name="timeInput" label="Time Input" />

        <Input type="week" name="weekInput" label="Week Input" />

      </Column>
    </Row>
  ))
  .add('Textarea', () => (
    <Row pt={3} justifyContent="center">
      <Column width={300}>
        <Textarea name="textareaInput" label="Textarea Element" />
      </Column>
    </Row>
  ))
  .add('Select', () => {
    const options = Array(10).fill().map((o, i) => ({
      text: `Option ${i + 1}`,
      value: `option${i + 1}`,
    }));

    return (
      <Row pt={3} justifyContent="center">
        <Column width={300}>

          <Select options={options} name="selectInput" label="Select Element" />

          <Select options={options} name="selectMultipleInput" label="Select Multiple Element" multiple />

        </Column>
      </Row>
    );
  })
  .add('Checkbox', () => (
    <Row pt={3} justifyContent="center">
      <Column>
        <fieldset>

          <legend>Check these out</legend>

          <Checkbox label="Checkbox Element 1" />

          <Checkbox label="Checkbox Element 2" />

          <Checkbox label="Checkbox Element 3" />

        </fieldset>
      </Column>
    </Row>
  ))
  .add('Radio', () => (
    <Row pt={3} justifyContent="center">
      <Column>
        <fieldset>

          <legend>Choose Your Favorite</legend>

          <Radio name="radioInput" label="Radio Element 1" value="element1" />

          <Radio name="radioInput" label="Radio Element 2" value="element2" />

          <Radio name="radioInput" label="Radio Element 3" value="element3" />

        </fieldset>
      </Column>
    </Row>
  ));
