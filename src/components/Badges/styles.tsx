import styled from 'styled-components';
import Colors from 'src/util/Colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px 5px;
  padding: 5px 5px;
  border: 1px solid ${Colors.input};
  height: 15px;
  border-radius: 10px;

  font-size: 10px;
  font-family: 'Abel';
`;
