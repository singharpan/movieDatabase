import React, { Component } from "react";
import Like from "./common/like";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1,
  };
  //This is not right way to initialize state property b'coz the API can take time to send the data

  handleDelete = (movie) => {
    const movies = this.state.movies.filter(
      (movies) => movie._id !== movies._id
    );
    this.setState({ movies });
  };

  handlelike = (movie) => {
    const newmovies = [...this.state.movies];
    const index = newmovies.indexOf(movie);
    newmovies[index] = { ...newmovies[index] };
    newmovies[index].liked = !newmovies[index].liked;
    this.setState({ movies: newmovies });
  };
  //This page will recieve new Page number
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    //Destructing
    const { length: count } = this.state.movies;
    const { pageSize, currentPage } = this.state;
    if (count === 0) return <p>There is no movie in the database.</p>;

    return (
      <React.Fragment>
        <p>Showing {count} movies in the database</p>
        <hr />
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    Liked={movie.liked}
                    onlike={() => this.handlelike(movie)}
                  />
                </td>
                <td>
                  {
                    <button
                      onClick={() => this.handleDelete(movie)}
                      type="button"
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}
export default Movies;
