import styled from 'styled-components';
import Colors from 'src/util/Colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 40px;
  background-color: ${Colors.backgroundPrimary};
  font-size: 10px;
  font-family: Abel;
`;

export const Title = styled.h2`
  font-family: Abel;
  color: ${Colors.titles};
`;
