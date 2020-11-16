import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faFileImage,
  faFileVideo,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";

const FileIcon = ({ type, extension }) => {
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

export default FileIcon;
