import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: grid;
  width: 200px;
  height: 240px;

  background: #645645;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  cursor: grab;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
`;

export const Label = styled.span`
  display: flex;
  font-size: 12px;
  justify-content: center;
  border-radius: 15px;
  margin-top: 3px;
  background: ${props => props.color};
  cursor: pointer;
`;

export const Content = styled.div`
  display: table;
`;
