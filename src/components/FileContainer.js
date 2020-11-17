import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import _ from "lodash";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import FileService from "../services/file.service";
import FileIcon from "./FileIcon";
import Option from "./option";
import ListGroup from "./common/listGroup";
import NavBar from "./navBar";
import SearchBox from "./searchBox";
import FileBreadCrumb from "./common/fileBreadCrumb";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Dropdown from "react-bootstrap/Dropdown";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import MoviesTable from "./moviesTable";
import FilesTable from "./filesTable";
import FilesArrangement from "./filesArrangement";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { getFiles } from "../services/fakeFileService";

function FileContainer() {
  const [dirTree, setDirTree] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortColumn, setSortColumn] = useState({ path: "name", order: "asc" });

  const [totalCount, setTotalCount] = useState(0);
  const [error, setError] = useState("");
  const [arrangement, setArrangement] = useState("list");

  useEffect(() => {
    setDirTree(getFiles());
    /*
    FileService.getFileList().then(
      (res) => {
        console.log("res", res);
        setDirTree(res.data.children);
      },
      (err) => {
        setError(
          (err.response && err.response.data) || err.message || err.toString()
        );
      }
    );
    */
  }, []);

  const handleSearch = () => {
    console.log("handleSearch");
  };

  const handleLike = (file) => {
    const files = [...dirTree];
    const index = files.indexOf(file);
    files[index] = { ...files[index] };
    files[index].liked = !files[index].liked;
    setDirTree(files);
  };

  const handleDelete = () => {
    console.log("handleDelete");
  };

  const handleSort = () => {
    console.log("handleSort");
  };

  const handleArrangement = (e) => {
    console.log("handleArrangement", e);
    setArrangement(e.toString());
  };

  const selectedGenre = "Action";

  console.log("dirTree", dirTree);
  console.log(">>>>>>>> dirTree.length", dirTree.length);

  const directories = dirTree.filter((o) => o.type === "directory");
  const files = dirTree.filter((o) => o.type === "file");

  return (
    <div className='row'>
      <div className='col'>
        <div className='row'>
          <div className='header-container'>
            <Breadcrumb className='breadcrumb-dot'>
              <Breadcrumb.Item href='#'>Home</Breadcrumb.Item>
              <Breadcrumb.Item href='https://getbootstrap.com/docs/4.0/components/breadcrumb/'>
                Library
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>

            <InputGroup className='mb-3 search-box'>
              <FormControl
                type='text'
                name='query'
                className='form-control mr-sm-2'
                placeholder='Search...'
                aria-label='Username'
                aria-describedby='basic-addon1'
                value={searchQuery}
                onChange={handleSearch}
              />
            </InputGroup>
          </div>

          <div className='h2-title'>
            <div class='form-group' style={{ width: "100%" }}>
              <h5>Overview</h5>
              <hr />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {`Showing ${directories.length} directories and ${files.length} files.`}
                <Option
                  onSelect={handleArrangement}
                  arrangement={arrangement}
                />
              </div>
            </div>
          </div>

          {_.isEmpty(dirTree) ? (
            <div className='table-container'>
              <Loader type='Puff' color='#00BFFF' height={100} width={100} />
            </div>
          ) : (
            <FilesArrangement
              arrangement={arrangement}
              dirTree={dirTree}
              sortColumn={sortColumn}
              handleSort={handleSort}
              handleLike={handleLike}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default FileContainer;
