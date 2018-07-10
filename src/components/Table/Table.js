import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

export default class Table extends React.Component {
  constructor({
    data, columns, loading, pages,
  }) {
    super();
    this.state = {
      columns,
      data,
      loading,
      pages,
    };

    this.onFetchData = this.onFetchData.bind(this);
  }

  onFetchData() {
    const { fetchData } = this.props;
    return fetchData().then((result) => {
      if (result !== null) {
        this.setState({
          data: result.data,
          pages: result.pages,
          loading: false,
        });
      }
    });
  }

  render() {
    const {
      defaultPageSize, filterable, height,
    } = this.props;
    const {
      data, columns, loading, pages,
    } = this.state;

    return (
      <ReactTable
        data={data}
        columns={columns}
        defaultPageSize={defaultPageSize}
        onFetchData={this.onFetchData}
        filterable={filterable}
        loading={loading}
        pages={pages}
        style={{
          height, // Create sticky header by setting height
        }}
      />
    );
  }
}

Table.propTypes = {
  defaultPageSize: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.object.isRequired),
  columns: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  filterable: PropTypes.bool,
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(['inherit']),
  ]),
  fetchData: PropTypes.func,
  loading: PropTypes.bool,
  pages: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf([undefined]),
  ]),
};

Table.defaultProps = {
  fetchData: async () => null,
  data: [{}],
  defaultPageSize: 20,
  filterable: false,
  height: 'inherit',
  loading: false,
  pages: undefined,
};
