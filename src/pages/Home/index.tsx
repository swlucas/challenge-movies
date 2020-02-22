import React, {useEffect} from 'react';
import {Container} from './styles';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import Search from 'src/components/Search';
import Movie from 'src/components/Movie';
import {RootState} from 'src/store/ducks/state';
import {ListGenre} from 'src/store/ducks/genres';
export default function Home() {
  const dispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.movies.data.movies);
  const history = useHistory();

  useEffect(() => {
    dispatch(ListGenre());
  }, [dispatch]);

  const handleClickMovie = (id: number) => {
    history.push(`/movie/${id}`);
  };

  return (
    <Container>
      <Search />
      {movies.map(movie => (
        <Movie
          onClick={handleClickMovie}
          id={movie.id}
          key={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          release_date={movie.release_date}
          overview={movie.overview}
          vote_average={movie.vote_average}
        />
      ))}
    </Container>
  );
}
