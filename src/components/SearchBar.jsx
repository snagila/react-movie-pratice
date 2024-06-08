import React, { useRef } from "react";
import { Button, Form, Stack } from "react-bootstrap";

const SearchBar = ({ searchMovie }) => {
  const searchInputRef = useRef(null);
  const handleOnClick = (searchInputRef) => {
    searchMovie(searchInputRef.current.value);
    searchInputRef.current.value = "";
  };
  return (
    <>
      <Stack direction="horizontal" gap={4}>
        <Form.Control
          size="lg"
          type="text"
          placeholder="Enter Movie Title "
          ref={searchInputRef}
        />
        <Button
          variant="outline-primary"
          size="lg"
          onClick={() => handleOnClick(searchInputRef)}
        >
          Search
        </Button>
      </Stack>
    </>
  );
};

export default SearchBar;
