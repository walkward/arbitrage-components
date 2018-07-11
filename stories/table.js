import React from 'react';
import { storiesOf } from '@storybook/react';
import { Table, CheckboxTable } from '../src/components/Table';
import { makeData, makeColumns } from '../src/components/Table/utils';
import { Row, Column } from '../src/components/Grid';
import Card from '../src/components/Card';

const columns = makeColumns();
const data = makeData();

storiesOf('Table', module)
  .add('Basic', () => (
    <Row pt={3}>
      <Column width={1}>
        <Card>
          <Table data={data} columns={columns} />
        </Card>
      </Column>
    </Row>
  ))
  .add('External Data', () => {
    const fetchData = async () => {
      await new Promise(res => setTimeout(res, 1000)); // Simulate delayed loading
      return {
        pages: 5,
        data: makeData(90),
      };
    };
    return (
      <Row pt={3}>
        <Column width={1}>
          <Card>
            <Table fetchData={fetchData} columns={columns} loading />
          </Card>
        </Column>
      </Row>
    );
  })
  .add('Filterable', () => (
    <Row pt={3}>
      <Column width={1}>
        <Card>
          <Table data={data} columns={columns} filterable />
        </Card>
      </Column>
    </Row>
  ))
  .add('Fixed Header', () => (
    <Row pt={3}>
      <Column width={1}>
        <Card>
          <Table data={data} columns={columns} height={400} />
        </Card>
      </Column>
    </Row>
  ))
  .add('Selectable', () => (
    <Row pt={3}>
      <Column width={1}>
        <Card>
          <CheckboxTable data={data} columns={columns} />
        </Card>
      </Column>
    </Row>
  ));
