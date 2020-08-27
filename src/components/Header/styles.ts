import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  padding: 0 30px;

  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};

  display: flex;
  align-items: center;
  justify-content: space-between;

  /* img {
    height: 60px;
    width: auto;
  } */
`;
