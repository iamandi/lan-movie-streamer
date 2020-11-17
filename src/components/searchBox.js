import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const SearchBox = ({ value, onChange }) => {
  return (
    <InputGroup className='mb-3 search-box'>
      <FormControl
        type='text'
        name='query'
        className='form-control mr-sm-2'
        placeholder='Search...'
        aria-label='Search by name'
        aria-describedby='basic-addon1'
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </InputGroup>
  );
};

export default SearchBox;
