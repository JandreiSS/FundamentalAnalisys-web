import React from 'react';

import logoImg from '../../assets/logo.png';

import { Container, Content, Card } from './styles';

const Dashboard: React.FC = () => (
  <Container>
    <Content>
      <Card>
        <h1>WEGE3</h1>

        <p>NOME DA EMPRESA</p>

        <button>Setor</button>
        <button>Subsetor</button>
      </Card>
    </Content>
  </Container>
)

export default Dashboard;
