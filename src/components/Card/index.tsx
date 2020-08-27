import React from 'react';
import { useDrag } from 'react-dnd';

import { Container, Button, Content } from './styles';

const Card: React.FC = () => {
  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'CARD' },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Container ref={dragRef} >
      <h1>WEGE3</h1>

      <Button >Máquinas e Equipamentos</Button>
      <Button >Motores, Compressores e Outros</Button>

      <h2>Cotação</h2>

      <Content>
        <tr>
          <td align="right" >P/L</td>
          <td>123,123</td>
        </tr>
        <tr>
          <td align="right" >D.YIELD</td>
          <td>123,123</td>
        </tr>
        <tr>
          <td align="right" >EBITDA</td>
          <td>123,123</td>
        </tr>
        <tr>
          <td align="right" >ROE</td>
          <td>123,123</td>
        </tr>
        <tr>
          <td align="right" >EV/EBIT</td>
          <td>123,123</td>
        </tr>
      </Content>
    </Container>
  );
}

export default Card;
