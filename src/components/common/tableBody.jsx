import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  bytesToSize = (bytes) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    if (bytes === 0) return 'n/a'
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
    if (i === 0) return `${bytes} ${sizes[i]})`

    return `${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`
  };

  renderCell = (item, column) => {
    if (column.content) return column.content(item);

    let cell = _.get(item, column.path);
    
    if(column.path === 'size') {
      cell = this.bytesToSize(cell);
    }

    return cell;
  };

  createKey = (item, column) => {
    return (item._id || item.path) + (column.path || column.key);
  };

  render() {
    const { data, columns } = this.props;

    return (
      <tbody>
        {data.map(item => (
          <tr key={item._id}>
            {columns.map(column => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
