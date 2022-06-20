import { useQuery } from "react-query";
import MoviesOverview from '../../components/movies-overview/movies-overview.component';
import SearchBox from "../../components/search-box/search-box.component";
import { useState, useEffect } from "react";
import { HomePageContainer } from "./homepage.styles";
import Movie from '../../movie.model';


const HomePage: React.FC = props => {


  const [movies, setMovies] = useState<Movie[]>([]); 
    
  const { isLoading, isError, error, data, isFetching, refetch } = useQuery<any,Error>("repoData", () => {
    const input = document.getElementById('movie') as HTMLInputElement | null;
    const value: string = input!.value;
    return fetch("https://imdb-api.com/en/API/SearchMovie/k_2yeouvno/" + value)
    .then(res =>res.json())}, {
        refetchOnMount: true,
        enabled: false // disable this query from automatically running
      }
  );

  
    useEffect(() => {
            if(data)
                setMovies(data.results); 
        },  [movies]); 

  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{"An error has occurred: " + error!.message}</div>;
  }


  const handleClick = () => {
    const input = document.getElementById('movie') as HTMLInputElement | null;
    const value: string = input!.value;
    console.log(value);
    refetch();   
    setMovies(data.results); 
    console.log(data);
    console.log(movies);
  };

  return(
      <HomePageContainer>
      <h1>Movies</h1>
      <SearchBox />
      <button onClick={handleClick}>
            SEARCH MOVIES
      </button>
      <MoviesOverview movies={ movies } /> 
      </HomePageContainer>
  )
};

export default HomePage;