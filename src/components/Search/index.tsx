import React from 'react';
import {useDispatch} from 'react-redux';
import {Container, Input} from './styles';
import {listMovies} from 'src/store/ducks/movies';
// import {RootState} from 'src/store/ducks/state';

export default function Search() {
  // const loading = useSelector((state: RootState) => state.movies.loading);
  const dispatch = useDispatch();

  const handleSearch = (text: string) => {
    dispatch(listMovies(text));
  };

  return (
    <Container>
      <Input onChange={(event: any) => handleSearch(event.target.value)} />
    </Container>
  );
}
