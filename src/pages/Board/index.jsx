import React from 'react';
import Page from '../../components/Page';
import { Container, Title } from './style';
import Kanban from '../../components/Kanban';

const Board = () => (
  <Page>
    <Container>
      <Title>Seu Board</Title>

      <Kanban />
    </Container>
  </Page>
);

export default Board;
