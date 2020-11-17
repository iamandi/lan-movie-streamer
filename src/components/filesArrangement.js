import FilesTable from "./filesTable";
import FileIcon from "./FileIcon";

const FilesArrangement = ({
  arrangement,
  dirTree,
  sortColumn,
  handleSort,
  handleLike,
}) => {
  const handleDelete = () => {
    console.log(">> handleDelete");
  };

  if (arrangement === "list")
    return (
      <div className='table-container'>
        <FilesTable
          files={dirTree}
          sortColumn={sortColumn}
          onLike={handleLike}
          onDelete={handleDelete}
          onSort={handleSort}
        />
      </div>
    );
  else
    return (
      <div className='file-container'>
        <div class='form-group' style={{ width: "100%" }}>
          <hr />
        </div>

        {dirTree.map(({ name, type, extension, path }) => (
          <div className='item' key={`${path}`}>
            {<FileIcon type={type} extension={extension} />}
            <div data-toggle='tooltip' data-placement='bottom' title={name}>
              {name.length > 10 ? `${name.substr(0, 10)}...` : name}
            </div>
          </div>
        ))}
      </div>
    );
};

export default FilesArrangement;
