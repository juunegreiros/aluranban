import React from 'react';
import { TarefaWrapper, Texto, Autor } from './style';

const Tarefa = ({ autor, texto, removeTarefa }) => (
  <TarefaWrapper>
    <Texto>{texto}</Texto>

    <Autor>{autor}</Autor>

    <button onClick={removeTarefa}>Delete</button>
  </TarefaWrapper>
);

export default Tarefa;
