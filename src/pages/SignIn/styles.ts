import styled from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/background.png';

export const Container = styled.div`
  height: 100vh;
  flex: 1;

  display: flex;
  align-items: stretch;

  background-color: #030E1A;
  box-sizing: border-box;
`;


export const Content = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  align-items: center;
  place-content: center;

  width: 100%;
  max-width: 500px;

  form {
    margin: 70px;
    width: 340px;
    text-align: center;

    > h1 {
      margin-bottom: 24px;
      color: #e5e5e5;
    }

    /* Entradas de dados do usuário */
    input {
      background: #c4c4c4;
      border-radius: 10px;
      border: 2px solid #c4c4c4;
      padding: 14px;
      width: 100%;
      color: #312e38;

      &::placeholder {
        color: #666360;
      }

      & + input {
        margin-top: 8px;
      }
    }

    /* Botão Entrar */
    button {
      background: #3f5061;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      color: #e5e5e5;
      width: 100%;
      font-weight: 500;
      margin-top: 16px;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#3f5061')};
      }
    }

    /* Esqueci minha senha */
    a {
      color: #c4c4c4;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#c4c4c4')};
      }
    }
  }

  > a {
    color: #e5e5e5;

    display: block;
    margin-top: 0px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 8px;
    }

    &:hover {
      color: ${shade(0.2, '#e5e5e5')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
  opacity: 0.2;
`;
