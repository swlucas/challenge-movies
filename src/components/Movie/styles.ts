import styled from 'styled-components';
import Colors from 'src/util/Colors';

export const Container = styled.div`
  display: flex;

  width: 100%;
  height: 150px;

  padding: 0 30px 0 30px;
`;

export const ImageContainer = styled.div`
  width: 130px;
`;

export const Image = styled.img`
  width: 100%;
`;

export const ContentContainer = styled.div`
  width: 100%;
`;

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;

  background-color: ${Colors.backgroundPrimary};
  max-height: 30px;
  padding: 35px 10px 0 10px;
`;

export const Rate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: ${Colors.backgroundPrimary};
  border: 2px solid ${Colors.titles};
  color: ${Colors.titles};
  font-family: 'Abel';
  font-size: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.span`
  color: ${Colors.titles};
  font-family: 'Abel';
`;

export const Date = styled.small`
  color: ${Colors.details};
  font-family: 'Abel';
  font-size: 10px;
`;

export const ContentBody = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 100%;
  background-color: ${Colors.backgroundSecundary};
  padding: 20px 10px 0 10px;
`;

export const OverView = styled.p`
  font-family: 'Lato';
  font-size: 0.5em;
  color: ${Colors.text};
`;
