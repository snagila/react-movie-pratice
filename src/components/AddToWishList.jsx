import React from "react";
import { Alert, Button, Stack } from "react-bootstrap";

const AddToWishList = ({ addMovieToWishList, movie, wishList }) => {
  const handleOnClick = (genre) => {
    const movieWithGenre = { ...movie, Genre: genre };
    addMovieToWishList(movieWithGenre);
  };
  const disableButtons = wishList.find((item) => item.imdbID === movie.imdbId);
  return (
    <>
      <Stack>
        <Alert> Add To WishList</Alert>
        <Stack direction="horizontal" gap={4}>
          <Button
            disabled={disableButtons}
            variant="outline-primary"
            onClick={() => handleOnClick("action")}
          >
            + Add to Action
          </Button>
          <Button
            disabled={disableButtons}
            variant="outline-success"
            onClick={() => handleOnClick("comedy")}
          >
            + Add to Comedy
          </Button>
          <Button variant="outline-danger">Discard</Button>
        </Stack>
      </Stack>
    </>
  );
};

export default AddToWishList;
