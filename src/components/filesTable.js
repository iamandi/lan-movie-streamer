import React, { Component } from "react";
//import auth from "../services/authService";
import { Link } from "react-router-dom";
import TableComponent from "./common/table";
import Like from "./common/like";

//extension: ".mp4"
//name: "1080P_4000K_128432521.mp4"
//path: "/mnt/d/Videos/transferred/1080P_4000K_128432521.mp4"
//size: 48591928
//type: "file
class FilesTable extends Component {
  columns = [
    {
      path: "name",
      label: "Name",
      content: (file) => <Link to={`/files/${file._id}`}>{file.name}</Link>,
    },
    { path: "size", label: "Total_Size" },
    { path: "type", label: "Type" },
    { path: "extension", label: "Extension" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      ),
    },
  ];

  deleteColumn = {
    key: "delete",
    content: (file) => (
      <button
        onClick={() => this.props.onDelete(file)}
        className='btn btn-danger btn-sm'
      >
        Delete
      </button>
    ),
  };

  constructor() {
    super();
    const user = "Andy"; //auth.getCurrentUser();
    if (user && user.isAdmin) this.columns.push(this.deleteColumn);
  }

  render() {
    const { files, onSort, sortColumn } = this.props;

    return (
      <TableComponent
        columns={this.columns}
        data={files}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default FilesTable;
