import React from 'react';
import {
  Container,
  ImageContainer,
  Image,
  ContentContainer,
  ContentHeader,
  Rate,
  Content,
  Title,
  Date,
  ContentBody,
  OverView,
} from './styles';

interface Props {
  id: number;
  title: string;
  poster_path: string;
  release_date: Date;
  overview: string;
  vote_average: number;
  onClick: (id: number) => void;
}

export default function Movie(props: Props) {
  const {
    id,
    title,
    poster_path,
    release_date,
    overview,
    vote_average,
    onClick,
  } = props;
  return (
    <Container onClick={() => onClick(id)}>
      <ImageContainer>
        <Image src={poster_path} />
      </ImageContainer>
      <ContentContainer>
        <ContentHeader>
          <Rate>{vote_average * 10}%</Rate>
          <Content>
            <Title>{title}</Title>
            <Date>{release_date}</Date>
          </Content>
        </ContentHeader>
        <ContentBody>
          <OverView>{overview}</OverView>
        </ContentBody>
      </ContentContainer>
    </Container>
  );
}
