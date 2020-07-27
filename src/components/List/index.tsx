import React from 'react';

import Card from '../Card';

import { Container } from './styles';

const List: React.FC = () => {
  return (
    <Container>
      <h2>Overview</h2>
      <ul>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </ul>
    </Container>
  );
}

export default List;
