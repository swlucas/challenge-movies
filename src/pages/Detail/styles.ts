import styled from 'styled-components';
import Colors from 'src/util/Colors';
export const Container = styled.div`
  margin-top: 20px;
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  padding: 0 20px 0 20px;
  align-items: center;
  background-color: ${Colors.backgroundSecundary};
  height: 30px;
`;
export const Title = styled.div`
  font-family: Abel;
  color: ${Colors.backgroundPrimary};
`;

export const Date = styled.small`
  color: ${Colors.details};
  font-family: 'Abel';
  font-size: 10px;
`;

export const Body = styled.body`
  display: flex;
  background-color: ${Colors.backgroudnDetail};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 20px 0 20px;
`;

export const OverViewContainer = styled.div``;

export const OverViewTitle = styled.div`
  border-bottom: 1px solid ${Colors.titles};
  color: ${Colors.backgroundPrimary};
  font-family: 'Abel';
`;
export const OverView = styled.p`
  font-size: 0.5em;
  font-family: 'Lato';
  color: ${Colors.text};
  margin: 5px;
`;

export const InfoContainer = styled.div``;

export const InfoContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const InfoTitle = styled.div`
  border-bottom: 1px solid ${Colors.titles};
  color: ${Colors.backgroundPrimary};
  font-family: 'Abel';
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px 10px;
`;
export const Label = styled.label`
  color: ${Colors.backgroundPrimary};
  font-size: 13px;
  font-family: 'Abel';
`;
export const Value = styled.span`
  font-size: 0.5em;
  font-family: 'Lato';
  color: ${Colors.text};
`;

export const GenreAverageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${Colors.backgroundPrimary};

  padding-bottom: 10px;
`;

export const Average = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Abel';
  font-size: 10px;
  margin-right: 5px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${Colors.backgroundPrimary};
  border: 2px solid ${Colors.titles};
  color: ${Colors.titles};
`;

export const ImageContainer = styled.div`
  width: 50%;
`;

export const Image = styled.img`
  width: 100%;
`;
