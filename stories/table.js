import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from 'grid-styled';
import { Table, CheckboxTable } from '../src/components/Table';
import { makeData, makeColumns } from '../src/components/Table/utils';

const columns = makeColumns();
const data = makeData();

storiesOf('Table', module)
  .add('Basic', () => (
    <Box p={3}>
      <Table data={data} columns={columns} />
    </Box>
  ))
  .add('External Data', () => {
    const fetchData = async () => ({
      pages: 5,
      data: makeData(90),
    });
    return (
      <Box p={3}>
        <Table fetchData={fetchData} columns={columns} loading />
      </Box>
    );
  })
  .add('Filterable', () => (
    <Box p={3}>
      <Table data={data} columns={columns} filterable />
    </Box>
  ))
  .add('Fixed Header', () => (
    <Box p={3}>
      <Table data={data} columns={columns} height={400} />
    </Box>
  ))
  .add('Selectable', () => (
    <Box p={3}>
      <CheckboxTable data={data} columns={columns} />
    </Box>
  ));
