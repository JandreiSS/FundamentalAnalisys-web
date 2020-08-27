import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;

  width: 200px;
  height: 250px;

  margin: 10px 0 0 20px;

  background: #000;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  cursor: grab;
`;

export const Button = styled.button`
  display: flex;
  font-size: 10px;
  font-weight: bold;
  margin-top: 3px;
  background: ${props => props.color};
  cursor: pointer;
  line-height: 14px;
  padding: 3px 6px;
  border-radius: 20px;
  border-width: 0;
  box-sizing: border-box;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#3f5061')};
    color: #FFF;
  }
`;

export const Content = styled.table``;
