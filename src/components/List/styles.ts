import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
  padding: 0 15px;

  width: 100%;
  flex: 1;

  h2 {
    justify-content: space-between;
    align-items: center;
    height: 42px;

    font-weight: 700;
    font-size: 24px;
    padding-top: 10px;
  }

  ul {
    margin-top: 10px;

    li {
      display: inline-block;

      & + li {
        padding-left: 15px;
      }
    }
  }
`;
