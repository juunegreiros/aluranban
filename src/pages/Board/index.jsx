import React, { useState, useEffect } from 'react';
import { Container, Title } from './style';
import apiTarefas from '../../api/tarefas';
import Page from '../../components/Page';
import Kanban from '../../components/Kanban';
import NovaTarefaForm from '../../components/NovaTarefaForm';

const Board = () => {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    apiTarefas.busca().then((dados) => setTarefas(dados));
  }, []);

  const cadastraTarefa = (tarefa) => {
    apiTarefas.cadastra(tarefa).then(() => {
      setTarefas([...tarefas, tarefa]);
    });
  };

  return (
    <Page>
      <Container>
        <Title>Seu Board</Title>
        <NovaTarefaForm cadastraTarefa={cadastraTarefa} />
        <Kanban tarefas={tarefas} />
      </Container>
    </Page>
  );
};

export default Board;
