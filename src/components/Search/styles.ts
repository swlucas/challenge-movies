import styled from 'styled-components';
import Colors from 'src/util/Colors';

export const Container = styled.div`
  padding: 30px;
`;

export const Input = styled.input.attrs({
  placeholder: 'Busque um filme por nome, ano ou gênero...',
  type: 'text',
})`
  width: 100%;
  height: 30px;
  padding: 0 20px 0 20px;
  border-radius: 15px;
  text-overflow: ellipsis;
  background-color: ${Colors.backgroundSecundary};
  color: ${Colors.input};

  ::placeholder {
    color: ${Colors.input};
  }

  font-family: Abel;
`;
