import React, { useState, useEffect } from 'react';
import Page from '../../components/Page';
import { Container, Title } from './style';
import Kanban from '../../components/Kanban';
import api from '../../api';

const Board = () => {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    api.buscaTarefas().then((dados) => setTarefas(dados));
  }, []);

  return (
    <Page>
      <Container>
        <Title>Seu Board</Title>

        <Kanban tarefas={tarefas} />
      </Container>
    </Page>
  );
};

export default Board;
