import React, { useState } from 'react';
import KanbanWrapper from './style';
import Lista from './Lista';
import api from '../../api';

const Kanban = () => {
  const [tarefas, setTarefas] = useState([]);
  api.buscaTarefas().then((dados) => {
    setTarefas(dados);
  });

  return (
    <KanbanWrapper>
      <Lista tarefas={tarefas} tipo="backlog" titulo="Backlog" />
      <Lista tarefas={tarefas} tipo="todo" titulo="To do" />
      <Lista tarefas={tarefas} tipo="doing" titulo="Doing" />
      <Lista tarefas={tarefas} tipo="done" titulo="Done" />
    </KanbanWrapper>
  );
};

export default Kanban;
