import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTh } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Option = ({ onSelect, arrangement }) => {
  //return <FontAwesomeIcon icon={faBars} style={style} />;

  return (
    <DropdownButton
      id='dropdown-basic-button'
      style={{ marginRight: "2%" }}
      title={
        arrangement === "list" ? (
          <FontAwesomeIcon icon={faBars} />
        ) : (
          <FontAwesomeIcon icon={faTh} />
        )
      }
    >
      <Dropdown.Item onClick={() => onSelect("list")}>List</Dropdown.Item>
      <Dropdown.Item onClick={() => onSelect("grid")}>Grid</Dropdown.Item>
    </DropdownButton>
  );
};

export default Option;
