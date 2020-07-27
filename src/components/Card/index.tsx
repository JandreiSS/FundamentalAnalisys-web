import React from 'react';
import { useDrag } from 'react-dnd';

import { Container, Label, Header, Content } from './styles';

const Card: React.FC = () => {
  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'CARD' },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <li>
      <Container ref={dragRef} >
        <Header>
          <h1>WEGE3</h1>
        </Header>

        <Label color="#123123">Máquinas e Equipamentos</Label>
        <Label color="#123789">Motores, Compressores</Label>

        <Content>
          <h2>Cotação</h2>
          <p>P/L</p>
          <p>D.YIELD</p>
          <p>EBITDA</p>
          <p>ROE</p>
          <p>EV/EBIT</p>
        </Content>
      </Container>
    </li>
  );
}

export default Card;
