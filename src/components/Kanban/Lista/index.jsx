import React from 'react';
import { ListaWrapper, Titulo } from './style';
import Tarefa from '../Tarefa';

const Lista = ({ tarefas, titulo, tipo }) => {
  const cores = {
    backlog: 'red',
    todo: 'pink',
    doing: 'yellow',
    done: 'green',
  };
  const tarefasTipo = tarefas.filter((tarefa) => tarefa.quadro === tipo);

  return (
    <ListaWrapper tipo={tipo} cores={cores}>
      <Titulo>{titulo}</Titulo>
      {tarefasTipo.map((tarefa) => (
        <Tarefa autor={tarefa.usuario.nome} texto={tarefa.texto} />
      ))}
    </ListaWrapper>
  );
};

export default Lista;
