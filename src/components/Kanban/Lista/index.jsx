import React from 'react';
import { ListaWrapper, Titulo } from './style';
import Tarefa from '../Tarefa';
import apiTarefas from '../../../api/tarefas';

const Lista = ({ tarefas, titulo, tipo }) => {
  const cores = {
    backlog: 'red',
    todo: 'pink',
    doing: 'yellow',
    done: 'green',
  };
  const tarefasTipo = tarefas.filter((tarefa) => tarefa.quadro === tipo);
  const removeTarefa = (id) => {
    apiTarefas.remove(id);
  };

  return (
    <ListaWrapper tipo={tipo} cores={cores}>
      <Titulo>{titulo}</Titulo>
      {tarefasTipo.map((tarefa) => (
        <Tarefa
          key={tarefa.id}
          autor={tarefa.usuario.nome}
          texto={tarefa.texto}
          removeTarefa={() => removeTarefa(tarefa.id)}
        />
      ))}
    </ListaWrapper>
  );
};

export default Lista;
