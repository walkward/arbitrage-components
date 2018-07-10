import React from 'react';

import Table from './Table';
import CheckBoxInput from '../CheckBoxInput';

export default class CheckBoxTable extends Table {
  constructor({ data, columns, defaultPageSize }) {
    super({ data });

    const select = {
      id: '_selector',
      accessor: () => 'x', // this value is not important
      Header: this.headSelect.bind(this),
      Cell: row => this.rowSelect.bind(this)(row),
      width: 30,
      sortable: false,
      resizable: false,
      style: { textAlign: 'center' },
    };

    this.state.selection = []; // An array of integers which represent the selected rows
    this.state.columns = [select, ...columns];
    this.state.pageSize = defaultPageSize;

    this.toggleRow = this.toggleRow.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
  }

  rowSelect(row) {
    const { toggleRow } = this;
    const { index } = row;
    const inputProps = {
      checked: this.isSelected(index),
      handleClick: evt => toggleRow(evt, row),
    };

    return React.createElement(CheckBoxInput, inputProps);
  }

  headSelect() {
    const { toggleAll } = this;
    const inputProps = {
      checked: this.state.selection.length === this.state.data.length,
      handleClick: toggleAll,
    };

    return React.createElement(CheckBoxInput, inputProps);
  }

  isSelected(index) {
    return this.state.selection.includes(index);
  }

  toggleRow(evt, row) {
    this.setState(prevState => ({
      selection: (() => {
        const { index } = row;
        let selection = [...prevState.selection];
        const keyIndex = selection.indexOf(index);

        if (selection.includes(index)) {
          selection = [
            ...selection.slice(0, keyIndex),
            ...selection.slice(keyIndex + 1),
          ];
        } else {
          selection.push(index);
        }

        return selection;
      })(),
    }));
  }

  toggleAll() {
    this.setState(prevState => ({
      selection: (() => {
        if (prevState.selection.length === prevState.data.length) return [];
        return [...Array(prevState.data.length).keys()];
      })(),
    }));
  }
}
