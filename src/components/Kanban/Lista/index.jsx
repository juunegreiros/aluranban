import React from 'react';
import { ListaWrapper, Titulo } from './style';
import Tarefa from '../Tarefa';

const Lista = ({ tarefas, titulo, tipo }) => {
  const tarefasTipo = tarefas.filter((tarefa) => tarefa.quadro === tipo);
  return (
    <ListaWrapper>
      <Titulo>{titulo}</Titulo>
      {tarefasTipo.map((tarefa) => (
        <Tarefa autor={tarefa.usuario.nome} texto={tarefa.texto} />
      ))}
    </ListaWrapper>
  );
};

export default Lista;
