import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faFileImage,
  faFileVideo,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import ReactPlayer from "react-player";
import FileService from "./services/file.service";

function App() {
  const [dirTree, setDirTree] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    FileService.getFileList().then(
      (res) => {
        setDirTree(res.data.children);
      },
      (err) => {
        setError(
          (err.response && err.response.data) || err.message || err.toString()
        );
      }
    );
  }, []);

  const IconSelector = ({ type, extension }) => {
    if (type === "directory")
      return <FontAwesomeIcon icon={faFolder} className='fa-5x file-icon' />;

    if (extension === ".jpg" || extension === ".png" || extension === ".gif")
      return <FontAwesomeIcon icon={faFileImage} className='fa-5x file-icon' />;
    else if (
      extension === ".mp4" ||
      extension === ".mov" ||
      extension === ".webm" ||
      extension === ".avi" ||
      extension === ".flv" ||
      extension === ".mkv"
    ) {
      return <FontAwesomeIcon icon={faFileVideo} className='fa-5x file-icon' />;
    } else return <FontAwesomeIcon icon={faFile} className='fa-5x file-icon' />;
  };

  console.log("dirTree", dirTree);
  //{extension: ".mp4"
  //name: "1080P_4000K_128432521.mp4"
  //path: "/mnt/d/Videos/transferred/1080P_4000K_128432521.mp4"
  //size: 48591928
  //type: "file}

  return (
    <main className='container'>
      <div className='row'>
        <div className='col'>
          <h2>List of files.</h2>
          {error || (
            <div className='container'>
              {dirTree.map(({ name, type, extension }) => (
                <div className='item' key={name}>
                  {<IconSelector type={type} extension={extension} />}
                  <div
                    data-toggle='tooltip'
                    data-placement='bottom'
                    title={name}
                  >
                    {name.length > 10 ? name.substr(0, 10) + "..." : name}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
