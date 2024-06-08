import { Container } from "react-bootstrap";
import "./App.css";
import MovieWishListContainer from "./components/MovieWishListContainer";

function App() {
  return (
    <>
      <Container className="my-4">
        <MovieWishListContainer />
      </Container>
    </>
  );
}

export default App;
