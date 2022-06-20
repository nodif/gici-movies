import React from "react";
import MovieCard from "../movie-card/movie-card.component";
import Movie from "../../movie.model";
import { MovieList } from "./movies-overview.styles";

interface MovieListProps {
      movies: Movie[];  
  }

const MoviesOverview: React.FC<MovieListProps> = props => {
  
    // console.log(props.movies);
  

    return (
        props.movies.length ?  <MovieList>
                      {
                          props.movies.map((movie: Movie) => <MovieCard key={movie.id} item = {movie} />)
                      }
                   </MovieList> : <h2>Put the name</h2>
    );
};

export default MoviesOverview;