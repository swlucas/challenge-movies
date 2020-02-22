import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RouteComponentProps} from 'react-router-dom';
import {getMovie} from 'src/store/ducks/movies';
import {RootState} from 'src/store/ducks/state';
import Badge from 'src/components/Badges';
import {
  Container,
  Header,
  Title,
  Date,
  Body,
  ContentContainer,
  ImageContainer,
  Image,
  OverViewContainer,
  OverViewTitle,
  OverView,
  InfoContainer,
  InfoTitle,
  InfoContentContainer,
  Info,
  Label,
  Value,
  GenreAverageContainer,
  Average,
} from './styles';
import {GenreType} from 'src/store/ducks/genres';

export default function Detail(props: RouteComponentProps) {
  const dispatch = useDispatch();
  const {
    title,
    release_date,
    poster_path,
    overview,
    status,
    original_language,
    runtime,
    budget,
    revenue,
    genres,
    vote_average,
  } = useSelector((state: RootState) => state.movies.data.detail);
  const loading = useSelector((state: RootState) => state.movies.loading);
  const {
    match: {params},
  } = props;
  const {id} = params as any;

  useEffect(() => {
    dispatch(getMovie(id));
  }, [dispatch, id]);
  return !loading['loading.get'] ? (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Date>{release_date}</Date>
      </Header>
      <Body>
        <ContentContainer>
          <OverViewContainer>
            <OverViewTitle>Sinopse</OverViewTitle>
            <OverView>{overview}</OverView>
          </OverViewContainer>
          <InfoContainer>
            <InfoTitle>Informações</InfoTitle>
            <InfoContentContainer>
              <Info>
                <Label>Situação</Label>
                <Value>{status}</Value>
              </Info>
              <Info>
                <Label>Idioma</Label>
                <Value>{original_language}</Value>
              </Info>
              <Info>
                <Label>Duração</Label>
                <Value>{runtime}</Value>
              </Info>
              <Info>
                <Label>Orçamento</Label>
                <Value>${budget}</Value>
              </Info>
              <Info>
                <Label>Receita</Label>
                <Value>${revenue}</Value>
              </Info>
              <Info>
                <Label>Lucro</Label>
                <Value>${(revenue * 100 - budget * 100) / 100}</Value>
              </Info>
            </InfoContentContainer>
          </InfoContainer>
          <GenreAverageContainer>
            <InfoContentContainer>
              {genres &&
                genres.map((genre: GenreType) => (
                  <Badge key={genre.id}>{genre.name}</Badge>
                ))}
            </InfoContentContainer>
            <Average>{vote_average * 10}% </Average>
          </GenreAverageContainer>
        </ContentContainer>
        <ImageContainer>
          <Image src={poster_path} />
        </ImageContainer>
      </Body>
    </Container>
  ) : (
    <></>
  );
}
