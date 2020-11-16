import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import _ from "lodash";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import FileService from "../services/file.service";
import FileIcon from "./FileIcon";
import ListGroup from "./common/listGroup";
import NavBar from "./navBar";
import SearchBox from "./searchBox";
import FileBreadCrumb from "./common/fileBreadCrumb";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import MoviesTable from "./moviesTable";
import FilesTable from "./filesTable";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

function FileContainer() {
  const [dirTree, setDirTree] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  //const [genres, setGenres] = useState([]);

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    const movieList = getMovies();
    console.log("movieList", movieList);
    setMovies(movieList);
  }, []);

  const handleGenreSelect = () => {
    console.log("handleGenreSelect");
  };

  const handleSearch = () => {
    console.log("handleSearch");
  };

  const handleLike = () => {
    console.log("handleLike");
  };

  const handleDelete = () => {
    console.log("handleDelete");
  };

  const handleSort = () => {
    console.log("handleSort");
  };

  const genres = [
    { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
  ];
  const selectedGenre = "Action";
  const sortColumn = { path: "name", order: "asc" };

  console.log("dirTree", dirTree);
  //{extension: ".mp4"
  //name: "1080P_4000K_128432521.mp4"
  //path: "/mnt/d/Videos/transferred/1080P_4000K_128432521.mp4"
  //size: 48591928
  //type: "file}
  //<div className='container'></div>;

  return (
    <div className='row'>
      <div className='col'>
        <div className='row'>
          <div className='header-container'>
            <Breadcrumb style={{ fontSize: "25px" }}>
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
          {_.isEmpty(dirTree) ? (
            <div
              className='table-container'
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Loader type='Puff' color='#00BFFF' height={100} width={100} />
            </div>
          ) : (
            <div className='table-container'>
              <FilesTable
                files={dirTree}
                sortColumn={sortColumn}
                onLike={handleLike}
                onDelete={handleDelete}
                onSort={handleSort}
              />
            </div>
          )}
          <div className='table-container'>
            <MoviesTable
              movies={movies}
              sortColumn={sortColumn}
              onLike={handleLike}
              onDelete={handleDelete}
              onSort={handleSort}
            />
          </div>
          <div className='file-container'>
            {dirTree.map(({ name, type, extension }) => (
              <div className='item' key={name}>
                {<FileIcon type={type} extension={extension} />}
                <div data-toggle='tooltip' data-placement='bottom' title={name}>
                  {name.length > 10 ? `${name.substr(0, 10)}...` : name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FileContainer;
