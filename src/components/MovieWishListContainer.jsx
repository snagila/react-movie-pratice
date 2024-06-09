import React, { useEffect, useState } from "react";
import { Spinner, Stack } from "react-bootstrap";
import SearchBar from "./SearchBar";
import axios from "axios";
import MovieCard from "./MovieCard";
import { Api_Url } from "../../API";
import AddToWishList from "./AddToWishList";

const MovieWishListContainer = () => {
  const [searchedMovie, setSearchedMovie] = useState({});
  const [wishList, setWishList] = useState([]);
  const [isLoading, setIsLoading] = useState();

  const addMovieToWishList = (movie) => {
    setWishList([...wishList, movie]);
  };
  // function to search th emovie
  const searchMovie = async (movieTitle) => {
    try {
      // set isloading to true
      setIsLoading(true);
      const response = await axios.get(Api_Url + movieTitle);
      // if response.data set isLoad to false
      if (response.data) {
        setIsLoading(false);
      }
      setSearchedMovie(response.data);
    } catch (error) {
      alert(error.message);
    }
  };
  //   useEffect hook syntax useEffect(()=>{},[]) //[] this is dependency array
  useEffect(() => {
    searchMovie();
  }, []);
  return (
    <>
      {/* search Bar */}
      <SearchBar searchMovie={searchMovie} />
      <Stack direction="horizontal" gap={4} className="my-4">
        <MovieCard movie={searchedMovie} />
        {isLoading && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        {!isLoading && (
          <AddToWishList
            movie={searchedMovie}
            addMovieToWishList={addMovieToWishList}
            wishList={wishList}
          />
        )}
      </Stack>
      {/* Search Result */}
      {/* add to wishlist */}
      {wishList.map((movie) => {
        <p>{movie.Title}</p>;
      })}
      {/* Wish List */}
    </>
  );
};

export default MovieWishListContainer;
