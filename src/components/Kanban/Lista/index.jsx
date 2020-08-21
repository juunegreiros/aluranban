import React from 'react';
import { ListaWrapper, Titulo } from './style';
import Tarefa from '../Tarefa';

const Lista = ({ tarefas, titulo, tipo }) => (
  <ListaWrapper>
    <Titulo>{titulo}</Titulo>
    {tarefas.map((tarefa) => (
      <Tarefa autor={tarefa.usuario.nome} texto={tarefa.texto} />
    ))}
  </ListaWrapper>
);

export default Lista;
