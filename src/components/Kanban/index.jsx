import React from 'react';
import KanbanWrapper from './style';
import Lista from './Lista';

const Kanban = ({ tarefas }) => {
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
