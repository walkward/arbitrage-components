import React from 'react';
import { storiesOf } from '@storybook/react';
import Table from '../src/components/Table/Table';
import CheckBoxTable from '../src/components/Table/CheckBoxTable';
import { makeData, makeColumns } from '../src/components/Table/utils';

const columns = makeColumns();
const data = makeData();

storiesOf('Table', module)
  .add('Basic', () => (
    <Table data={data} columns={columns} />
  ))
  .add('External Data', () => {
    const fetchData = async () => ({
      pages: 5,
      data: makeData(90),
    });
    return <Table fetchData={fetchData} columns={columns} loading />;
  })
  .add('Filterable', () => (
    <Table data={data} columns={columns} filterable />
  ))
  .add('Fixed Header', () => (
    <Table data={data} columns={columns} height={400} />
  ))
  .add('Selectable', () => (
    <CheckBoxTable data={data} columns={columns} />
  ));
