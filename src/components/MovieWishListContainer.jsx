import React, { useRef, useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";
import SearchBar from "./SearchBar";
import axios from "axios";
import MovieCard from "./MovieCard";
import { Api_Url } from "../../API";

const MovieWishListContainer = () => {
  const [searchedMovie, setSearchedMovie] = useState({});
  // function to search th emovie
  const searchMovie = async (movieTitle) => {
    const response = await axios.get(Api_Url + movieTitle);
    console.log(response.data);
    setSearchedMovie(response.data);
  };
  return (
    <>
      {/* search Bar */}
      <SearchBar searchMovie={searchMovie} />
      <Stack direction="horizontal" gap={4} className="my-4">
        <MovieCard movie={searchedMovie} />
      </Stack>
      {/* Search Result */}
      {/* add to wishlist */}
      {/* Wish List */}
    </>
  );
};

export default MovieWishListContainer;
